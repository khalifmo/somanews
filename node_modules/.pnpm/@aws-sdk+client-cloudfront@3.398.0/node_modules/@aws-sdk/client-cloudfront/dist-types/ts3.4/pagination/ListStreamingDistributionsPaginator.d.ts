import { Paginator } from "@smithy/types";
import {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "../commands/ListStreamingDistributionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
export declare function paginateListStreamingDistributions(
  config: CloudFrontPaginationConfiguration,
  input: ListStreamingDistributionsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamingDistributionsCommandOutput>;
