import http from "node:http";
export declare class IncomingMessage extends http.IncomingMessage {
    constructor({ method, url, headers, body, remoteAddress, }: {
        method: string;
        url: string;
        headers: Record<string, string | string[]>;
        body?: Buffer;
        remoteAddress?: string;
    });
}
