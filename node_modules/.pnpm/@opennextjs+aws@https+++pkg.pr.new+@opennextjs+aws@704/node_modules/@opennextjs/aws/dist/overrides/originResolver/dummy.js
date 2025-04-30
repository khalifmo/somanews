const dummyOriginResolver = {
    name: "dummy",
    resolve: async (_path) => {
        return false;
    },
};
export default dummyOriginResolver;
