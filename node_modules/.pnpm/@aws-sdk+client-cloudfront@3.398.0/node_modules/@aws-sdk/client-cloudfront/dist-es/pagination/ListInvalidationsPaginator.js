import { CloudFrontClient } from "../CloudFrontClient";
import { ListInvalidationsCommand, } from "../commands/ListInvalidationsCommand";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListInvalidationsCommand(input), ...args);
};
export async function* paginateListInvalidations(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof CloudFrontClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudFront | CloudFrontClient");
        }
        yield page;
        const prevToken = token;
        token = page.InvalidationList.NextMarker;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
