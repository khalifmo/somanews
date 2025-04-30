import { AwsClient } from "aws4fetch";
import type { IncrementalCache } from "../../types/overrides";
export declare const getAwsClient: () => AwsClient;
declare const incrementalCache: IncrementalCache;
export default incrementalCache;
