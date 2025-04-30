import { FatalError } from "../../utils/error";
const dummyWarmer = {
    name: "dummy",
    invoke: async (_) => {
        throw new FatalError("Dummy warmer is not implemented");
    },
};
export default dummyWarmer;
