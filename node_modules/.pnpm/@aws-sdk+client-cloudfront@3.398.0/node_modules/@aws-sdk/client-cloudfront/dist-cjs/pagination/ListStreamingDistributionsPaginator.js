"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStreamingDistributions = void 0;
const CloudFrontClient_1 = require("../CloudFrontClient");
const ListStreamingDistributionsCommand_1 = require("../commands/ListStreamingDistributionsCommand");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamingDistributionsCommand_1.ListStreamingDistributionsCommand(input), ...args);
};
async function* paginateListStreamingDistributions(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof CloudFrontClient_1.CloudFrontClient) {
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
exports.paginateListStreamingDistributions = paginateListStreamingDistributions;
