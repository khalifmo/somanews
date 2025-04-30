import type { ReadableStream } from "node:stream/web";
export declare function fromReadableStream(stream: ReadableStream<Uint8Array>, base64?: boolean): Promise<string>;
export declare function toReadableStream(value: string, isBase64?: boolean): ReadableStream;
export declare function emptyReadableStream(): ReadableStream;
