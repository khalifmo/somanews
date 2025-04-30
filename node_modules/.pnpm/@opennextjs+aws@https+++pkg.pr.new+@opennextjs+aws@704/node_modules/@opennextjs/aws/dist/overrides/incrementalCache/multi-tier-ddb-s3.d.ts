import type { IncrementalCache } from "../../types/overrides";
/**
 * This cache implementation uses a multi-tier cache with a local cache, a DynamoDB metadata cache and an S3 cache.
 * It uses the same DynamoDB table as the default tag cache and the same S3 bucket as the default incremental cache.
 * It will first check the local cache.
 * If the local cache is expired, it will check the DynamoDB metadata cache to see if the local cache is still valid.
 * Lastly it will check the S3 cache.
 */
declare const multiTierCache: IncrementalCache;
export default multiTierCache;
