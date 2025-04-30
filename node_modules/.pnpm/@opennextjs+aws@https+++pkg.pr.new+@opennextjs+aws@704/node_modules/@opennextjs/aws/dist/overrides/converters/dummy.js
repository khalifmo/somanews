const converter = {
    convertFrom(event) {
        return Promise.resolve({
            type: "dummy",
            original: event,
        });
    },
    convertTo(internalResult) {
        return Promise.resolve({
            type: "dummy",
            original: internalResult,
        });
    },
    name: "dummy",
};
export default converter;
