import { CloudFrontClient } from "../CloudFrontClient";
import { ListStreamingDistributionsCommand, } from "../commands/ListStreamingDistributionsCommand";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamingDistributionsCommand(input), ...args);
};
export async function* paginateListStreamingDistributions(config, input, ...additionalArguments) {
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
        token = page.StreamingDistributionList.NextMarker;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
