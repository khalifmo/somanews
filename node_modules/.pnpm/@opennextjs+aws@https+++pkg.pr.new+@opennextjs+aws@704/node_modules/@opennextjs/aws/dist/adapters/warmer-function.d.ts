export interface WarmerEvent {
    type: "warmer";
    warmerId: string;
    index: number;
    concurrency: number;
    delay: number;
}
export interface WarmerResponse {
    type: "warmer";
    serverId: string;
}
export declare const handler: (...args: any[]) => any;
