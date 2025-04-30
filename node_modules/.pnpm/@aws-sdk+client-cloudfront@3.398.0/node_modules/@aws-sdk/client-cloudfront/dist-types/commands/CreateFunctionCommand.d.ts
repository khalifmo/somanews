import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateFunctionRequest, CreateFunctionResult } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandInput extends CreateFunctionRequest {
}
/**
 * @public
 *
 * The output of {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandOutput extends CreateFunctionResult, __MetadataBearer {
}
/**
 * @public
 * <p>Creates a CloudFront function.</p>
 *          <p>To create a function, you provide the function code and some configuration information
 * 			about the function. The response contains an Amazon Resource Name (ARN) that uniquely
 * 			identifies the function.</p>
 *          <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage,
 * 			you can test the function with <code>TestFunction</code>, and update it with
 * 				<code>UpdateFunction</code>.</p>
 *          <p>When you're ready to use your function with a CloudFront distribution, use
 * 				<code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code>
 * 			stage to <code>LIVE</code>. When it's live, you can attach the function to a
 * 			distribution's cache behavior, using the function's ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   FunctionConfig: { // FunctionConfig
 *     Comment: "STRING_VALUE", // required
 *     Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 *   },
 *   FunctionCode: "BLOB_VALUE", // required
 * };
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionResult
 * //   FunctionSummary: { // FunctionSummary
 * //     Name: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     FunctionConfig: { // FunctionConfig
 * //       Comment: "STRING_VALUE", // required
 * //       Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //     },
 * //     FunctionMetadata: { // FunctionMetadata
 * //       FunctionARN: "STRING_VALUE", // required
 * //       Stage: "DEVELOPMENT" || "LIVE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionCommandInput - {@link CreateFunctionCommandInput}
 * @returns {@link CreateFunctionCommandOutput}
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FunctionAlreadyExists} (client fault)
 *  <p>A function with the same name already exists in this Amazon Web Services account. To create a
 * 			function, you must provide a unique name. To update an existing function, use
 * 				<code>UpdateFunction</code>.</p>
 *
 * @throws {@link FunctionSizeLimitExceeded} (client fault)
 *  <p>The function is too large. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link TooManyFunctions} (client fault)
 *  <p>You have reached the maximum number of CloudFront functions for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export declare class CreateFunctionCommand extends $Command<CreateFunctionCommandInput, CreateFunctionCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateFunctionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CreateFunctionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFunctionCommandInput, CreateFunctionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
