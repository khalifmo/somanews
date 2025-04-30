import { FatalError } from "../../utils/error";
const dummyLoader = {
    name: "dummy",
    load: async (_) => {
        throw new FatalError("Dummy loader is not implemented");
    },
};
export default dummyLoader;
