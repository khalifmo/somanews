export interface RevalidateEvent {
    type: "revalidate";
    records: {
        host: string;
        url: string;
        id: string;
    }[];
}
export declare const handler: (...args: any[]) => any;
