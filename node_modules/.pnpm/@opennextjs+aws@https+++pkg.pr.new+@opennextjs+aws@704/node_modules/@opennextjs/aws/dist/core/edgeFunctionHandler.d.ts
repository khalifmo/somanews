import type { RequestData } from "../types/global";
type EdgeRequest = Omit<RequestData, "page">;
export default function edgeFunctionHandler(request: EdgeRequest): Promise<Response>;
export {};
