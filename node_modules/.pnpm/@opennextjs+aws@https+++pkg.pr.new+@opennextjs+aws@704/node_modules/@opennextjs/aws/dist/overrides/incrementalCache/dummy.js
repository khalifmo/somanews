import { IgnorableError } from "../../utils/error";
const dummyIncrementalCache = {
    name: "dummy",
    get: async () => {
        throw new IgnorableError('"Dummy" cache does not cache anything');
    },
    set: async () => {
        throw new IgnorableError('"Dummy" cache does not cache anything');
    },
    delete: async () => {
        throw new IgnorableError('"Dummy" cache does not cache anything');
    },
};
export default dummyIncrementalCache;
