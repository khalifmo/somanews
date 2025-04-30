import type { AwsClient } from "aws4fetch";
export declare function customFetchClient(client: AwsClient): (input: RequestInfo, init: RequestInit) => Promise<Response>;
