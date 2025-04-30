export function removeUndefinedFromQuery(query) {
    const newQuery = {};
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
            newQuery[key] = value;
        }
    }
    return newQuery;
}
