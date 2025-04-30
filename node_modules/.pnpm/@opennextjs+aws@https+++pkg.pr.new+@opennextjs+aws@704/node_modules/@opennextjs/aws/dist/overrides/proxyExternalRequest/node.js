import { request } from "node:https";
import { Readable } from "node:stream";
import { debug, error } from "../../adapters/logger";
import { isBinaryContentType } from "../../utils/binary";
function filterHeadersForProxy(headers) {
    const filteredHeaders = {};
    const disallowedHeaders = [
        "host",
        "connection",
        "via",
        "x-cache",
        "transfer-encoding",
        "content-encoding",
        "content-length",
    ];
    Object.entries(headers)
        .filter(([key, _]) => {
        const lowerKey = key.toLowerCase();
        return !(disallowedHeaders.includes(lowerKey) || lowerKey.startsWith("x-amz"));
    })
        .forEach(([key, value]) => {
        filteredHeaders[key] = value?.toString() ?? "";
    });
    return filteredHeaders;
}
const nodeProxy = {
    name: "node-proxy",
    proxy: (internalEvent) => {
        const { url, headers, method, body } = internalEvent;
        debug("proxyRequest", url);
        return new Promise((resolve, reject) => {
            const filteredHeaders = filterHeadersForProxy(headers);
            debug("filteredHeaders", filteredHeaders);
            const req = request(url, {
                headers: filteredHeaders,
                method,
                rejectUnauthorized: false,
            }, (_res) => {
                const resHeaders = _res.headers;
                const nodeReadableStream = resHeaders["content-encoding"] === "br"
                    ? _res.pipe(require("node:zlib").createBrotliDecompress())
                    : resHeaders["content-encoding"] === "gzip"
                        ? _res.pipe(require("node:zlib").createGunzip())
                        : _res;
                const isBase64Encoded = isBinaryContentType(resHeaders["content-type"]) ||
                    !!resHeaders["content-encoding"];
                const result = {
                    type: "core",
                    headers: filterHeadersForProxy(resHeaders),
                    statusCode: _res.statusCode ?? 200,
                    // TODO: check base64 encoding
                    isBase64Encoded,
                    body: Readable.toWeb(nodeReadableStream),
                };
                resolve(result);
                _res.on("error", (e) => {
                    error("proxyRequest error", e);
                    reject(e);
                });
            });
            if (body && method !== "GET" && method !== "HEAD") {
                req.write(body);
            }
            req.end();
        });
    },
};
export default nodeProxy;
