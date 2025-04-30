import type { InternalEvent, InternalResult, MiddlewareResult } from "../../types/open-next";
import type { Converter } from "../../types/overrides";
declare global {
    var __dangerous_ON_edge_converter_returns_request: boolean | undefined;
}
declare const converter: Converter<InternalEvent, InternalResult | MiddlewareResult>;
export default converter;
