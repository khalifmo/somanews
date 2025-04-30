import type { Converter } from "../../types/overrides";
type DummyEventOrResult = {
    type: "dummy";
    original: any;
};
declare const converter: Converter<DummyEventOrResult, DummyEventOrResult>;
export default converter;
