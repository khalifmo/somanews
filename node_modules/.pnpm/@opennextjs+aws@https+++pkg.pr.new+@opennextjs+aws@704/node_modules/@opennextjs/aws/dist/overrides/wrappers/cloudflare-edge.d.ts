import type { InternalEvent, InternalResult, MiddlewareResult } from "../../types/open-next";
import type { WrapperHandler } from "../../types/overrides";
declare const _default: {
    wrapper: WrapperHandler<InternalEvent, InternalResult | MiddlewareResult>;
    name: string;
    supportStreaming: true;
    edgeRuntime: true;
};
export default _default;
