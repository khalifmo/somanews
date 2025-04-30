import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { UpdateDistributionRequestFilterSensitiveLog, UpdateDistributionResultFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateDistributionCommand, se_UpdateDistributionCommand } from "../protocols/Aws_restXml";
export { $Command };
export class UpdateDistributionCommand extends $Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateDistributionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudFrontClient";
        const commandName = "UpdateDistributionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: UpdateDistributionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: UpdateDistributionResultFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateDistributionCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateDistributionCommand(output, context);
    }
}
