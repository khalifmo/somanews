import type { IncomingMessage, OutgoingHttpHeader, OutgoingHttpHeaders, ServerResponse } from "node:http";
import type { Socket } from "node:net";
import type { TransformCallback } from "node:stream";
import { Transform } from "node:stream";
import type { StreamCreator } from "../types/open-next";
export declare class OpenNextNodeResponse extends Transform implements ServerResponse {
    private fixHeaders;
    private onEnd;
    private streamCreator?;
    private initialHeaders?;
    statusCode: number;
    statusMessage: string;
    headers: OutgoingHttpHeaders;
    private _cookies;
    private responseStream?;
    headersSent: boolean;
    _chunks: Buffer[];
    strictContentLength: boolean;
    assignSocket(_socket: Socket): void;
    detachSocket(_socket: Socket): void;
    writeContinue(_callback?: (() => void) | undefined): void;
    writeEarlyHints(_hints: Record<string, string | string[]>, _callback?: (() => void) | undefined): void;
    writeProcessing(): void;
    /**
     * This is a dummy request object to comply with the ServerResponse interface
     * It will never be defined
     */
    req: IncomingMessage;
    chunkedEncoding: boolean;
    shouldKeepAlive: boolean;
    useChunkedEncodingByDefault: boolean;
    sendDate: boolean;
    connection: Socket | null;
    socket: Socket | null;
    setTimeout(_msecs: number, _callback?: (() => void) | undefined): this;
    addTrailers(_headers: OutgoingHttpHeaders | readonly [string, string][]): void;
    constructor(fixHeaders: (headers: OutgoingHttpHeaders) => void, onEnd: (headers: OutgoingHttpHeaders) => Promise<void>, streamCreator?: StreamCreator | undefined, initialHeaders?: OutgoingHttpHeaders | undefined);
    get originalResponse(): this;
    get finished(): boolean;
    setHeader(name: string, value: string | string[]): this;
    removeHeader(name: string): this;
    hasHeader(name: string): boolean;
    getHeaders(): OutgoingHttpHeaders;
    getHeader(name: string): OutgoingHttpHeader | undefined;
    getHeaderNames(): string[];
    flushHeaders(): void;
    appendHeader(name: string, value: string | string[]): this;
    writeHead(statusCode: number, statusMessage?: string | undefined, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[] | undefined): this;
    writeHead(statusCode: number, headers?: OutgoingHttpHeaders | OutgoingHttpHeader[] | undefined): this;
    /**
     * OpenNext specific method
     */
    getFixedHeaders(): OutgoingHttpHeaders;
    getBody(): Buffer;
    private _internalWrite;
    _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void;
    _flush(callback: TransformCallback): void;
    /**
     * New method in Node 18.15+
     * There are probably not used right now in Next.js, but better be safe than sorry
     */
    setHeaders(headers: Headers | Map<string, number | string | readonly string[]>): this;
    /**
     * Next specific methods
     * On earlier versions of next.js, those methods are mandatory to make everything work
     */
    get sent(): boolean;
    getHeaderValues(name: string): string[] | undefined;
    send(): void;
    body(value: string): this;
    onClose(callback: () => void): void;
    redirect(destination: string, statusCode: number): this;
    private fixHeadersForError;
}
