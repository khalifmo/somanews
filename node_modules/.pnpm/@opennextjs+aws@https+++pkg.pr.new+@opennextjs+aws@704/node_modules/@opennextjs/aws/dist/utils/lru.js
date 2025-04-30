export class LRUCache {
    maxSize;
    cache = new Map();
    constructor(maxSize) {
        this.maxSize = maxSize;
    }
    get(key) {
        const result = this.cache.get(key);
        // We could have used .has to allow for nullish value to be stored but we don't need that right now
        if (result) {
            // By removing and setting the key again we ensure it's the most recently used
            this.cache.delete(key);
            this.cache.set(key, result);
        }
        return result;
    }
    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            if (firstKey !== undefined) {
                this.cache.delete(firstKey);
            }
        }
        this.cache.set(key, value);
    }
    delete(key) {
        this.cache.delete(key);
    }
}
