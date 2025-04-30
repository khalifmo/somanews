import { Paginator } from "@smithy/types";
import {
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "../commands/ListInvalidationsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
export declare function paginateListInvalidations(
  config: CloudFrontPaginationConfiguration,
  input: ListInvalidationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInvalidationsCommandOutput>;
