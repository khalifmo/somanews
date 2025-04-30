import { Readable } from "node:stream";
export function fromReadableStream(stream, base64) {
    const reader = stream.getReader();
    const chunks = [];
    return new Promise((resolve, reject) => {
        function pump() {
            reader
                .read()
                .then(({ done, value }) => {
                if (done) {
                    resolve(Buffer.concat(chunks).toString(base64 ? "base64" : "utf8"));
                    return;
                }
                chunks.push(value);
                pump();
            })
                .catch(reject);
        }
        pump();
    });
}
export function toReadableStream(value, isBase64) {
    return Readable.toWeb(Readable.from(Buffer.from(value, isBase64 ? "base64" : "utf8")));
}
export function emptyReadableStream() {
    if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
        return Readable.toWeb(Readable.from([Buffer.from("SOMETHING")]));
    }
    return Readable.toWeb(Readable.from([]));
}
