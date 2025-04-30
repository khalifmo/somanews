import { Paginator } from "@smithy/types";
import { ListCloudFrontOriginAccessIdentitiesCommandInput, ListCloudFrontOriginAccessIdentitiesCommandOutput } from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListCloudFrontOriginAccessIdentities(config: CloudFrontPaginationConfiguration, input: ListCloudFrontOriginAccessIdentitiesCommandInput, ...additionalArguments: any): Paginator<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
