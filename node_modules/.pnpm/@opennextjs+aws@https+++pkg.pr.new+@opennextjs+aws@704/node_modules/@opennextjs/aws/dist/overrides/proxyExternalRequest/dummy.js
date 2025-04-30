import { FatalError } from "../../utils/error";
const DummyProxyExternalRequest = {
    name: "dummy",
    proxy: async (_event) => {
        throw new FatalError("This is a dummy implementation");
    },
};
export default DummyProxyExternalRequest;
