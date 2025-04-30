export declare function setNodeEnv(): void;
export declare function generateUniqueId(): string;
/**
 * Create an array of arrays of size `chunkSize` from `items`
 * @param items Array of T
 * @param chunkSize size of each chunk
 * @returns T[][]
 */
export declare function chunk<T>(items: T[], chunkSize: number): T[][];
export declare function parseNumberFromEnv(envValue: string | undefined): number | undefined;
