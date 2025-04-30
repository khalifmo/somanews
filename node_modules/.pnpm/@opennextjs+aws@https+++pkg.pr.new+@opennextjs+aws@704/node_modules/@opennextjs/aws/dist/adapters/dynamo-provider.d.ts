declare const PHYSICAL_RESOURCE_ID: "dynamodb-cache";
export interface InitializationFunctionEvent {
    type: "initializationFunction";
    requestType: "create" | "update" | "delete";
    resourceId: typeof PHYSICAL_RESOURCE_ID;
}
export declare const handler: (...args: any[]) => any;
export {};
