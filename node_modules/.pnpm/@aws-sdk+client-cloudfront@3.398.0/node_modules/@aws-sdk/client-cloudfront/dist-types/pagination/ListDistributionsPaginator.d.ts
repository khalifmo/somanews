import { Paginator } from "@smithy/types";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "../commands/ListDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListDistributions(config: CloudFrontPaginationConfiguration, input: ListDistributionsCommandInput, ...additionalArguments: any): Paginator<ListDistributionsCommandOutput>;
