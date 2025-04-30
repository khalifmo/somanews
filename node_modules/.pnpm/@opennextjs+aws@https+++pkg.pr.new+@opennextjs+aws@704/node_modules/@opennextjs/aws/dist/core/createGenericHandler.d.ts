import type { BaseEventOrResult, InternalEvent, InternalResult } from "../types/open-next";
import type { OpenNextHandler } from "../types/overrides";
type HandlerType = "imageOptimization" | "revalidate" | "warmer" | "middleware" | "initializationFunction";
type GenericHandler<Type extends HandlerType, E extends BaseEventOrResult = InternalEvent, R extends BaseEventOrResult = InternalResult> = {
    handler: OpenNextHandler<E, R>;
    type: Type;
};
export declare function createGenericHandler<Type extends HandlerType, E extends BaseEventOrResult = InternalEvent, R extends BaseEventOrResult = InternalResult>(handler: GenericHandler<Type, E, R>): Promise<(...args: any[]) => any>;
export {};
