import type { IncomingMessage, ServerResponse } from "node:http";
import type { APIGatewayProxyEventHeaders } from "aws-lambda";
import type { NextConfig } from "next/dist/server/config-shared";
import type { NextUrlWithParsedQuery } from "next/dist/server/request-meta";
export declare function optimizeImage(headers: APIGatewayProxyEventHeaders, imageParams: any, nextConfig: NextConfig, handleRequest: (newReq: IncomingMessage, newRes: ServerResponse, newParsedUrl?: NextUrlWithParsedQuery) => Promise<void>): Promise<{
    buffer: Buffer;
    contentType: string;
    maxAge: number;
    etag: string;
    upstreamEtag: string;
    error?: unknown;
}>;
