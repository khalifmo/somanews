export declare class LRUCache<T> {
    private maxSize;
    private cache;
    constructor(maxSize: number);
    get(key: string): T | undefined;
    set(key: string, value: any): void;
    delete(key: string): void;
}
