import { FatalError } from "../../utils/error";
const dummyQueue = {
    name: "dummy",
    send: async () => {
        throw new FatalError("Dummy queue is not implemented");
    },
};
export default dummyQueue;
