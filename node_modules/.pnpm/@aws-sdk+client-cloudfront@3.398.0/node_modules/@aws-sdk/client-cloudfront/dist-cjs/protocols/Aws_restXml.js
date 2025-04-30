"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.se_GetInvalidationCommand = exports.se_GetFunctionCommand = exports.se_GetFieldLevelEncryptionProfileConfigCommand = exports.se_GetFieldLevelEncryptionProfileCommand = exports.se_GetFieldLevelEncryptionConfigCommand = exports.se_GetFieldLevelEncryptionCommand = exports.se_GetDistributionConfigCommand = exports.se_GetDistributionCommand = exports.se_GetContinuousDeploymentPolicyConfigCommand = exports.se_GetContinuousDeploymentPolicyCommand = exports.se_GetCloudFrontOriginAccessIdentityConfigCommand = exports.se_GetCloudFrontOriginAccessIdentityCommand = exports.se_GetCachePolicyConfigCommand = exports.se_GetCachePolicyCommand = exports.se_DescribeFunctionCommand = exports.se_DeleteStreamingDistributionCommand = exports.se_DeleteResponseHeadersPolicyCommand = exports.se_DeleteRealtimeLogConfigCommand = exports.se_DeletePublicKeyCommand = exports.se_DeleteOriginRequestPolicyCommand = exports.se_DeleteOriginAccessControlCommand = exports.se_DeleteMonitoringSubscriptionCommand = exports.se_DeleteKeyGroupCommand = exports.se_DeleteFunctionCommand = exports.se_DeleteFieldLevelEncryptionProfileCommand = exports.se_DeleteFieldLevelEncryptionConfigCommand = exports.se_DeleteDistributionCommand = exports.se_DeleteContinuousDeploymentPolicyCommand = exports.se_DeleteCloudFrontOriginAccessIdentityCommand = exports.se_DeleteCachePolicyCommand = exports.se_CreateStreamingDistributionWithTagsCommand = exports.se_CreateStreamingDistributionCommand = exports.se_CreateResponseHeadersPolicyCommand = exports.se_CreateRealtimeLogConfigCommand = exports.se_CreatePublicKeyCommand = exports.se_CreateOriginRequestPolicyCommand = exports.se_CreateOriginAccessControlCommand = exports.se_CreateMonitoringSubscriptionCommand = exports.se_CreateKeyGroupCommand = exports.se_CreateInvalidationCommand = exports.se_CreateFunctionCommand = exports.se_CreateFieldLevelEncryptionProfileCommand = exports.se_CreateFieldLevelEncryptionConfigCommand = exports.se_CreateDistributionWithTagsCommand = exports.se_CreateDistributionCommand = exports.se_CreateContinuousDeploymentPolicyCommand = exports.se_CreateCloudFrontOriginAccessIdentityCommand = exports.se_CreateCachePolicyCommand = exports.se_CopyDistributionCommand = exports.se_AssociateAliasCommand = void 0;
exports.se_UpdateKeyGroupCommand = exports.se_UpdateFunctionCommand = exports.se_UpdateFieldLevelEncryptionProfileCommand = exports.se_UpdateFieldLevelEncryptionConfigCommand = exports.se_UpdateDistributionWithStagingConfigCommand = exports.se_UpdateDistributionCommand = exports.se_UpdateContinuousDeploymentPolicyCommand = exports.se_UpdateCloudFrontOriginAccessIdentityCommand = exports.se_UpdateCachePolicyCommand = exports.se_UntagResourceCommand = exports.se_TestFunctionCommand = exports.se_TagResourceCommand = exports.se_PublishFunctionCommand = exports.se_ListTagsForResourceCommand = exports.se_ListStreamingDistributionsCommand = exports.se_ListResponseHeadersPoliciesCommand = exports.se_ListRealtimeLogConfigsCommand = exports.se_ListPublicKeysCommand = exports.se_ListOriginRequestPoliciesCommand = exports.se_ListOriginAccessControlsCommand = exports.se_ListKeyGroupsCommand = exports.se_ListInvalidationsCommand = exports.se_ListFunctionsCommand = exports.se_ListFieldLevelEncryptionProfilesCommand = exports.se_ListFieldLevelEncryptionConfigsCommand = exports.se_ListDistributionsByWebACLIdCommand = exports.se_ListDistributionsByResponseHeadersPolicyIdCommand = exports.se_ListDistributionsByRealtimeLogConfigCommand = exports.se_ListDistributionsByOriginRequestPolicyIdCommand = exports.se_ListDistributionsByKeyGroupCommand = exports.se_ListDistributionsByCachePolicyIdCommand = exports.se_ListDistributionsCommand = exports.se_ListContinuousDeploymentPoliciesCommand = exports.se_ListConflictingAliasesCommand = exports.se_ListCloudFrontOriginAccessIdentitiesCommand = exports.se_ListCachePoliciesCommand = exports.se_GetStreamingDistributionConfigCommand = exports.se_GetStreamingDistributionCommand = exports.se_GetResponseHeadersPolicyConfigCommand = exports.se_GetResponseHeadersPolicyCommand = exports.se_GetRealtimeLogConfigCommand = exports.se_GetPublicKeyConfigCommand = exports.se_GetPublicKeyCommand = exports.se_GetOriginRequestPolicyConfigCommand = exports.se_GetOriginRequestPolicyCommand = exports.se_GetOriginAccessControlConfigCommand = exports.se_GetOriginAccessControlCommand = exports.se_GetMonitoringSubscriptionCommand = exports.se_GetKeyGroupConfigCommand = exports.se_GetKeyGroupCommand = void 0;
exports.de_GetDistributionConfigCommand = exports.de_GetDistributionCommand = exports.de_GetContinuousDeploymentPolicyConfigCommand = exports.de_GetContinuousDeploymentPolicyCommand = exports.de_GetCloudFrontOriginAccessIdentityConfigCommand = exports.de_GetCloudFrontOriginAccessIdentityCommand = exports.de_GetCachePolicyConfigCommand = exports.de_GetCachePolicyCommand = exports.de_DescribeFunctionCommand = exports.de_DeleteStreamingDistributionCommand = exports.de_DeleteResponseHeadersPolicyCommand = exports.de_DeleteRealtimeLogConfigCommand = exports.de_DeletePublicKeyCommand = exports.de_DeleteOriginRequestPolicyCommand = exports.de_DeleteOriginAccessControlCommand = exports.de_DeleteMonitoringSubscriptionCommand = exports.de_DeleteKeyGroupCommand = exports.de_DeleteFunctionCommand = exports.de_DeleteFieldLevelEncryptionProfileCommand = exports.de_DeleteFieldLevelEncryptionConfigCommand = exports.de_DeleteDistributionCommand = exports.de_DeleteContinuousDeploymentPolicyCommand = exports.de_DeleteCloudFrontOriginAccessIdentityCommand = exports.de_DeleteCachePolicyCommand = exports.de_CreateStreamingDistributionWithTagsCommand = exports.de_CreateStreamingDistributionCommand = exports.de_CreateResponseHeadersPolicyCommand = exports.de_CreateRealtimeLogConfigCommand = exports.de_CreatePublicKeyCommand = exports.de_CreateOriginRequestPolicyCommand = exports.de_CreateOriginAccessControlCommand = exports.de_CreateMonitoringSubscriptionCommand = exports.de_CreateKeyGroupCommand = exports.de_CreateInvalidationCommand = exports.de_CreateFunctionCommand = exports.de_CreateFieldLevelEncryptionProfileCommand = exports.de_CreateFieldLevelEncryptionConfigCommand = exports.de_CreateDistributionWithTagsCommand = exports.de_CreateDistributionCommand = exports.de_CreateContinuousDeploymentPolicyCommand = exports.de_CreateCloudFrontOriginAccessIdentityCommand = exports.de_CreateCachePolicyCommand = exports.de_CopyDistributionCommand = exports.de_AssociateAliasCommand = exports.se_UpdateStreamingDistributionCommand = exports.se_UpdateResponseHeadersPolicyCommand = exports.se_UpdateRealtimeLogConfigCommand = exports.se_UpdatePublicKeyCommand = exports.se_UpdateOriginRequestPolicyCommand = exports.se_UpdateOriginAccessControlCommand = void 0;
exports.de_UpdateContinuousDeploymentPolicyCommand = exports.de_UpdateCloudFrontOriginAccessIdentityCommand = exports.de_UpdateCachePolicyCommand = exports.de_UntagResourceCommand = exports.de_TestFunctionCommand = exports.de_TagResourceCommand = exports.de_PublishFunctionCommand = exports.de_ListTagsForResourceCommand = exports.de_ListStreamingDistributionsCommand = exports.de_ListResponseHeadersPoliciesCommand = exports.de_ListRealtimeLogConfigsCommand = exports.de_ListPublicKeysCommand = exports.de_ListOriginRequestPoliciesCommand = exports.de_ListOriginAccessControlsCommand = exports.de_ListKeyGroupsCommand = exports.de_ListInvalidationsCommand = exports.de_ListFunctionsCommand = exports.de_ListFieldLevelEncryptionProfilesCommand = exports.de_ListFieldLevelEncryptionConfigsCommand = exports.de_ListDistributionsByWebACLIdCommand = exports.de_ListDistributionsByResponseHeadersPolicyIdCommand = exports.de_ListDistributionsByRealtimeLogConfigCommand = exports.de_ListDistributionsByOriginRequestPolicyIdCommand = exports.de_ListDistributionsByKeyGroupCommand = exports.de_ListDistributionsByCachePolicyIdCommand = exports.de_ListDistributionsCommand = exports.de_ListContinuousDeploymentPoliciesCommand = exports.de_ListConflictingAliasesCommand = exports.de_ListCloudFrontOriginAccessIdentitiesCommand = exports.de_ListCachePoliciesCommand = exports.de_GetStreamingDistributionConfigCommand = exports.de_GetStreamingDistributionCommand = exports.de_GetResponseHeadersPolicyConfigCommand = exports.de_GetResponseHeadersPolicyCommand = exports.de_GetRealtimeLogConfigCommand = exports.de_GetPublicKeyConfigCommand = exports.de_GetPublicKeyCommand = exports.de_GetOriginRequestPolicyConfigCommand = exports.de_GetOriginRequestPolicyCommand = exports.de_GetOriginAccessControlConfigCommand = exports.de_GetOriginAccessControlCommand = exports.de_GetMonitoringSubscriptionCommand = exports.de_GetKeyGroupConfigCommand = exports.de_GetKeyGroupCommand = exports.de_GetInvalidationCommand = exports.de_GetFunctionCommand = exports.de_GetFieldLevelEncryptionProfileConfigCommand = exports.de_GetFieldLevelEncryptionProfileCommand = exports.de_GetFieldLevelEncryptionConfigCommand = exports.de_GetFieldLevelEncryptionCommand = void 0;
exports.de_UpdateStreamingDistributionCommand = exports.de_UpdateResponseHeadersPolicyCommand = exports.de_UpdateRealtimeLogConfigCommand = exports.de_UpdatePublicKeyCommand = exports.de_UpdateOriginRequestPolicyCommand = exports.de_UpdateOriginAccessControlCommand = exports.de_UpdateKeyGroupCommand = exports.de_UpdateFunctionCommand = exports.de_UpdateFieldLevelEncryptionProfileCommand = exports.de_UpdateFieldLevelEncryptionConfigCommand = exports.de_UpdateDistributionWithStagingConfigCommand = exports.de_UpdateDistributionCommand = void 0;
const xml_builder_1 = require("@aws-sdk/xml-builder");
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
const CloudFrontServiceException_1 = require("../models/CloudFrontServiceException");
const models_0_1 = require("../models/models_0");
const models_1_1 = require("../models/models_1");
const se_AssociateAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{TargetDistributionId}/associate-alias";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "TargetDistributionId", () => input.TargetDistributionId, "{TargetDistributionId}", false);
    const query = (0, smithy_client_1.map)({
        Alias: [, (0, smithy_client_1.expectNonNull)(input.Alias, `Alias`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_AssociateAliasCommand = se_AssociateAliasCommand;
const se_CopyDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        staging: [() => isSerializableHeaderValue(input.Staging), () => input.Staging.toString()],
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{PrimaryDistributionId}/copy";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "PrimaryDistributionId", () => input.PrimaryDistributionId, "{PrimaryDistributionId}", false);
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CopyDistributionRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.CallerReference !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled !== undefined) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CopyDistributionCommand = se_CopyDistributionCommand;
const se_CreateCachePolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy";
    let body;
    if (input.CachePolicyConfig !== undefined) {
        body = se_CachePolicyConfig(input.CachePolicyConfig, context);
    }
    let contents;
    if (input.CachePolicyConfig !== undefined) {
        contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateCachePolicyCommand = se_CreateCachePolicyCommand;
const se_CreateCloudFrontOriginAccessIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront";
    let body;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        body = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    }
    let contents;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateCloudFrontOriginAccessIdentityCommand = se_CreateCloudFrontOriginAccessIdentityCommand;
const se_CreateContinuousDeploymentPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/continuous-deployment-policy";
    let body;
    if (input.ContinuousDeploymentPolicyConfig !== undefined) {
        body = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    }
    let contents;
    if (input.ContinuousDeploymentPolicyConfig !== undefined) {
        contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateContinuousDeploymentPolicyCommand = se_CreateContinuousDeploymentPolicyCommand;
const se_CreateDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
    let body;
    if (input.DistributionConfig !== undefined) {
        body = se_DistributionConfig(input.DistributionConfig, context);
    }
    let contents;
    if (input.DistributionConfig !== undefined) {
        contents = se_DistributionConfig(input.DistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateDistributionCommand = se_CreateDistributionCommand;
const se_CreateDistributionWithTagsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
    const query = (0, smithy_client_1.map)({
        WithTags: [, ""],
    });
    let body;
    if (input.DistributionConfigWithTags !== undefined) {
        body = se_DistributionConfigWithTags(input.DistributionConfigWithTags, context);
    }
    let contents;
    if (input.DistributionConfigWithTags !== undefined) {
        contents = se_DistributionConfigWithTags(input.DistributionConfigWithTags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_CreateDistributionWithTagsCommand = se_CreateDistributionWithTagsCommand;
const se_CreateFieldLevelEncryptionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption";
    let body;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        body = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    }
    let contents;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateFieldLevelEncryptionConfigCommand = se_CreateFieldLevelEncryptionConfigCommand;
const se_CreateFieldLevelEncryptionProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile";
    let body;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        body = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    }
    let contents;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateFieldLevelEncryptionProfileCommand = se_CreateFieldLevelEncryptionProfileCommand;
const se_CreateFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateFunctionRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.FunctionCode !== undefined) {
        const node = xml_builder_1.XmlNode.of("FunctionBlob", context.base64Encoder(input.FunctionCode)).withName("FunctionCode");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionConfig !== undefined) {
        const node = se_FunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = xml_builder_1.XmlNode.of("FunctionName", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateFunctionCommand = se_CreateFunctionCommand;
const se_CreateInvalidationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{DistributionId}/invalidation";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    let body;
    if (input.InvalidationBatch !== undefined) {
        body = se_InvalidationBatch(input.InvalidationBatch, context);
    }
    let contents;
    if (input.InvalidationBatch !== undefined) {
        contents = se_InvalidationBatch(input.InvalidationBatch, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateInvalidationCommand = se_CreateInvalidationCommand;
const se_CreateKeyGroupCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group";
    let body;
    if (input.KeyGroupConfig !== undefined) {
        body = se_KeyGroupConfig(input.KeyGroupConfig, context);
    }
    let contents;
    if (input.KeyGroupConfig !== undefined) {
        contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateKeyGroupCommand = se_CreateKeyGroupCommand;
const se_CreateMonitoringSubscriptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    let body;
    if (input.MonitoringSubscription !== undefined) {
        body = se_MonitoringSubscription(input.MonitoringSubscription, context);
    }
    let contents;
    if (input.MonitoringSubscription !== undefined) {
        contents = se_MonitoringSubscription(input.MonitoringSubscription, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateMonitoringSubscriptionCommand = se_CreateMonitoringSubscriptionCommand;
const se_CreateOriginAccessControlCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control";
    let body;
    if (input.OriginAccessControlConfig !== undefined) {
        body = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    }
    let contents;
    if (input.OriginAccessControlConfig !== undefined) {
        contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateOriginAccessControlCommand = se_CreateOriginAccessControlCommand;
const se_CreateOriginRequestPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy";
    let body;
    if (input.OriginRequestPolicyConfig !== undefined) {
        body = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    }
    let contents;
    if (input.OriginRequestPolicyConfig !== undefined) {
        contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateOriginRequestPolicyCommand = se_CreateOriginRequestPolicyCommand;
const se_CreatePublicKeyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key";
    let body;
    if (input.PublicKeyConfig !== undefined) {
        body = se_PublicKeyConfig(input.PublicKeyConfig, context);
    }
    let contents;
    if (input.PublicKeyConfig !== undefined) {
        contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreatePublicKeyCommand = se_CreatePublicKeyCommand;
const se_CreateRealtimeLogConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("CreateRealtimeLogConfigRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.EndPoints !== undefined) {
        const nodes = se_EndPointList(input.EndPoints, context);
        const containerNode = new xml_builder_1.XmlNode("EndPoints");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Fields !== undefined) {
        const nodes = se_FieldList(input.Fields, context);
        const containerNode = new xml_builder_1.XmlNode("Fields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Name !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.SamplingRate !== undefined) {
        const node = xml_builder_1.XmlNode.of("long", String(input.SamplingRate)).withName("SamplingRate");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateRealtimeLogConfigCommand = se_CreateRealtimeLogConfigCommand;
const se_CreateResponseHeadersPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy";
    let body;
    if (input.ResponseHeadersPolicyConfig !== undefined) {
        body = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    }
    let contents;
    if (input.ResponseHeadersPolicyConfig !== undefined) {
        contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateResponseHeadersPolicyCommand = se_CreateResponseHeadersPolicyCommand;
const se_CreateStreamingDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
    let body;
    if (input.StreamingDistributionConfig !== undefined) {
        body = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    }
    let contents;
    if (input.StreamingDistributionConfig !== undefined) {
        contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateStreamingDistributionCommand = se_CreateStreamingDistributionCommand;
const se_CreateStreamingDistributionWithTagsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
    const query = (0, smithy_client_1.map)({
        WithTags: [, ""],
    });
    let body;
    if (input.StreamingDistributionConfigWithTags !== undefined) {
        body = se_StreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
    }
    let contents;
    if (input.StreamingDistributionConfigWithTags !== undefined) {
        contents = se_StreamingDistributionConfigWithTags(input.StreamingDistributionConfigWithTags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_CreateStreamingDistributionWithTagsCommand = se_CreateStreamingDistributionWithTagsCommand;
const se_DeleteCachePolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteCachePolicyCommand = se_DeleteCachePolicyCommand;
const se_DeleteCloudFrontOriginAccessIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteCloudFrontOriginAccessIdentityCommand = se_DeleteCloudFrontOriginAccessIdentityCommand;
const se_DeleteContinuousDeploymentPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/continuous-deployment-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteContinuousDeploymentPolicyCommand = se_DeleteContinuousDeploymentPolicyCommand;
const se_DeleteDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteDistributionCommand = se_DeleteDistributionCommand;
const se_DeleteFieldLevelEncryptionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteFieldLevelEncryptionConfigCommand = se_DeleteFieldLevelEncryptionConfigCommand;
const se_DeleteFieldLevelEncryptionProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteFieldLevelEncryptionProfileCommand = se_DeleteFieldLevelEncryptionProfileCommand;
const se_DeleteFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteFunctionCommand = se_DeleteFunctionCommand;
const se_DeleteKeyGroupCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteKeyGroupCommand = se_DeleteKeyGroupCommand;
const se_DeleteMonitoringSubscriptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteMonitoringSubscriptionCommand = se_DeleteMonitoringSubscriptionCommand;
const se_DeleteOriginAccessControlCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteOriginAccessControlCommand = se_DeleteOriginAccessControlCommand;
const se_DeleteOriginRequestPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteOriginRequestPolicyCommand = se_DeleteOriginRequestPolicyCommand;
const se_DeletePublicKeyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeletePublicKeyCommand = se_DeletePublicKeyCommand;
const se_DeleteRealtimeLogConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/delete-realtime-log-config";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("DeleteRealtimeLogConfigRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.ARN !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.ARN).withName("ARN");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteRealtimeLogConfigCommand = se_DeleteRealtimeLogConfigCommand;
const se_DeleteResponseHeadersPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteResponseHeadersPolicyCommand = se_DeleteResponseHeadersPolicyCommand;
const se_DeleteStreamingDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteStreamingDistributionCommand = se_DeleteStreamingDistributionCommand;
const se_DescribeFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/describe";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    const query = (0, smithy_client_1.map)({
        Stage: [, input.Stage],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_DescribeFunctionCommand = se_DescribeFunctionCommand;
const se_GetCachePolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetCachePolicyCommand = se_GetCachePolicyCommand;
const se_GetCachePolicyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetCachePolicyConfigCommand = se_GetCachePolicyConfigCommand;
const se_GetCloudFrontOriginAccessIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetCloudFrontOriginAccessIdentityCommand = se_GetCloudFrontOriginAccessIdentityCommand;
const se_GetCloudFrontOriginAccessIdentityConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetCloudFrontOriginAccessIdentityConfigCommand = se_GetCloudFrontOriginAccessIdentityConfigCommand;
const se_GetContinuousDeploymentPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/continuous-deployment-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetContinuousDeploymentPolicyCommand = se_GetContinuousDeploymentPolicyCommand;
const se_GetContinuousDeploymentPolicyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/continuous-deployment-policy/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetContinuousDeploymentPolicyConfigCommand = se_GetContinuousDeploymentPolicyConfigCommand;
const se_GetDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetDistributionCommand = se_GetDistributionCommand;
const se_GetDistributionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetDistributionConfigCommand = se_GetDistributionConfigCommand;
const se_GetFieldLevelEncryptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFieldLevelEncryptionCommand = se_GetFieldLevelEncryptionCommand;
const se_GetFieldLevelEncryptionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFieldLevelEncryptionConfigCommand = se_GetFieldLevelEncryptionConfigCommand;
const se_GetFieldLevelEncryptionProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFieldLevelEncryptionProfileCommand = se_GetFieldLevelEncryptionProfileCommand;
const se_GetFieldLevelEncryptionProfileConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFieldLevelEncryptionProfileConfigCommand = se_GetFieldLevelEncryptionProfileConfigCommand;
const se_GetFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    const query = (0, smithy_client_1.map)({
        Stage: [, input.Stage],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_GetFunctionCommand = se_GetFunctionCommand;
const se_GetInvalidationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{DistributionId}/invalidation/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetInvalidationCommand = se_GetInvalidationCommand;
const se_GetKeyGroupCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetKeyGroupCommand = se_GetKeyGroupCommand;
const se_GetKeyGroupConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetKeyGroupConfigCommand = se_GetKeyGroupConfigCommand;
const se_GetMonitoringSubscriptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributions/{DistributionId}/monitoring-subscription";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetMonitoringSubscriptionCommand = se_GetMonitoringSubscriptionCommand;
const se_GetOriginAccessControlCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetOriginAccessControlCommand = se_GetOriginAccessControlCommand;
const se_GetOriginAccessControlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-control/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetOriginAccessControlConfigCommand = se_GetOriginAccessControlConfigCommand;
const se_GetOriginRequestPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetOriginRequestPolicyCommand = se_GetOriginRequestPolicyCommand;
const se_GetOriginRequestPolicyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-request-policy/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetOriginRequestPolicyConfigCommand = se_GetOriginRequestPolicyConfigCommand;
const se_GetPublicKeyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetPublicKeyCommand = se_GetPublicKeyCommand;
const se_GetPublicKeyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetPublicKeyConfigCommand = se_GetPublicKeyConfigCommand;
const se_GetRealtimeLogConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/get-realtime-log-config";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("GetRealtimeLogConfigRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.ARN !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.ARN).withName("ARN");
        bodyNode.addChildNode(node);
    }
    if (input.Name !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetRealtimeLogConfigCommand = se_GetRealtimeLogConfigCommand;
const se_GetResponseHeadersPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetResponseHeadersPolicyCommand = se_GetResponseHeadersPolicyCommand;
const se_GetResponseHeadersPolicyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/response-headers-policy/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetResponseHeadersPolicyConfigCommand = se_GetResponseHeadersPolicyConfigCommand;
const se_GetStreamingDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetStreamingDistributionCommand = se_GetStreamingDistributionCommand;
const se_GetStreamingDistributionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/streaming-distribution/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetStreamingDistributionConfigCommand = se_GetStreamingDistributionConfigCommand;
const se_ListCachePoliciesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy";
    const query = (0, smithy_client_1.map)({
        Type: [, input.Type],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListCachePoliciesCommand = se_ListCachePoliciesCommand;
const se_ListCloudFrontOriginAccessIdentitiesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListCloudFrontOriginAccessIdentitiesCommand = se_ListCloudFrontOriginAccessIdentitiesCommand;
const se_ListConflictingAliasesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/conflicting-alias";
    const query = (0, smithy_client_1.map)({
        DistributionId: [, (0, smithy_client_1.expectNonNull)(input.DistributionId, `DistributionId`)],
        Alias: [, (0, smithy_client_1.expectNonNull)(input.Alias, `Alias`)],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListConflictingAliasesCommand = se_ListConflictingAliasesCommand;
const se_ListContinuousDeploymentPoliciesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/continuous-deployment-policy";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListContinuousDeploymentPoliciesCommand = se_ListContinuousDeploymentPoliciesCommand;
const se_ListDistributionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsCommand = se_ListDistributionsCommand;
const se_ListDistributionsByCachePolicyIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CachePolicyId", () => input.CachePolicyId, "{CachePolicyId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsByCachePolicyIdCommand = se_ListDistributionsByCachePolicyIdCommand;
const se_ListDistributionsByKeyGroupCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "KeyGroupId", () => input.KeyGroupId, "{KeyGroupId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsByKeyGroupCommand = se_ListDistributionsByKeyGroupCommand;
const se_ListDistributionsByOriginRequestPolicyIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "OriginRequestPolicyId", () => input.OriginRequestPolicyId, "{OriginRequestPolicyId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsByOriginRequestPolicyIdCommand = se_ListDistributionsByOriginRequestPolicyIdCommand;
const se_ListDistributionsByRealtimeLogConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByRealtimeLogConfig";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("ListDistributionsByRealtimeLogConfigRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.Marker !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.Marker).withName("Marker");
        bodyNode.addChildNode(node);
    }
    if (input.MaxItems !== undefined) {
        const node = xml_builder_1.XmlNode.of("Integer", String(input.MaxItems)).withName("MaxItems");
        bodyNode.addChildNode(node);
    }
    if (input.RealtimeLogConfigArn !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
        bodyNode.addChildNode(node);
    }
    if (input.RealtimeLogConfigName !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.RealtimeLogConfigName).withName("RealtimeLogConfigName");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_ListDistributionsByRealtimeLogConfigCommand = se_ListDistributionsByRealtimeLogConfigCommand;
const se_ListDistributionsByResponseHeadersPolicyIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "ResponseHeadersPolicyId", () => input.ResponseHeadersPolicyId, "{ResponseHeadersPolicyId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsByResponseHeadersPolicyIdCommand = se_ListDistributionsByResponseHeadersPolicyIdCommand;
const se_ListDistributionsByWebACLIdCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distributionsByWebACLId/{WebACLId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "WebACLId", () => input.WebACLId, "{WebACLId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListDistributionsByWebACLIdCommand = se_ListDistributionsByWebACLIdCommand;
const se_ListFieldLevelEncryptionConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/field-level-encryption";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListFieldLevelEncryptionConfigsCommand = se_ListFieldLevelEncryptionConfigsCommand;
const se_ListFieldLevelEncryptionProfilesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListFieldLevelEncryptionProfilesCommand = se_ListFieldLevelEncryptionProfilesCommand;
const se_ListFunctionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        Stage: [, input.Stage],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListFunctionsCommand = se_ListFunctionsCommand;
const se_ListInvalidationsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{DistributionId}/invalidation";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "DistributionId", () => input.DistributionId, "{DistributionId}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListInvalidationsCommand = se_ListInvalidationsCommand;
const se_ListKeyGroupsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListKeyGroupsCommand = se_ListKeyGroupsCommand;
const se_ListOriginAccessControlsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-access-control";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListOriginAccessControlsCommand = se_ListOriginAccessControlsCommand;
const se_ListOriginRequestPoliciesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy";
    const query = (0, smithy_client_1.map)({
        Type: [, input.Type],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListOriginRequestPoliciesCommand = se_ListOriginRequestPoliciesCommand;
const se_ListPublicKeysCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListPublicKeysCommand = se_ListPublicKeysCommand;
const se_ListRealtimeLogConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
    const query = (0, smithy_client_1.map)({
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        Marker: [, input.Marker],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListRealtimeLogConfigsCommand = se_ListRealtimeLogConfigsCommand;
const se_ListResponseHeadersPoliciesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy";
    const query = (0, smithy_client_1.map)({
        Type: [, input.Type],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListResponseHeadersPoliciesCommand = se_ListResponseHeadersPoliciesCommand;
const se_ListStreamingDistributionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/streaming-distribution";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListStreamingDistributionsCommand = se_ListStreamingDistributionsCommand;
const se_ListTagsForResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
    const query = (0, smithy_client_1.map)({
        Resource: [, (0, smithy_client_1.expectNonNull)(input.Resource, `Resource`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_ListTagsForResourceCommand = se_ListTagsForResourceCommand;
const se_PublishFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/publish";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PublishFunctionCommand = se_PublishFunctionCommand;
const se_TagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
    const query = (0, smithy_client_1.map)({
        Operation: [, "Tag"],
        Resource: [, (0, smithy_client_1.expectNonNull)(input.Resource, `Resource`)],
    });
    let body;
    if (input.Tags !== undefined) {
        body = se_Tags(input.Tags, context);
    }
    let contents;
    if (input.Tags !== undefined) {
        contents = se_Tags(input.Tags, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_TagResourceCommand = se_TagResourceCommand;
const se_TestFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}/test";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("TestFunctionRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.EventObject !== undefined) {
        const node = xml_builder_1.XmlNode.of("FunctionEventObject", context.base64Encoder(input.EventObject)).withName("EventObject");
        bodyNode.addChildNode(node);
    }
    if (input.Stage !== undefined) {
        const node = xml_builder_1.XmlNode.of("FunctionStage", input.Stage).withName("Stage");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_TestFunctionCommand = se_TestFunctionCommand;
const se_UntagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/tagging";
    const query = (0, smithy_client_1.map)({
        Operation: [, "Untag"],
        Resource: [, (0, smithy_client_1.expectNonNull)(input.Resource, `Resource`)],
    });
    let body;
    if (input.TagKeys !== undefined) {
        body = se_TagKeys(input.TagKeys, context);
    }
    let contents;
    if (input.TagKeys !== undefined) {
        contents = se_TagKeys(input.TagKeys, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_UntagResourceCommand = se_UntagResourceCommand;
const se_UpdateCachePolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/cache-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.CachePolicyConfig !== undefined) {
        body = se_CachePolicyConfig(input.CachePolicyConfig, context);
    }
    let contents;
    if (input.CachePolicyConfig !== undefined) {
        contents = se_CachePolicyConfig(input.CachePolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateCachePolicyCommand = se_UpdateCachePolicyCommand;
const se_UpdateCloudFrontOriginAccessIdentityCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-identity/cloudfront/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        body = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
    }
    let contents;
    if (input.CloudFrontOriginAccessIdentityConfig !== undefined) {
        contents = se_CloudFrontOriginAccessIdentityConfig(input.CloudFrontOriginAccessIdentityConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateCloudFrontOriginAccessIdentityCommand = se_UpdateCloudFrontOriginAccessIdentityCommand;
const se_UpdateContinuousDeploymentPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/continuous-deployment-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.ContinuousDeploymentPolicyConfig !== undefined) {
        body = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
    }
    let contents;
    if (input.ContinuousDeploymentPolicyConfig !== undefined) {
        contents = se_ContinuousDeploymentPolicyConfig(input.ContinuousDeploymentPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateContinuousDeploymentPolicyCommand = se_UpdateContinuousDeploymentPolicyCommand;
const se_UpdateDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/distribution/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.DistributionConfig !== undefined) {
        body = se_DistributionConfig(input.DistributionConfig, context);
    }
    let contents;
    if (input.DistributionConfig !== undefined) {
        contents = se_DistributionConfig(input.DistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateDistributionCommand = se_UpdateDistributionCommand;
const se_UpdateDistributionWithStagingConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/distribution/{Id}/promote-staging-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    const query = (0, smithy_client_1.map)({
        StagingDistributionId: [, input.StagingDistributionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.se_UpdateDistributionWithStagingConfigCommand = se_UpdateDistributionWithStagingConfigCommand;
const se_UpdateFieldLevelEncryptionConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        body = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
    }
    let contents;
    if (input.FieldLevelEncryptionConfig !== undefined) {
        contents = se_FieldLevelEncryptionConfig(input.FieldLevelEncryptionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateFieldLevelEncryptionConfigCommand = se_UpdateFieldLevelEncryptionConfigCommand;
const se_UpdateFieldLevelEncryptionProfileCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/field-level-encryption-profile/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        body = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
    }
    let contents;
    if (input.FieldLevelEncryptionProfileConfig !== undefined) {
        contents = se_FieldLevelEncryptionProfileConfig(input.FieldLevelEncryptionProfileConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateFieldLevelEncryptionProfileCommand = se_UpdateFieldLevelEncryptionProfileCommand;
const se_UpdateFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/function/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateFunctionRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.FunctionCode !== undefined) {
        const node = xml_builder_1.XmlNode.of("FunctionBlob", context.base64Encoder(input.FunctionCode)).withName("FunctionCode");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionConfig !== undefined) {
        const node = se_FunctionConfig(input.FunctionConfig, context).withName("FunctionConfig");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateFunctionCommand = se_UpdateFunctionCommand;
const se_UpdateKeyGroupCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/key-group/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.KeyGroupConfig !== undefined) {
        body = se_KeyGroupConfig(input.KeyGroupConfig, context);
    }
    let contents;
    if (input.KeyGroupConfig !== undefined) {
        contents = se_KeyGroupConfig(input.KeyGroupConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateKeyGroupCommand = se_UpdateKeyGroupCommand;
const se_UpdateOriginAccessControlCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/origin-access-control/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.OriginAccessControlConfig !== undefined) {
        body = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
    }
    let contents;
    if (input.OriginAccessControlConfig !== undefined) {
        contents = se_OriginAccessControlConfig(input.OriginAccessControlConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateOriginAccessControlCommand = se_UpdateOriginAccessControlCommand;
const se_UpdateOriginRequestPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/origin-request-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.OriginRequestPolicyConfig !== undefined) {
        body = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
    }
    let contents;
    if (input.OriginRequestPolicyConfig !== undefined) {
        contents = se_OriginRequestPolicyConfig(input.OriginRequestPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateOriginRequestPolicyCommand = se_UpdateOriginRequestPolicyCommand;
const se_UpdatePublicKeyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/public-key/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.PublicKeyConfig !== undefined) {
        body = se_PublicKeyConfig(input.PublicKeyConfig, context);
    }
    let contents;
    if (input.PublicKeyConfig !== undefined) {
        contents = se_PublicKeyConfig(input.PublicKeyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdatePublicKeyCommand = se_UpdatePublicKeyCommand;
const se_UpdateRealtimeLogConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/realtime-log-config";
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("UpdateRealtimeLogConfigRequest");
    bodyNode.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
    if (input.ARN !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.ARN).withName("ARN");
        bodyNode.addChildNode(node);
    }
    if (input.EndPoints !== undefined) {
        const nodes = se_EndPointList(input.EndPoints, context);
        const containerNode = new xml_builder_1.XmlNode("EndPoints");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Fields !== undefined) {
        const nodes = se_FieldList(input.Fields, context);
        const containerNode = new xml_builder_1.XmlNode("Fields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Name !== undefined) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.SamplingRate !== undefined) {
        const node = xml_builder_1.XmlNode.of("long", String(input.SamplingRate)).withName("SamplingRate");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateRealtimeLogConfigCommand = se_UpdateRealtimeLogConfigCommand;
const se_UpdateResponseHeadersPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-05-31/response-headers-policy/{Id}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.ResponseHeadersPolicyConfig !== undefined) {
        body = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
    }
    let contents;
    if (input.ResponseHeadersPolicyConfig !== undefined) {
        contents = se_ResponseHeadersPolicyConfig(input.ResponseHeadersPolicyConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateResponseHeadersPolicyCommand = se_UpdateResponseHeadersPolicyCommand;
const se_UpdateStreamingDistributionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "if-match": input.IfMatch,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-05-31/streaming-distribution/{Id}/config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Id", () => input.Id, "{Id}", false);
    let body;
    if (input.StreamingDistributionConfig !== undefined) {
        body = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
    }
    let contents;
    if (input.StreamingDistributionConfig !== undefined) {
        contents = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://cloudfront.amazonaws.com/doc/2020-05-31/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateStreamingDistributionCommand = se_UpdateStreamingDistributionCommand;
const de_AssociateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_AssociateAliasCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_AssociateAliasCommand = de_AssociateAliasCommand;
const de_AssociateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CopyDistributionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CopyDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_CopyDistributionCommand = de_CopyDistributionCommand;
const de_CopyDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "DistributionAlreadyExists":
        case "com.amazonaws.cloudfront#DistributionAlreadyExists":
            throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidDefaultRootObject":
        case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
            throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
        case "InvalidErrorCode":
        case "com.amazonaws.cloudfront#InvalidErrorCode":
            throw await de_InvalidErrorCodeRes(parsedOutput, context);
        case "InvalidForwardCookies":
        case "com.amazonaws.cloudfront#InvalidForwardCookies":
            throw await de_InvalidForwardCookiesRes(parsedOutput, context);
        case "InvalidFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
            throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
        case "InvalidGeoRestrictionParameter":
        case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
            throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
        case "InvalidHeadersForS3Origin":
        case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
            throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "InvalidLambdaFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
            throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
        case "InvalidLocationCode":
        case "com.amazonaws.cloudfront#InvalidLocationCode":
            throw await de_InvalidLocationCodeRes(parsedOutput, context);
        case "InvalidMinimumProtocolVersion":
        case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
            throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
        case "InvalidOrigin":
        case "com.amazonaws.cloudfront#InvalidOrigin":
            throw await de_InvalidOriginRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
            throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
        case "InvalidOriginReadTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
            throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
        case "InvalidProtocolSettings":
        case "com.amazonaws.cloudfront#InvalidProtocolSettings":
            throw await de_InvalidProtocolSettingsRes(parsedOutput, context);
        case "InvalidQueryStringParameters":
        case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
            throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
        case "InvalidRelativePath":
        case "com.amazonaws.cloudfront#InvalidRelativePath":
            throw await de_InvalidRelativePathRes(parsedOutput, context);
        case "InvalidRequiredProtocol":
        case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
            throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
        case "InvalidResponseCode":
        case "com.amazonaws.cloudfront#InvalidResponseCode":
            throw await de_InvalidResponseCodeRes(parsedOutput, context);
        case "InvalidTTLOrder":
        case "com.amazonaws.cloudfront#InvalidTTLOrder":
            throw await de_InvalidTTLOrderRes(parsedOutput, context);
        case "InvalidViewerCertificate":
        case "com.amazonaws.cloudfront#InvalidViewerCertificate":
            throw await de_InvalidViewerCertificateRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchOrigin":
        case "com.amazonaws.cloudfront#NoSuchOrigin":
            throw await de_NoSuchOriginRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "RealtimeLogConfigOwnerMismatch":
        case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
            throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
        case "TooManyCacheBehaviors":
        case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
            throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
        case "TooManyCertificates":
        case "com.amazonaws.cloudfront#TooManyCertificates":
            throw await de_TooManyCertificatesRes(parsedOutput, context);
        case "TooManyCookieNamesInWhiteList":
        case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
            throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyDistributions":
        case "com.amazonaws.cloudfront#TooManyDistributions":
            throw await de_TooManyDistributionsRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToCachePolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
            throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToKeyGroup":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
            throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginAccessControl":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
            throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
            throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
            throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyDistributionsWithFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
            throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
            throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithSingleFunctionARN":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
            throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
        case "TooManyFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
            throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
        case "TooManyHeadersInForwardedValues":
        case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
            throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
        case "TooManyKeyGroupsAssociatedToDistribution":
        case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
            throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
        case "TooManyLambdaFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
            throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
        case "TooManyOriginCustomHeaders":
        case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
            throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
            throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
        case "TooManyOrigins":
        case "com.amazonaws.cloudfront#TooManyOrigins":
            throw await de_TooManyOriginsRes(parsedOutput, context);
        case "TooManyQueryStringParameters":
        case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
            throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedKeyGroupDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
            throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateCachePolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateCachePolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CachePolicy = de_CachePolicy(data, context);
    return contents;
};
exports.de_CreateCachePolicyCommand = de_CreateCachePolicyCommand;
const de_CreateCachePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CachePolicyAlreadyExists":
        case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
            throw await de_CachePolicyAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "TooManyCachePolicies":
        case "com.amazonaws.cloudfront#TooManyCachePolicies":
            throw await de_TooManyCachePoliciesRes(parsedOutput, context);
        case "TooManyCookiesInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
            throw await de_TooManyCookiesInCachePolicyRes(parsedOutput, context);
        case "TooManyHeadersInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
            throw await de_TooManyHeadersInCachePolicyRes(parsedOutput, context);
        case "TooManyQueryStringsInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
            throw await de_TooManyQueryStringsInCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateCloudFrontOriginAccessIdentityCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
    return contents;
};
exports.de_CreateCloudFrontOriginAccessIdentityCommand = de_CreateCloudFrontOriginAccessIdentityCommand;
const de_CreateCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudFrontOriginAccessIdentityAlreadyExists":
        case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityAlreadyExists":
            throw await de_CloudFrontOriginAccessIdentityAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "TooManyCloudFrontOriginAccessIdentities":
        case "com.amazonaws.cloudfront#TooManyCloudFrontOriginAccessIdentities":
            throw await de_TooManyCloudFrontOriginAccessIdentitiesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateContinuousDeploymentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateContinuousDeploymentPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
    return contents;
};
exports.de_CreateContinuousDeploymentPolicyCommand = de_CreateContinuousDeploymentPolicyCommand;
const de_CreateContinuousDeploymentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "ContinuousDeploymentPolicyAlreadyExists":
        case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyAlreadyExists":
            throw await de_ContinuousDeploymentPolicyAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "StagingDistributionInUse":
        case "com.amazonaws.cloudfront#StagingDistributionInUse":
            throw await de_StagingDistributionInUseRes(parsedOutput, context);
        case "TooManyContinuousDeploymentPolicies":
        case "com.amazonaws.cloudfront#TooManyContinuousDeploymentPolicies":
            throw await de_TooManyContinuousDeploymentPoliciesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateDistributionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_CreateDistributionCommand = de_CreateDistributionCommand;
const de_CreateDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "ContinuousDeploymentPolicyInUse":
        case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
            throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
        case "DistributionAlreadyExists":
        case "com.amazonaws.cloudfront#DistributionAlreadyExists":
            throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
        case "IllegalOriginAccessConfiguration":
        case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
            throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidDefaultRootObject":
        case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
            throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
        case "InvalidDomainNameForOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
            throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
        case "InvalidErrorCode":
        case "com.amazonaws.cloudfront#InvalidErrorCode":
            throw await de_InvalidErrorCodeRes(parsedOutput, context);
        case "InvalidForwardCookies":
        case "com.amazonaws.cloudfront#InvalidForwardCookies":
            throw await de_InvalidForwardCookiesRes(parsedOutput, context);
        case "InvalidFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
            throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
        case "InvalidGeoRestrictionParameter":
        case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
            throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
        case "InvalidHeadersForS3Origin":
        case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
            throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
        case "InvalidLambdaFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
            throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
        case "InvalidLocationCode":
        case "com.amazonaws.cloudfront#InvalidLocationCode":
            throw await de_InvalidLocationCodeRes(parsedOutput, context);
        case "InvalidMinimumProtocolVersion":
        case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
            throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
        case "InvalidOrigin":
        case "com.amazonaws.cloudfront#InvalidOrigin":
            throw await de_InvalidOriginRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
            throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
        case "InvalidOriginReadTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
            throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
        case "InvalidProtocolSettings":
        case "com.amazonaws.cloudfront#InvalidProtocolSettings":
            throw await de_InvalidProtocolSettingsRes(parsedOutput, context);
        case "InvalidQueryStringParameters":
        case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
            throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
        case "InvalidRelativePath":
        case "com.amazonaws.cloudfront#InvalidRelativePath":
            throw await de_InvalidRelativePathRes(parsedOutput, context);
        case "InvalidRequiredProtocol":
        case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
            throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
        case "InvalidResponseCode":
        case "com.amazonaws.cloudfront#InvalidResponseCode":
            throw await de_InvalidResponseCodeRes(parsedOutput, context);
        case "InvalidTTLOrder":
        case "com.amazonaws.cloudfront#InvalidTTLOrder":
            throw await de_InvalidTTLOrderRes(parsedOutput, context);
        case "InvalidViewerCertificate":
        case "com.amazonaws.cloudfront#InvalidViewerCertificate":
            throw await de_InvalidViewerCertificateRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchOrigin":
        case "com.amazonaws.cloudfront#NoSuchOrigin":
            throw await de_NoSuchOriginRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "RealtimeLogConfigOwnerMismatch":
        case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
            throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
        case "TooManyCacheBehaviors":
        case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
            throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
        case "TooManyCertificates":
        case "com.amazonaws.cloudfront#TooManyCertificates":
            throw await de_TooManyCertificatesRes(parsedOutput, context);
        case "TooManyCookieNamesInWhiteList":
        case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
            throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyDistributions":
        case "com.amazonaws.cloudfront#TooManyDistributions":
            throw await de_TooManyDistributionsRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToCachePolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
            throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToKeyGroup":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
            throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginAccessControl":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
            throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
            throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
            throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyDistributionsWithFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
            throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
            throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithSingleFunctionARN":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
            throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
        case "TooManyFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
            throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
        case "TooManyHeadersInForwardedValues":
        case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
            throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
        case "TooManyKeyGroupsAssociatedToDistribution":
        case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
            throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
        case "TooManyLambdaFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
            throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
        case "TooManyOriginCustomHeaders":
        case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
            throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
            throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
        case "TooManyOrigins":
        case "com.amazonaws.cloudfront#TooManyOrigins":
            throw await de_TooManyOriginsRes(parsedOutput, context);
        case "TooManyQueryStringParameters":
        case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
            throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedKeyGroupDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
            throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateDistributionWithTagsCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateDistributionWithTagsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_CreateDistributionWithTagsCommand = de_CreateDistributionWithTagsCommand;
const de_CreateDistributionWithTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "ContinuousDeploymentPolicyInUse":
        case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
            throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
        case "DistributionAlreadyExists":
        case "com.amazonaws.cloudfront#DistributionAlreadyExists":
            throw await de_DistributionAlreadyExistsRes(parsedOutput, context);
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
        case "IllegalOriginAccessConfiguration":
        case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
            throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidDefaultRootObject":
        case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
            throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
        case "InvalidDomainNameForOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
            throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
        case "InvalidErrorCode":
        case "com.amazonaws.cloudfront#InvalidErrorCode":
            throw await de_InvalidErrorCodeRes(parsedOutput, context);
        case "InvalidForwardCookies":
        case "com.amazonaws.cloudfront#InvalidForwardCookies":
            throw await de_InvalidForwardCookiesRes(parsedOutput, context);
        case "InvalidFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
            throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
        case "InvalidGeoRestrictionParameter":
        case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
            throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
        case "InvalidHeadersForS3Origin":
        case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
            throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
        case "InvalidLambdaFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
            throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
        case "InvalidLocationCode":
        case "com.amazonaws.cloudfront#InvalidLocationCode":
            throw await de_InvalidLocationCodeRes(parsedOutput, context);
        case "InvalidMinimumProtocolVersion":
        case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
            throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
        case "InvalidOrigin":
        case "com.amazonaws.cloudfront#InvalidOrigin":
            throw await de_InvalidOriginRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
            throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
        case "InvalidOriginReadTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
            throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
        case "InvalidProtocolSettings":
        case "com.amazonaws.cloudfront#InvalidProtocolSettings":
            throw await de_InvalidProtocolSettingsRes(parsedOutput, context);
        case "InvalidQueryStringParameters":
        case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
            throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
        case "InvalidRelativePath":
        case "com.amazonaws.cloudfront#InvalidRelativePath":
            throw await de_InvalidRelativePathRes(parsedOutput, context);
        case "InvalidRequiredProtocol":
        case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
            throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
        case "InvalidResponseCode":
        case "com.amazonaws.cloudfront#InvalidResponseCode":
            throw await de_InvalidResponseCodeRes(parsedOutput, context);
        case "InvalidTTLOrder":
        case "com.amazonaws.cloudfront#InvalidTTLOrder":
            throw await de_InvalidTTLOrderRes(parsedOutput, context);
        case "InvalidTagging":
        case "com.amazonaws.cloudfront#InvalidTagging":
            throw await de_InvalidTaggingRes(parsedOutput, context);
        case "InvalidViewerCertificate":
        case "com.amazonaws.cloudfront#InvalidViewerCertificate":
            throw await de_InvalidViewerCertificateRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchOrigin":
        case "com.amazonaws.cloudfront#NoSuchOrigin":
            throw await de_NoSuchOriginRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "RealtimeLogConfigOwnerMismatch":
        case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
            throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
        case "TooManyCacheBehaviors":
        case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
            throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
        case "TooManyCertificates":
        case "com.amazonaws.cloudfront#TooManyCertificates":
            throw await de_TooManyCertificatesRes(parsedOutput, context);
        case "TooManyCookieNamesInWhiteList":
        case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
            throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyDistributions":
        case "com.amazonaws.cloudfront#TooManyDistributions":
            throw await de_TooManyDistributionsRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToCachePolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
            throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToKeyGroup":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
            throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginAccessControl":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
            throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
            throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
            throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyDistributionsWithFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
            throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
            throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithSingleFunctionARN":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
            throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
        case "TooManyFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
            throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
        case "TooManyHeadersInForwardedValues":
        case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
            throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
        case "TooManyKeyGroupsAssociatedToDistribution":
        case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
            throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
        case "TooManyLambdaFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
            throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
        case "TooManyOriginCustomHeaders":
        case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
            throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
            throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
        case "TooManyOrigins":
        case "com.amazonaws.cloudfront#TooManyOrigins":
            throw await de_TooManyOriginsRes(parsedOutput, context);
        case "TooManyQueryStringParameters":
        case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
            throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedKeyGroupDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
            throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateFieldLevelEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
    return contents;
};
exports.de_CreateFieldLevelEncryptionConfigCommand = de_CreateFieldLevelEncryptionConfigCommand;
const de_CreateFieldLevelEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FieldLevelEncryptionConfigAlreadyExists":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigAlreadyExists":
            throw await de_FieldLevelEncryptionConfigAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        case "QueryArgProfileEmpty":
        case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
            throw await de_QueryArgProfileEmptyRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionConfigs":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionConfigs":
            throw await de_TooManyFieldLevelEncryptionConfigsRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionContentTypeProfiles":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
            throw await de_TooManyFieldLevelEncryptionContentTypeProfilesRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionQueryArgProfiles":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
            throw await de_TooManyFieldLevelEncryptionQueryArgProfilesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateFieldLevelEncryptionProfileCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
    return contents;
};
exports.de_CreateFieldLevelEncryptionProfileCommand = de_CreateFieldLevelEncryptionProfileCommand;
const de_CreateFieldLevelEncryptionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FieldLevelEncryptionProfileAlreadyExists":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
            throw await de_FieldLevelEncryptionProfileAlreadyExistsRes(parsedOutput, context);
        case "FieldLevelEncryptionProfileSizeExceeded":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
            throw await de_FieldLevelEncryptionProfileSizeExceededRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionEncryptionEntities":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
            throw await de_TooManyFieldLevelEncryptionEncryptionEntitiesRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionFieldPatterns":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
            throw await de_TooManyFieldLevelEncryptionFieldPatternsRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionProfiles":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionProfiles":
            throw await de_TooManyFieldLevelEncryptionProfilesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateFunctionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FunctionSummary = de_FunctionSummary(data, context);
    return contents;
};
exports.de_CreateFunctionCommand = de_CreateFunctionCommand;
const de_CreateFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FunctionAlreadyExists":
        case "com.amazonaws.cloudfront#FunctionAlreadyExists":
            throw await de_FunctionAlreadyExistsRes(parsedOutput, context);
        case "FunctionSizeLimitExceeded":
        case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
            throw await de_FunctionSizeLimitExceededRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "TooManyFunctions":
        case "com.amazonaws.cloudfront#TooManyFunctions":
            throw await de_TooManyFunctionsRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateInvalidationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateInvalidationCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Invalidation = de_Invalidation(data, context);
    return contents;
};
exports.de_CreateInvalidationCommand = de_CreateInvalidationCommand;
const de_CreateInvalidationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "BatchTooLarge":
        case "com.amazonaws.cloudfront#BatchTooLarge":
            throw await de_BatchTooLargeRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "TooManyInvalidationsInProgress":
        case "com.amazonaws.cloudfront#TooManyInvalidationsInProgress":
            throw await de_TooManyInvalidationsInProgressRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateKeyGroupCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateKeyGroupCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.KeyGroup = de_KeyGroup(data, context);
    return contents;
};
exports.de_CreateKeyGroupCommand = de_CreateKeyGroupCommand;
const de_CreateKeyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "KeyGroupAlreadyExists":
        case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
            throw await de_KeyGroupAlreadyExistsRes(parsedOutput, context);
        case "TooManyKeyGroups":
        case "com.amazonaws.cloudfront#TooManyKeyGroups":
            throw await de_TooManyKeyGroupsRes(parsedOutput, context);
        case "TooManyPublicKeysInKeyGroup":
        case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
            throw await de_TooManyPublicKeysInKeyGroupRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateMonitoringSubscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CreateMonitoringSubscriptionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
    return contents;
};
exports.de_CreateMonitoringSubscriptionCommand = de_CreateMonitoringSubscriptionCommand;
const de_CreateMonitoringSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "MonitoringSubscriptionAlreadyExists":
        case "com.amazonaws.cloudfront#MonitoringSubscriptionAlreadyExists":
            throw await de_MonitoringSubscriptionAlreadyExistsRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateOriginAccessControlCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOriginAccessControlCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginAccessControl = de_OriginAccessControl(data, context);
    return contents;
};
exports.de_CreateOriginAccessControlCommand = de_CreateOriginAccessControlCommand;
const de_CreateOriginAccessControlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "OriginAccessControlAlreadyExists":
        case "com.amazonaws.cloudfront#OriginAccessControlAlreadyExists":
            throw await de_OriginAccessControlAlreadyExistsRes(parsedOutput, context);
        case "TooManyOriginAccessControls":
        case "com.amazonaws.cloudfront#TooManyOriginAccessControls":
            throw await de_TooManyOriginAccessControlsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateOriginRequestPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateOriginRequestPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
    return contents;
};
exports.de_CreateOriginRequestPolicyCommand = de_CreateOriginRequestPolicyCommand;
const de_CreateOriginRequestPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "OriginRequestPolicyAlreadyExists":
        case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
            throw await de_OriginRequestPolicyAlreadyExistsRes(parsedOutput, context);
        case "TooManyCookiesInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
            throw await de_TooManyCookiesInOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyHeadersInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
            throw await de_TooManyHeadersInOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyOriginRequestPolicies":
        case "com.amazonaws.cloudfront#TooManyOriginRequestPolicies":
            throw await de_TooManyOriginRequestPoliciesRes(parsedOutput, context);
        case "TooManyQueryStringsInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
            throw await de_TooManyQueryStringsInOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreatePublicKeyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreatePublicKeyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicKey = de_PublicKey(data, context);
    return contents;
};
exports.de_CreatePublicKeyCommand = de_CreatePublicKeyCommand;
const de_CreatePublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "PublicKeyAlreadyExists":
        case "com.amazonaws.cloudfront#PublicKeyAlreadyExists":
            throw await de_PublicKeyAlreadyExistsRes(parsedOutput, context);
        case "TooManyPublicKeys":
        case "com.amazonaws.cloudfront#TooManyPublicKeys":
            throw await de_TooManyPublicKeysRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateRealtimeLogConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateRealtimeLogConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["RealtimeLogConfig"] !== undefined) {
        contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
    }
    return contents;
};
exports.de_CreateRealtimeLogConfigCommand = de_CreateRealtimeLogConfigCommand;
const de_CreateRealtimeLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "RealtimeLogConfigAlreadyExists":
        case "com.amazonaws.cloudfront#RealtimeLogConfigAlreadyExists":
            throw await de_RealtimeLogConfigAlreadyExistsRes(parsedOutput, context);
        case "TooManyRealtimeLogConfigs":
        case "com.amazonaws.cloudfront#TooManyRealtimeLogConfigs":
            throw await de_TooManyRealtimeLogConfigsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateResponseHeadersPolicyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateResponseHeadersPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
    return contents;
};
exports.de_CreateResponseHeadersPolicyCommand = de_CreateResponseHeadersPolicyCommand;
const de_CreateResponseHeadersPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "ResponseHeadersPolicyAlreadyExists":
        case "com.amazonaws.cloudfront#ResponseHeadersPolicyAlreadyExists":
            throw await de_ResponseHeadersPolicyAlreadyExistsRes(parsedOutput, context);
        case "TooLongCSPInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooLongCSPInResponseHeadersPolicy":
            throw await de_TooLongCSPInResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyCustomHeadersInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyCustomHeadersInResponseHeadersPolicy":
            throw await de_TooManyCustomHeadersInResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyRemoveHeadersInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyRemoveHeadersInResponseHeadersPolicy":
            throw await de_TooManyRemoveHeadersInResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyResponseHeadersPolicies":
        case "com.amazonaws.cloudfront#TooManyResponseHeadersPolicies":
            throw await de_TooManyResponseHeadersPoliciesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateStreamingDistributionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateStreamingDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistribution = de_StreamingDistribution(data, context);
    return contents;
};
exports.de_CreateStreamingDistributionCommand = de_CreateStreamingDistributionCommand;
const de_CreateStreamingDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidOrigin":
        case "com.amazonaws.cloudfront#InvalidOrigin":
            throw await de_InvalidOriginRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "StreamingDistributionAlreadyExists":
        case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
            throw await de_StreamingDistributionAlreadyExistsRes(parsedOutput, context);
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
            throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyStreamingDistributions":
        case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
            throw await de_TooManyStreamingDistributionsRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateStreamingDistributionWithTagsCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateStreamingDistributionWithTagsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistribution = de_StreamingDistribution(data, context);
    return contents;
};
exports.de_CreateStreamingDistributionWithTagsCommand = de_CreateStreamingDistributionWithTagsCommand;
const de_CreateStreamingDistributionWithTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidOrigin":
        case "com.amazonaws.cloudfront#InvalidOrigin":
            throw await de_InvalidOriginRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidTagging":
        case "com.amazonaws.cloudfront#InvalidTagging":
            throw await de_InvalidTaggingRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "StreamingDistributionAlreadyExists":
        case "com.amazonaws.cloudfront#StreamingDistributionAlreadyExists":
            throw await de_StreamingDistributionAlreadyExistsRes(parsedOutput, context);
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
            throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyStreamingDistributions":
        case "com.amazonaws.cloudfront#TooManyStreamingDistributions":
            throw await de_TooManyStreamingDistributionsRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteCachePolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteCachePolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteCachePolicyCommand = de_DeleteCachePolicyCommand;
const de_DeleteCachePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CachePolicyInUse":
        case "com.amazonaws.cloudfront#CachePolicyInUse":
            throw await de_CachePolicyInUseRes(parsedOutput, context);
        case "IllegalDelete":
        case "com.amazonaws.cloudfront#IllegalDelete":
            throw await de_IllegalDeleteRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteCloudFrontOriginAccessIdentityCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteCloudFrontOriginAccessIdentityCommand = de_DeleteCloudFrontOriginAccessIdentityCommand;
const de_DeleteCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CloudFrontOriginAccessIdentityInUse":
        case "com.amazonaws.cloudfront#CloudFrontOriginAccessIdentityInUse":
            throw await de_CloudFrontOriginAccessIdentityInUseRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
            throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteContinuousDeploymentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteContinuousDeploymentPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteContinuousDeploymentPolicyCommand = de_DeleteContinuousDeploymentPolicyCommand;
const de_DeleteContinuousDeploymentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "ContinuousDeploymentPolicyInUse":
        case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
            throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteDistributionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteDistributionCommand = de_DeleteDistributionCommand;
const de_DeleteDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "DistributionNotDisabled":
        case "com.amazonaws.cloudfront#DistributionNotDisabled":
            throw await de_DistributionNotDisabledRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteFieldLevelEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFieldLevelEncryptionConfigCommand = de_DeleteFieldLevelEncryptionConfigCommand;
const de_DeleteFieldLevelEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "FieldLevelEncryptionConfigInUse":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionConfigInUse":
            throw await de_FieldLevelEncryptionConfigInUseRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteFieldLevelEncryptionProfileCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFieldLevelEncryptionProfileCommand = de_DeleteFieldLevelEncryptionProfileCommand;
const de_DeleteFieldLevelEncryptionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "FieldLevelEncryptionProfileInUse":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileInUse":
            throw await de_FieldLevelEncryptionProfileInUseRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteFunctionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionCommand = de_DeleteFunctionCommand;
const de_DeleteFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FunctionInUse":
        case "com.amazonaws.cloudfront#FunctionInUse":
            throw await de_FunctionInUseRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteKeyGroupCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteKeyGroupCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteKeyGroupCommand = de_DeleteKeyGroupCommand;
const de_DeleteKeyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "ResourceInUse":
        case "com.amazonaws.cloudfront#ResourceInUse":
            throw await de_ResourceInUseRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteMonitoringSubscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_DeleteMonitoringSubscriptionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteMonitoringSubscriptionCommand = de_DeleteMonitoringSubscriptionCommand;
const de_DeleteMonitoringSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchMonitoringSubscription":
        case "com.amazonaws.cloudfront#NoSuchMonitoringSubscription":
            throw await de_NoSuchMonitoringSubscriptionRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteOriginAccessControlCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOriginAccessControlCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteOriginAccessControlCommand = de_DeleteOriginAccessControlCommand;
const de_DeleteOriginAccessControlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchOriginAccessControl":
        case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
            throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
        case "OriginAccessControlInUse":
        case "com.amazonaws.cloudfront#OriginAccessControlInUse":
            throw await de_OriginAccessControlInUseRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteOriginRequestPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteOriginRequestPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteOriginRequestPolicyCommand = de_DeleteOriginRequestPolicyCommand;
const de_DeleteOriginRequestPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalDelete":
        case "com.amazonaws.cloudfront#IllegalDelete":
            throw await de_IllegalDeleteRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "OriginRequestPolicyInUse":
        case "com.amazonaws.cloudfront#OriginRequestPolicyInUse":
            throw await de_OriginRequestPolicyInUseRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeletePublicKeyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeletePublicKeyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeletePublicKeyCommand = de_DeletePublicKeyCommand;
const de_DeletePublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "PublicKeyInUse":
        case "com.amazonaws.cloudfront#PublicKeyInUse":
            throw await de_PublicKeyInUseRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteRealtimeLogConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteRealtimeLogConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteRealtimeLogConfigCommand = de_DeleteRealtimeLogConfigCommand;
const de_DeleteRealtimeLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "RealtimeLogConfigInUse":
        case "com.amazonaws.cloudfront#RealtimeLogConfigInUse":
            throw await de_RealtimeLogConfigInUseRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteResponseHeadersPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteResponseHeadersPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteResponseHeadersPolicyCommand = de_DeleteResponseHeadersPolicyCommand;
const de_DeleteResponseHeadersPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalDelete":
        case "com.amazonaws.cloudfront#IllegalDelete":
            throw await de_IllegalDeleteRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "ResponseHeadersPolicyInUse":
        case "com.amazonaws.cloudfront#ResponseHeadersPolicyInUse":
            throw await de_ResponseHeadersPolicyInUseRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteStreamingDistributionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteStreamingDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteStreamingDistributionCommand = de_DeleteStreamingDistributionCommand;
const de_DeleteStreamingDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchStreamingDistribution":
        case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
            throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "StreamingDistributionNotDisabled":
        case "com.amazonaws.cloudfront#StreamingDistributionNotDisabled":
            throw await de_StreamingDistributionNotDisabledRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DescribeFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_DescribeFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FunctionSummary = de_FunctionSummary(data, context);
    return contents;
};
exports.de_DescribeFunctionCommand = de_DescribeFunctionCommand;
const de_DescribeFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetCachePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCachePolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CachePolicy = de_CachePolicy(data, context);
    return contents;
};
exports.de_GetCachePolicyCommand = de_GetCachePolicyCommand;
const de_GetCachePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetCachePolicyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCachePolicyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CachePolicyConfig = de_CachePolicyConfig(data, context);
    return contents;
};
exports.de_GetCachePolicyConfigCommand = de_GetCachePolicyConfigCommand;
const de_GetCachePolicyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetCloudFrontOriginAccessIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
    return contents;
};
exports.de_GetCloudFrontOriginAccessIdentityCommand = de_GetCloudFrontOriginAccessIdentityCommand;
const de_GetCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
            throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetCloudFrontOriginAccessIdentityConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCloudFrontOriginAccessIdentityConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CloudFrontOriginAccessIdentityConfig = de_CloudFrontOriginAccessIdentityConfig(data, context);
    return contents;
};
exports.de_GetCloudFrontOriginAccessIdentityConfigCommand = de_GetCloudFrontOriginAccessIdentityConfigCommand;
const de_GetCloudFrontOriginAccessIdentityConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
            throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetContinuousDeploymentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetContinuousDeploymentPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
    return contents;
};
exports.de_GetContinuousDeploymentPolicyCommand = de_GetContinuousDeploymentPolicyCommand;
const de_GetContinuousDeploymentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetContinuousDeploymentPolicyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetContinuousDeploymentPolicyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ContinuousDeploymentPolicyConfig = de_ContinuousDeploymentPolicyConfig(data, context);
    return contents;
};
exports.de_GetContinuousDeploymentPolicyConfigCommand = de_GetContinuousDeploymentPolicyConfigCommand;
const de_GetContinuousDeploymentPolicyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetDistributionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_GetDistributionCommand = de_GetDistributionCommand;
const de_GetDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetDistributionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetDistributionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionConfig = de_DistributionConfig(data, context);
    return contents;
};
exports.de_GetDistributionConfigCommand = de_GetDistributionConfigCommand;
const de_GetDistributionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetFieldLevelEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFieldLevelEncryptionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
    return contents;
};
exports.de_GetFieldLevelEncryptionCommand = de_GetFieldLevelEncryptionCommand;
const de_GetFieldLevelEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetFieldLevelEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionConfig = de_FieldLevelEncryptionConfig(data, context);
    return contents;
};
exports.de_GetFieldLevelEncryptionConfigCommand = de_GetFieldLevelEncryptionConfigCommand;
const de_GetFieldLevelEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetFieldLevelEncryptionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
    return contents;
};
exports.de_GetFieldLevelEncryptionProfileCommand = de_GetFieldLevelEncryptionProfileCommand;
const de_GetFieldLevelEncryptionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetFieldLevelEncryptionProfileConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFieldLevelEncryptionProfileConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionProfileConfig = de_FieldLevelEncryptionProfileConfig(data, context);
    return contents;
};
exports.de_GetFieldLevelEncryptionProfileConfigCommand = de_GetFieldLevelEncryptionProfileConfigCommand;
const de_GetFieldLevelEncryptionProfileConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
        ContentType: [, output.headers["content-type"]],
    });
    const data = await (0, smithy_client_1.collectBody)(output.body, context);
    contents.FunctionCode = data;
    return contents;
};
exports.de_GetFunctionCommand = de_GetFunctionCommand;
const de_GetFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetInvalidationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetInvalidationCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Invalidation = de_Invalidation(data, context);
    return contents;
};
exports.de_GetInvalidationCommand = de_GetInvalidationCommand;
const de_GetInvalidationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchInvalidation":
        case "com.amazonaws.cloudfront#NoSuchInvalidation":
            throw await de_NoSuchInvalidationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetKeyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetKeyGroupCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.KeyGroup = de_KeyGroup(data, context);
    return contents;
};
exports.de_GetKeyGroupCommand = de_GetKeyGroupCommand;
const de_GetKeyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetKeyGroupConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetKeyGroupConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.KeyGroupConfig = de_KeyGroupConfig(data, context);
    return contents;
};
exports.de_GetKeyGroupConfigCommand = de_GetKeyGroupConfigCommand;
const de_GetKeyGroupConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetMonitoringSubscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetMonitoringSubscriptionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.MonitoringSubscription = de_MonitoringSubscription(data, context);
    return contents;
};
exports.de_GetMonitoringSubscriptionCommand = de_GetMonitoringSubscriptionCommand;
const de_GetMonitoringSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchMonitoringSubscription":
        case "com.amazonaws.cloudfront#NoSuchMonitoringSubscription":
            throw await de_NoSuchMonitoringSubscriptionRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetOriginAccessControlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOriginAccessControlCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginAccessControl = de_OriginAccessControl(data, context);
    return contents;
};
exports.de_GetOriginAccessControlCommand = de_GetOriginAccessControlCommand;
const de_GetOriginAccessControlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchOriginAccessControl":
        case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
            throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetOriginAccessControlConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOriginAccessControlConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginAccessControlConfig = de_OriginAccessControlConfig(data, context);
    return contents;
};
exports.de_GetOriginAccessControlConfigCommand = de_GetOriginAccessControlConfigCommand;
const de_GetOriginAccessControlConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchOriginAccessControl":
        case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
            throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetOriginRequestPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOriginRequestPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
    return contents;
};
exports.de_GetOriginRequestPolicyCommand = de_GetOriginRequestPolicyCommand;
const de_GetOriginRequestPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetOriginRequestPolicyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetOriginRequestPolicyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginRequestPolicyConfig = de_OriginRequestPolicyConfig(data, context);
    return contents;
};
exports.de_GetOriginRequestPolicyConfigCommand = de_GetOriginRequestPolicyConfigCommand;
const de_GetOriginRequestPolicyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetPublicKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPublicKeyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicKey = de_PublicKey(data, context);
    return contents;
};
exports.de_GetPublicKeyCommand = de_GetPublicKeyCommand;
const de_GetPublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetPublicKeyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPublicKeyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicKeyConfig = de_PublicKeyConfig(data, context);
    return contents;
};
exports.de_GetPublicKeyConfigCommand = de_GetPublicKeyConfigCommand;
const de_GetPublicKeyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetRealtimeLogConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRealtimeLogConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["RealtimeLogConfig"] !== undefined) {
        contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
    }
    return contents;
};
exports.de_GetRealtimeLogConfigCommand = de_GetRealtimeLogConfigCommand;
const de_GetRealtimeLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetResponseHeadersPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetResponseHeadersPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
    return contents;
};
exports.de_GetResponseHeadersPolicyCommand = de_GetResponseHeadersPolicyCommand;
const de_GetResponseHeadersPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetResponseHeadersPolicyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetResponseHeadersPolicyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ResponseHeadersPolicyConfig = de_ResponseHeadersPolicyConfig(data, context);
    return contents;
};
exports.de_GetResponseHeadersPolicyConfigCommand = de_GetResponseHeadersPolicyConfigCommand;
const de_GetResponseHeadersPolicyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetStreamingDistributionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetStreamingDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistribution = de_StreamingDistribution(data, context);
    return contents;
};
exports.de_GetStreamingDistributionCommand = de_GetStreamingDistributionCommand;
const de_GetStreamingDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchStreamingDistribution":
        case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
            throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetStreamingDistributionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetStreamingDistributionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistributionConfig = de_StreamingDistributionConfig(data, context);
    return contents;
};
exports.de_GetStreamingDistributionConfigCommand = de_GetStreamingDistributionConfigCommand;
const de_GetStreamingDistributionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "NoSuchStreamingDistribution":
        case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
            throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListCachePoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListCachePoliciesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CachePolicyList = de_CachePolicyList(data, context);
    return contents;
};
exports.de_ListCachePoliciesCommand = de_ListCachePoliciesCommand;
const de_ListCachePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListCloudFrontOriginAccessIdentitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListCloudFrontOriginAccessIdentitiesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CloudFrontOriginAccessIdentityList = de_CloudFrontOriginAccessIdentityList(data, context);
    return contents;
};
exports.de_ListCloudFrontOriginAccessIdentitiesCommand = de_ListCloudFrontOriginAccessIdentitiesCommand;
const de_ListCloudFrontOriginAccessIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListConflictingAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListConflictingAliasesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ConflictingAliasesList = de_ConflictingAliasesList(data, context);
    return contents;
};
exports.de_ListConflictingAliasesCommand = de_ListConflictingAliasesCommand;
const de_ListConflictingAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListContinuousDeploymentPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListContinuousDeploymentPoliciesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ContinuousDeploymentPolicyList = de_ContinuousDeploymentPolicyList(data, context);
    return contents;
};
exports.de_ListContinuousDeploymentPoliciesCommand = de_ListContinuousDeploymentPoliciesCommand;
const de_ListContinuousDeploymentPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionList = de_DistributionList(data, context);
    return contents;
};
exports.de_ListDistributionsCommand = de_ListDistributionsCommand;
const de_ListDistributionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByCachePolicyIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByCachePolicyIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionIdList = de_DistributionIdList(data, context);
    return contents;
};
exports.de_ListDistributionsByCachePolicyIdCommand = de_ListDistributionsByCachePolicyIdCommand;
const de_ListDistributionsByCachePolicyIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByKeyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByKeyGroupCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionIdList = de_DistributionIdList(data, context);
    return contents;
};
exports.de_ListDistributionsByKeyGroupCommand = de_ListDistributionsByKeyGroupCommand;
const de_ListDistributionsByKeyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByOriginRequestPolicyIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByOriginRequestPolicyIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionIdList = de_DistributionIdList(data, context);
    return contents;
};
exports.de_ListDistributionsByOriginRequestPolicyIdCommand = de_ListDistributionsByOriginRequestPolicyIdCommand;
const de_ListDistributionsByOriginRequestPolicyIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByRealtimeLogConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByRealtimeLogConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionList = de_DistributionList(data, context);
    return contents;
};
exports.de_ListDistributionsByRealtimeLogConfigCommand = de_ListDistributionsByRealtimeLogConfigCommand;
const de_ListDistributionsByRealtimeLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByResponseHeadersPolicyIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByResponseHeadersPolicyIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionIdList = de_DistributionIdList(data, context);
    return contents;
};
exports.de_ListDistributionsByResponseHeadersPolicyIdCommand = de_ListDistributionsByResponseHeadersPolicyIdCommand;
const de_ListDistributionsByResponseHeadersPolicyIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListDistributionsByWebACLIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListDistributionsByWebACLIdCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.DistributionList = de_DistributionList(data, context);
    return contents;
};
exports.de_ListDistributionsByWebACLIdCommand = de_ListDistributionsByWebACLIdCommand;
const de_ListDistributionsByWebACLIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListFieldLevelEncryptionConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFieldLevelEncryptionConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionList = de_FieldLevelEncryptionList(data, context);
    return contents;
};
exports.de_ListFieldLevelEncryptionConfigsCommand = de_ListFieldLevelEncryptionConfigsCommand;
const de_ListFieldLevelEncryptionConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListFieldLevelEncryptionProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFieldLevelEncryptionProfilesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionProfileList = de_FieldLevelEncryptionProfileList(data, context);
    return contents;
};
exports.de_ListFieldLevelEncryptionProfilesCommand = de_ListFieldLevelEncryptionProfilesCommand;
const de_ListFieldLevelEncryptionProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListFunctionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FunctionList = de_FunctionList(data, context);
    return contents;
};
exports.de_ListFunctionsCommand = de_ListFunctionsCommand;
const de_ListFunctionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListInvalidationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListInvalidationsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.InvalidationList = de_InvalidationList(data, context);
    return contents;
};
exports.de_ListInvalidationsCommand = de_ListInvalidationsCommand;
const de_ListInvalidationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListKeyGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListKeyGroupsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.KeyGroupList = de_KeyGroupList(data, context);
    return contents;
};
exports.de_ListKeyGroupsCommand = de_ListKeyGroupsCommand;
const de_ListKeyGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListOriginAccessControlsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListOriginAccessControlsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginAccessControlList = de_OriginAccessControlList(data, context);
    return contents;
};
exports.de_ListOriginAccessControlsCommand = de_ListOriginAccessControlsCommand;
const de_ListOriginAccessControlsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListOriginRequestPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListOriginRequestPoliciesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginRequestPolicyList = de_OriginRequestPolicyList(data, context);
    return contents;
};
exports.de_ListOriginRequestPoliciesCommand = de_ListOriginRequestPoliciesCommand;
const de_ListOriginRequestPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListPublicKeysCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListPublicKeysCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicKeyList = de_PublicKeyList(data, context);
    return contents;
};
exports.de_ListPublicKeysCommand = de_ListPublicKeysCommand;
const de_ListPublicKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListRealtimeLogConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListRealtimeLogConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.RealtimeLogConfigs = de_RealtimeLogConfigs(data, context);
    return contents;
};
exports.de_ListRealtimeLogConfigsCommand = de_ListRealtimeLogConfigsCommand;
const de_ListRealtimeLogConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListResponseHeadersPoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListResponseHeadersPoliciesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ResponseHeadersPolicyList = de_ResponseHeadersPolicyList(data, context);
    return contents;
};
exports.de_ListResponseHeadersPoliciesCommand = de_ListResponseHeadersPoliciesCommand;
const de_ListResponseHeadersPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListStreamingDistributionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListStreamingDistributionsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistributionList = de_StreamingDistributionList(data, context);
    return contents;
};
exports.de_ListStreamingDistributionsCommand = de_ListStreamingDistributionsCommand;
const de_ListStreamingDistributionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Tags = de_Tags(data, context);
    return contents;
};
exports.de_ListTagsForResourceCommand = de_ListTagsForResourceCommand;
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidTagging":
        case "com.amazonaws.cloudfront#InvalidTagging":
            throw await de_InvalidTaggingRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_PublishFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PublishFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FunctionSummary = de_FunctionSummary(data, context);
    return contents;
};
exports.de_PublishFunctionCommand = de_PublishFunctionCommand;
const de_PublishFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_TagResourceCommand = de_TagResourceCommand;
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidTagging":
        case "com.amazonaws.cloudfront#InvalidTagging":
            throw await de_InvalidTaggingRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_TestFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_TestFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.TestResult = de_TestResult(data, context);
    return contents;
};
exports.de_TestFunctionCommand = de_TestFunctionCommand;
const de_TestFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "TestFunctionFailed":
        case "com.amazonaws.cloudfront#TestFunctionFailed":
            throw await de_TestFunctionFailedRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_UntagResourceCommand = de_UntagResourceCommand;
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidTagging":
        case "com.amazonaws.cloudfront#InvalidTagging":
            throw await de_InvalidTaggingRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateCachePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateCachePolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CachePolicy = de_CachePolicy(data, context);
    return contents;
};
exports.de_UpdateCachePolicyCommand = de_UpdateCachePolicyCommand;
const de_UpdateCachePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CachePolicyAlreadyExists":
        case "com.amazonaws.cloudfront#CachePolicyAlreadyExists":
            throw await de_CachePolicyAlreadyExistsRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "TooManyCookiesInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyCookiesInCachePolicy":
            throw await de_TooManyCookiesInCachePolicyRes(parsedOutput, context);
        case "TooManyHeadersInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyHeadersInCachePolicy":
            throw await de_TooManyHeadersInCachePolicyRes(parsedOutput, context);
        case "TooManyQueryStringsInCachePolicy":
        case "com.amazonaws.cloudfront#TooManyQueryStringsInCachePolicy":
            throw await de_TooManyQueryStringsInCachePolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateCloudFrontOriginAccessIdentityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateCloudFrontOriginAccessIdentityCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CloudFrontOriginAccessIdentity = de_CloudFrontOriginAccessIdentity(data, context);
    return contents;
};
exports.de_UpdateCloudFrontOriginAccessIdentityCommand = de_UpdateCloudFrontOriginAccessIdentityCommand;
const de_UpdateCloudFrontOriginAccessIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCloudFrontOriginAccessIdentity":
        case "com.amazonaws.cloudfront#NoSuchCloudFrontOriginAccessIdentity":
            throw await de_NoSuchCloudFrontOriginAccessIdentityRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateContinuousDeploymentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateContinuousDeploymentPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(data, context);
    return contents;
};
exports.de_UpdateContinuousDeploymentPolicyCommand = de_UpdateContinuousDeploymentPolicyCommand;
const de_UpdateContinuousDeploymentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "StagingDistributionInUse":
        case "com.amazonaws.cloudfront#StagingDistributionInUse":
            throw await de_StagingDistributionInUseRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateDistributionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_UpdateDistributionCommand = de_UpdateDistributionCommand;
const de_UpdateDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "ContinuousDeploymentPolicyInUse":
        case "com.amazonaws.cloudfront#ContinuousDeploymentPolicyInUse":
            throw await de_ContinuousDeploymentPolicyInUseRes(parsedOutput, context);
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
        case "IllegalOriginAccessConfiguration":
        case "com.amazonaws.cloudfront#IllegalOriginAccessConfiguration":
            throw await de_IllegalOriginAccessConfigurationRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidDefaultRootObject":
        case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
            throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
        case "InvalidDomainNameForOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidDomainNameForOriginAccessControl":
            throw await de_InvalidDomainNameForOriginAccessControlRes(parsedOutput, context);
        case "InvalidErrorCode":
        case "com.amazonaws.cloudfront#InvalidErrorCode":
            throw await de_InvalidErrorCodeRes(parsedOutput, context);
        case "InvalidForwardCookies":
        case "com.amazonaws.cloudfront#InvalidForwardCookies":
            throw await de_InvalidForwardCookiesRes(parsedOutput, context);
        case "InvalidFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
            throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
        case "InvalidGeoRestrictionParameter":
        case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
            throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
        case "InvalidHeadersForS3Origin":
        case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
            throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "InvalidLambdaFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
            throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
        case "InvalidLocationCode":
        case "com.amazonaws.cloudfront#InvalidLocationCode":
            throw await de_InvalidLocationCodeRes(parsedOutput, context);
        case "InvalidMinimumProtocolVersion":
        case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
            throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
            throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
        case "InvalidOriginReadTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
            throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
        case "InvalidQueryStringParameters":
        case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
            throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
        case "InvalidRelativePath":
        case "com.amazonaws.cloudfront#InvalidRelativePath":
            throw await de_InvalidRelativePathRes(parsedOutput, context);
        case "InvalidRequiredProtocol":
        case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
            throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
        case "InvalidResponseCode":
        case "com.amazonaws.cloudfront#InvalidResponseCode":
            throw await de_InvalidResponseCodeRes(parsedOutput, context);
        case "InvalidTTLOrder":
        case "com.amazonaws.cloudfront#InvalidTTLOrder":
            throw await de_InvalidTTLOrderRes(parsedOutput, context);
        case "InvalidViewerCertificate":
        case "com.amazonaws.cloudfront#InvalidViewerCertificate":
            throw await de_InvalidViewerCertificateRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "NoSuchContinuousDeploymentPolicy":
        case "com.amazonaws.cloudfront#NoSuchContinuousDeploymentPolicy":
            throw await de_NoSuchContinuousDeploymentPolicyRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchOrigin":
        case "com.amazonaws.cloudfront#NoSuchOrigin":
            throw await de_NoSuchOriginRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "RealtimeLogConfigOwnerMismatch":
        case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
            throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
        case "StagingDistributionInUse":
        case "com.amazonaws.cloudfront#StagingDistributionInUse":
            throw await de_StagingDistributionInUseRes(parsedOutput, context);
        case "TooManyCacheBehaviors":
        case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
            throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
        case "TooManyCertificates":
        case "com.amazonaws.cloudfront#TooManyCertificates":
            throw await de_TooManyCertificatesRes(parsedOutput, context);
        case "TooManyCookieNamesInWhiteList":
        case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
            throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToCachePolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
            throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToKeyGroup":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
            throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginAccessControl":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
            throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
            throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
            throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyDistributionsWithFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
            throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
            throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithSingleFunctionARN":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
            throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
        case "TooManyFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
            throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
        case "TooManyHeadersInForwardedValues":
        case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
            throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
        case "TooManyKeyGroupsAssociatedToDistribution":
        case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
            throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
        case "TooManyLambdaFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
            throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
        case "TooManyOriginCustomHeaders":
        case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
            throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
            throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
        case "TooManyOrigins":
        case "com.amazonaws.cloudfront#TooManyOrigins":
            throw await de_TooManyOriginsRes(parsedOutput, context);
        case "TooManyQueryStringParameters":
        case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
            throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedKeyGroupDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
            throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateDistributionWithStagingConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateDistributionWithStagingConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Distribution = de_Distribution(data, context);
    return contents;
};
exports.de_UpdateDistributionWithStagingConfigCommand = de_UpdateDistributionWithStagingConfigCommand;
const de_UpdateDistributionWithStagingConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
        case "com.amazonaws.cloudfront#IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior":
            throw await de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidDefaultRootObject":
        case "com.amazonaws.cloudfront#InvalidDefaultRootObject":
            throw await de_InvalidDefaultRootObjectRes(parsedOutput, context);
        case "InvalidErrorCode":
        case "com.amazonaws.cloudfront#InvalidErrorCode":
            throw await de_InvalidErrorCodeRes(parsedOutput, context);
        case "InvalidForwardCookies":
        case "com.amazonaws.cloudfront#InvalidForwardCookies":
            throw await de_InvalidForwardCookiesRes(parsedOutput, context);
        case "InvalidFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidFunctionAssociation":
            throw await de_InvalidFunctionAssociationRes(parsedOutput, context);
        case "InvalidGeoRestrictionParameter":
        case "com.amazonaws.cloudfront#InvalidGeoRestrictionParameter":
            throw await de_InvalidGeoRestrictionParameterRes(parsedOutput, context);
        case "InvalidHeadersForS3Origin":
        case "com.amazonaws.cloudfront#InvalidHeadersForS3Origin":
            throw await de_InvalidHeadersForS3OriginRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "InvalidLambdaFunctionAssociation":
        case "com.amazonaws.cloudfront#InvalidLambdaFunctionAssociation":
            throw await de_InvalidLambdaFunctionAssociationRes(parsedOutput, context);
        case "InvalidLocationCode":
        case "com.amazonaws.cloudfront#InvalidLocationCode":
            throw await de_InvalidLocationCodeRes(parsedOutput, context);
        case "InvalidMinimumProtocolVersion":
        case "com.amazonaws.cloudfront#InvalidMinimumProtocolVersion":
            throw await de_InvalidMinimumProtocolVersionRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "InvalidOriginKeepaliveTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginKeepaliveTimeout":
            throw await de_InvalidOriginKeepaliveTimeoutRes(parsedOutput, context);
        case "InvalidOriginReadTimeout":
        case "com.amazonaws.cloudfront#InvalidOriginReadTimeout":
            throw await de_InvalidOriginReadTimeoutRes(parsedOutput, context);
        case "InvalidQueryStringParameters":
        case "com.amazonaws.cloudfront#InvalidQueryStringParameters":
            throw await de_InvalidQueryStringParametersRes(parsedOutput, context);
        case "InvalidRelativePath":
        case "com.amazonaws.cloudfront#InvalidRelativePath":
            throw await de_InvalidRelativePathRes(parsedOutput, context);
        case "InvalidRequiredProtocol":
        case "com.amazonaws.cloudfront#InvalidRequiredProtocol":
            throw await de_InvalidRequiredProtocolRes(parsedOutput, context);
        case "InvalidResponseCode":
        case "com.amazonaws.cloudfront#InvalidResponseCode":
            throw await de_InvalidResponseCodeRes(parsedOutput, context);
        case "InvalidTTLOrder":
        case "com.amazonaws.cloudfront#InvalidTTLOrder":
            throw await de_InvalidTTLOrderRes(parsedOutput, context);
        case "InvalidViewerCertificate":
        case "com.amazonaws.cloudfront#InvalidViewerCertificate":
            throw await de_InvalidViewerCertificateRes(parsedOutput, context);
        case "InvalidWebACLId":
        case "com.amazonaws.cloudfront#InvalidWebACLId":
            throw await de_InvalidWebACLIdRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchCachePolicy":
        case "com.amazonaws.cloudfront#NoSuchCachePolicy":
            throw await de_NoSuchCachePolicyRes(parsedOutput, context);
        case "NoSuchDistribution":
        case "com.amazonaws.cloudfront#NoSuchDistribution":
            throw await de_NoSuchDistributionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchOrigin":
        case "com.amazonaws.cloudfront#NoSuchOrigin":
            throw await de_NoSuchOriginRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "RealtimeLogConfigOwnerMismatch":
        case "com.amazonaws.cloudfront#RealtimeLogConfigOwnerMismatch":
            throw await de_RealtimeLogConfigOwnerMismatchRes(parsedOutput, context);
        case "TooManyCacheBehaviors":
        case "com.amazonaws.cloudfront#TooManyCacheBehaviors":
            throw await de_TooManyCacheBehaviorsRes(parsedOutput, context);
        case "TooManyCertificates":
        case "com.amazonaws.cloudfront#TooManyCertificates":
            throw await de_TooManyCertificatesRes(parsedOutput, context);
        case "TooManyCookieNamesInWhiteList":
        case "com.amazonaws.cloudfront#TooManyCookieNamesInWhiteList":
            throw await de_TooManyCookieNamesInWhiteListRes(parsedOutput, context);
        case "TooManyDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyDistributionCNAMEs":
            throw await de_TooManyDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToCachePolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToCachePolicy":
            throw await de_TooManyDistributionsAssociatedToCachePolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToFieldLevelEncryptionConfig":
            throw await de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToKeyGroup":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToKeyGroup":
            throw await de_TooManyDistributionsAssociatedToKeyGroupRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginAccessControl":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginAccessControl":
            throw await de_TooManyDistributionsAssociatedToOriginAccessControlRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToOriginRequestPolicy":
            throw await de_TooManyDistributionsAssociatedToOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyDistributionsAssociatedToResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyDistributionsAssociatedToResponseHeadersPolicy":
            throw await de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyDistributionsWithFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithFunctionAssociations":
            throw await de_TooManyDistributionsWithFunctionAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithLambdaAssociations":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithLambdaAssociations":
            throw await de_TooManyDistributionsWithLambdaAssociationsRes(parsedOutput, context);
        case "TooManyDistributionsWithSingleFunctionARN":
        case "com.amazonaws.cloudfront#TooManyDistributionsWithSingleFunctionARN":
            throw await de_TooManyDistributionsWithSingleFunctionARNRes(parsedOutput, context);
        case "TooManyFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyFunctionAssociations":
            throw await de_TooManyFunctionAssociationsRes(parsedOutput, context);
        case "TooManyHeadersInForwardedValues":
        case "com.amazonaws.cloudfront#TooManyHeadersInForwardedValues":
            throw await de_TooManyHeadersInForwardedValuesRes(parsedOutput, context);
        case "TooManyKeyGroupsAssociatedToDistribution":
        case "com.amazonaws.cloudfront#TooManyKeyGroupsAssociatedToDistribution":
            throw await de_TooManyKeyGroupsAssociatedToDistributionRes(parsedOutput, context);
        case "TooManyLambdaFunctionAssociations":
        case "com.amazonaws.cloudfront#TooManyLambdaFunctionAssociations":
            throw await de_TooManyLambdaFunctionAssociationsRes(parsedOutput, context);
        case "TooManyOriginCustomHeaders":
        case "com.amazonaws.cloudfront#TooManyOriginCustomHeaders":
            throw await de_TooManyOriginCustomHeadersRes(parsedOutput, context);
        case "TooManyOriginGroupsPerDistribution":
        case "com.amazonaws.cloudfront#TooManyOriginGroupsPerDistribution":
            throw await de_TooManyOriginGroupsPerDistributionRes(parsedOutput, context);
        case "TooManyOrigins":
        case "com.amazonaws.cloudfront#TooManyOrigins":
            throw await de_TooManyOriginsRes(parsedOutput, context);
        case "TooManyQueryStringParameters":
        case "com.amazonaws.cloudfront#TooManyQueryStringParameters":
            throw await de_TooManyQueryStringParametersRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedKeyGroupDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedKeyGroupDoesNotExist":
            throw await de_TrustedKeyGroupDoesNotExistRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateFieldLevelEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFieldLevelEncryptionConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryption = de_FieldLevelEncryption(data, context);
    return contents;
};
exports.de_UpdateFieldLevelEncryptionConfigCommand = de_UpdateFieldLevelEncryptionConfigCommand;
const de_UpdateFieldLevelEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionConfig":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionConfig":
            throw await de_NoSuchFieldLevelEncryptionConfigRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "QueryArgProfileEmpty":
        case "com.amazonaws.cloudfront#QueryArgProfileEmpty":
            throw await de_QueryArgProfileEmptyRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionContentTypeProfiles":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionContentTypeProfiles":
            throw await de_TooManyFieldLevelEncryptionContentTypeProfilesRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionQueryArgProfiles":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionQueryArgProfiles":
            throw await de_TooManyFieldLevelEncryptionQueryArgProfilesRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateFieldLevelEncryptionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFieldLevelEncryptionProfileCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FieldLevelEncryptionProfile = de_FieldLevelEncryptionProfile(data, context);
    return contents;
};
exports.de_UpdateFieldLevelEncryptionProfileCommand = de_UpdateFieldLevelEncryptionProfileCommand;
const de_UpdateFieldLevelEncryptionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "FieldLevelEncryptionProfileAlreadyExists":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileAlreadyExists":
            throw await de_FieldLevelEncryptionProfileAlreadyExistsRes(parsedOutput, context);
        case "FieldLevelEncryptionProfileSizeExceeded":
        case "com.amazonaws.cloudfront#FieldLevelEncryptionProfileSizeExceeded":
            throw await de_FieldLevelEncryptionProfileSizeExceededRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFieldLevelEncryptionProfile":
        case "com.amazonaws.cloudfront#NoSuchFieldLevelEncryptionProfile":
            throw await de_NoSuchFieldLevelEncryptionProfileRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionEncryptionEntities":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionEncryptionEntities":
            throw await de_TooManyFieldLevelEncryptionEncryptionEntitiesRes(parsedOutput, context);
        case "TooManyFieldLevelEncryptionFieldPatterns":
        case "com.amazonaws.cloudfront#TooManyFieldLevelEncryptionFieldPatterns":
            throw await de_TooManyFieldLevelEncryptionFieldPatternsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["ettag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.FunctionSummary = de_FunctionSummary(data, context);
    return contents;
};
exports.de_UpdateFunctionCommand = de_UpdateFunctionCommand;
const de_UpdateFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FunctionSizeLimitExceeded":
        case "com.amazonaws.cloudfront#FunctionSizeLimitExceeded":
            throw await de_FunctionSizeLimitExceededRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchFunctionExists":
        case "com.amazonaws.cloudfront#NoSuchFunctionExists":
            throw await de_NoSuchFunctionExistsRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.cloudfront#UnsupportedOperation":
            throw await de_UnsupportedOperationRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateKeyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateKeyGroupCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.KeyGroup = de_KeyGroup(data, context);
    return contents;
};
exports.de_UpdateKeyGroupCommand = de_UpdateKeyGroupCommand;
const de_UpdateKeyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "KeyGroupAlreadyExists":
        case "com.amazonaws.cloudfront#KeyGroupAlreadyExists":
            throw await de_KeyGroupAlreadyExistsRes(parsedOutput, context);
        case "NoSuchResource":
        case "com.amazonaws.cloudfront#NoSuchResource":
            throw await de_NoSuchResourceRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "TooManyPublicKeysInKeyGroup":
        case "com.amazonaws.cloudfront#TooManyPublicKeysInKeyGroup":
            throw await de_TooManyPublicKeysInKeyGroupRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateOriginAccessControlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOriginAccessControlCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginAccessControl = de_OriginAccessControl(data, context);
    return contents;
};
exports.de_UpdateOriginAccessControlCommand = de_UpdateOriginAccessControlCommand;
const de_UpdateOriginAccessControlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchOriginAccessControl":
        case "com.amazonaws.cloudfront#NoSuchOriginAccessControl":
            throw await de_NoSuchOriginAccessControlRes(parsedOutput, context);
        case "OriginAccessControlAlreadyExists":
        case "com.amazonaws.cloudfront#OriginAccessControlAlreadyExists":
            throw await de_OriginAccessControlAlreadyExistsRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateOriginRequestPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateOriginRequestPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OriginRequestPolicy = de_OriginRequestPolicy(data, context);
    return contents;
};
exports.de_UpdateOriginRequestPolicyCommand = de_UpdateOriginRequestPolicyCommand;
const de_UpdateOriginRequestPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchOriginRequestPolicy":
        case "com.amazonaws.cloudfront#NoSuchOriginRequestPolicy":
            throw await de_NoSuchOriginRequestPolicyRes(parsedOutput, context);
        case "OriginRequestPolicyAlreadyExists":
        case "com.amazonaws.cloudfront#OriginRequestPolicyAlreadyExists":
            throw await de_OriginRequestPolicyAlreadyExistsRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "TooManyCookiesInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyCookiesInOriginRequestPolicy":
            throw await de_TooManyCookiesInOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyHeadersInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyHeadersInOriginRequestPolicy":
            throw await de_TooManyHeadersInOriginRequestPolicyRes(parsedOutput, context);
        case "TooManyQueryStringsInOriginRequestPolicy":
        case "com.amazonaws.cloudfront#TooManyQueryStringsInOriginRequestPolicy":
            throw await de_TooManyQueryStringsInOriginRequestPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdatePublicKeyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdatePublicKeyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicKey = de_PublicKey(data, context);
    return contents;
};
exports.de_UpdatePublicKeyCommand = de_UpdatePublicKeyCommand;
const de_UpdatePublicKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CannotChangeImmutablePublicKeyFields":
        case "com.amazonaws.cloudfront#CannotChangeImmutablePublicKeyFields":
            throw await de_CannotChangeImmutablePublicKeyFieldsRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchPublicKey":
        case "com.amazonaws.cloudfront#NoSuchPublicKey":
            throw await de_NoSuchPublicKeyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateRealtimeLogConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateRealtimeLogConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["RealtimeLogConfig"] !== undefined) {
        contents.RealtimeLogConfig = de_RealtimeLogConfig(data["RealtimeLogConfig"], context);
    }
    return contents;
};
exports.de_UpdateRealtimeLogConfigCommand = de_UpdateRealtimeLogConfigCommand;
const de_UpdateRealtimeLogConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "NoSuchRealtimeLogConfig":
        case "com.amazonaws.cloudfront#NoSuchRealtimeLogConfig":
            throw await de_NoSuchRealtimeLogConfigRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateResponseHeadersPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateResponseHeadersPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(data, context);
    return contents;
};
exports.de_UpdateResponseHeadersPolicyCommand = de_UpdateResponseHeadersPolicyCommand;
const de_UpdateResponseHeadersPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "NoSuchResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#NoSuchResponseHeadersPolicy":
            throw await de_NoSuchResponseHeadersPolicyRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "ResponseHeadersPolicyAlreadyExists":
        case "com.amazonaws.cloudfront#ResponseHeadersPolicyAlreadyExists":
            throw await de_ResponseHeadersPolicyAlreadyExistsRes(parsedOutput, context);
        case "TooLongCSPInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooLongCSPInResponseHeadersPolicy":
            throw await de_TooLongCSPInResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyCustomHeadersInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyCustomHeadersInResponseHeadersPolicy":
            throw await de_TooManyCustomHeadersInResponseHeadersPolicyRes(parsedOutput, context);
        case "TooManyRemoveHeadersInResponseHeadersPolicy":
        case "com.amazonaws.cloudfront#TooManyRemoveHeadersInResponseHeadersPolicy":
            throw await de_TooManyRemoveHeadersInResponseHeadersPolicyRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateStreamingDistributionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateStreamingDistributionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ETag: [, output.headers["etag"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.StreamingDistribution = de_StreamingDistribution(data, context);
    return contents;
};
exports.de_UpdateStreamingDistributionCommand = de_UpdateStreamingDistributionCommand;
const de_UpdateStreamingDistributionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDenied":
        case "com.amazonaws.cloudfront#AccessDenied":
            throw await de_AccessDeniedRes(parsedOutput, context);
        case "CNAMEAlreadyExists":
        case "com.amazonaws.cloudfront#CNAMEAlreadyExists":
            throw await de_CNAMEAlreadyExistsRes(parsedOutput, context);
        case "IllegalUpdate":
        case "com.amazonaws.cloudfront#IllegalUpdate":
            throw await de_IllegalUpdateRes(parsedOutput, context);
        case "InconsistentQuantities":
        case "com.amazonaws.cloudfront#InconsistentQuantities":
            throw await de_InconsistentQuantitiesRes(parsedOutput, context);
        case "InvalidArgument":
        case "com.amazonaws.cloudfront#InvalidArgument":
            throw await de_InvalidArgumentRes(parsedOutput, context);
        case "InvalidIfMatchVersion":
        case "com.amazonaws.cloudfront#InvalidIfMatchVersion":
            throw await de_InvalidIfMatchVersionRes(parsedOutput, context);
        case "InvalidOriginAccessControl":
        case "com.amazonaws.cloudfront#InvalidOriginAccessControl":
            throw await de_InvalidOriginAccessControlRes(parsedOutput, context);
        case "InvalidOriginAccessIdentity":
        case "com.amazonaws.cloudfront#InvalidOriginAccessIdentity":
            throw await de_InvalidOriginAccessIdentityRes(parsedOutput, context);
        case "MissingBody":
        case "com.amazonaws.cloudfront#MissingBody":
            throw await de_MissingBodyRes(parsedOutput, context);
        case "NoSuchStreamingDistribution":
        case "com.amazonaws.cloudfront#NoSuchStreamingDistribution":
            throw await de_NoSuchStreamingDistributionRes(parsedOutput, context);
        case "PreconditionFailed":
        case "com.amazonaws.cloudfront#PreconditionFailed":
            throw await de_PreconditionFailedRes(parsedOutput, context);
        case "TooManyStreamingDistributionCNAMEs":
        case "com.amazonaws.cloudfront#TooManyStreamingDistributionCNAMEs":
            throw await de_TooManyStreamingDistributionCNAMEsRes(parsedOutput, context);
        case "TooManyTrustedSigners":
        case "com.amazonaws.cloudfront#TooManyTrustedSigners":
            throw await de_TooManyTrustedSignersRes(parsedOutput, context);
        case "TrustedSignerDoesNotExist":
        case "com.amazonaws.cloudfront#TrustedSignerDoesNotExist":
            throw await de_TrustedSignerDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const throwDefaultError = (0, smithy_client_1.withBaseException)(CloudFrontServiceException_1.CloudFrontServiceException);
const de_AccessDeniedRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.AccessDenied({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_BatchTooLargeRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.BatchTooLarge({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CachePolicyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.CachePolicyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CachePolicyInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.CachePolicyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CannotChangeImmutablePublicKeyFieldsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.CannotChangeImmutablePublicKeyFields({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CloudFrontOriginAccessIdentityAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.CloudFrontOriginAccessIdentityAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CloudFrontOriginAccessIdentityInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.CloudFrontOriginAccessIdentityInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_CNAMEAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.CNAMEAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_ContinuousDeploymentPolicyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.ContinuousDeploymentPolicyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_ContinuousDeploymentPolicyInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.ContinuousDeploymentPolicyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_DistributionAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.DistributionAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_DistributionNotDisabledRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.DistributionNotDisabled({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FieldLevelEncryptionConfigAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.FieldLevelEncryptionConfigAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FieldLevelEncryptionConfigInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.FieldLevelEncryptionConfigInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FieldLevelEncryptionProfileAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.FieldLevelEncryptionProfileAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FieldLevelEncryptionProfileInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.FieldLevelEncryptionProfileInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FieldLevelEncryptionProfileSizeExceededRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.FieldLevelEncryptionProfileSizeExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FunctionAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.FunctionAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FunctionInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.FunctionInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_FunctionSizeLimitExceededRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.FunctionSizeLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_IllegalDeleteRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.IllegalDelete({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_IllegalOriginAccessConfigurationRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.IllegalOriginAccessConfiguration({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_IllegalUpdateRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.IllegalUpdate({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InconsistentQuantitiesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InconsistentQuantities({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidArgumentRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidArgument({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidDefaultRootObjectRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidDefaultRootObject({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidDomainNameForOriginAccessControlRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidDomainNameForOriginAccessControl({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidErrorCodeRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidErrorCode({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidForwardCookiesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidForwardCookies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidFunctionAssociationRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidFunctionAssociation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidGeoRestrictionParameterRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidGeoRestrictionParameter({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidHeadersForS3OriginRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidHeadersForS3Origin({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidIfMatchVersionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidIfMatchVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidLambdaFunctionAssociationRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidLambdaFunctionAssociation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidLocationCodeRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidLocationCode({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidMinimumProtocolVersionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidMinimumProtocolVersion({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidOriginRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidOrigin({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidOriginAccessControlRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidOriginAccessControl({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidOriginAccessIdentityRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidOriginAccessIdentity({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidOriginKeepaliveTimeoutRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidOriginKeepaliveTimeout({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidOriginReadTimeoutRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidOriginReadTimeout({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidProtocolSettingsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidProtocolSettings({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidQueryStringParametersRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidQueryStringParameters({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidRelativePathRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidRelativePath({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidRequiredProtocolRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidRequiredProtocol({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidResponseCodeRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidResponseCode({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidTaggingRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidTagging({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidTTLOrderRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidTTLOrder({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidViewerCertificateRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidViewerCertificate({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_InvalidWebACLIdRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.InvalidWebACLId({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_KeyGroupAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.KeyGroupAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_MissingBodyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.MissingBody({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_MonitoringSubscriptionAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.MonitoringSubscriptionAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchCachePolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchCachePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchCloudFrontOriginAccessIdentityRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchCloudFrontOriginAccessIdentity({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchContinuousDeploymentPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchContinuousDeploymentPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchDistributionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchDistribution({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchFieldLevelEncryptionConfigRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchFieldLevelEncryptionConfig({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchFieldLevelEncryptionProfileRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchFieldLevelEncryptionProfile({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchFunctionExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchFunctionExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchInvalidationRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchInvalidation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchMonitoringSubscriptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchMonitoringSubscription({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchOriginRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchOrigin({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchOriginAccessControlRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchOriginAccessControl({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchOriginRequestPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchOriginRequestPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchPublicKeyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchPublicKey({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchRealtimeLogConfigRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchRealtimeLogConfig({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchResourceRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchResource({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchResponseHeadersPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.NoSuchResponseHeadersPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_NoSuchStreamingDistributionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.NoSuchStreamingDistribution({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_OriginAccessControlAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.OriginAccessControlAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_OriginAccessControlInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.OriginAccessControlInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_OriginRequestPolicyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.OriginRequestPolicyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_OriginRequestPolicyInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.OriginRequestPolicyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_PreconditionFailedRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.PreconditionFailed({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_PublicKeyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.PublicKeyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_PublicKeyInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.PublicKeyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_QueryArgProfileEmptyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.QueryArgProfileEmpty({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_RealtimeLogConfigAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.RealtimeLogConfigAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_RealtimeLogConfigInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.RealtimeLogConfigInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_RealtimeLogConfigOwnerMismatchRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.RealtimeLogConfigOwnerMismatch({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_ResourceInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.ResourceInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_ResponseHeadersPolicyAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.ResponseHeadersPolicyAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_ResponseHeadersPolicyInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.ResponseHeadersPolicyInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_StagingDistributionInUseRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.StagingDistributionInUse({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_StreamingDistributionAlreadyExistsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.StreamingDistributionAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_StreamingDistributionNotDisabledRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.StreamingDistributionNotDisabled({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TestFunctionFailedRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TestFunctionFailed({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooLongCSPInResponseHeadersPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooLongCSPInResponseHeadersPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCacheBehaviorsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCacheBehaviors({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCachePoliciesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCachePolicies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCertificatesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCertificates({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCloudFrontOriginAccessIdentitiesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCloudFrontOriginAccessIdentities({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyContinuousDeploymentPoliciesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyContinuousDeploymentPolicies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCookieNamesInWhiteListRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCookieNamesInWhiteList({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCookiesInCachePolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCookiesInCachePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCookiesInOriginRequestPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyCookiesInOriginRequestPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyCustomHeadersInResponseHeadersPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooManyCustomHeadersInResponseHeadersPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionCNAMEsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionCNAMEs({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributions({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToCachePolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToCachePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToFieldLevelEncryptionConfigRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToFieldLevelEncryptionConfig({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToKeyGroupRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToKeyGroup({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToOriginAccessControlRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToOriginAccessControl({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToOriginRequestPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToOriginRequestPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsAssociatedToResponseHeadersPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsAssociatedToResponseHeadersPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsWithFunctionAssociationsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsWithFunctionAssociations({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsWithLambdaAssociationsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsWithLambdaAssociations({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyDistributionsWithSingleFunctionARNRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyDistributionsWithSingleFunctionARN({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionConfigsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionConfigs({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionContentTypeProfilesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionContentTypeProfiles({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionEncryptionEntitiesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionEncryptionEntities({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionFieldPatternsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionFieldPatterns({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionProfilesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionProfiles({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFieldLevelEncryptionQueryArgProfilesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFieldLevelEncryptionQueryArgProfiles({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFunctionAssociationsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFunctionAssociations({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyFunctionsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyFunctions({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyHeadersInCachePolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyHeadersInCachePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyHeadersInForwardedValuesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyHeadersInForwardedValues({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyHeadersInOriginRequestPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyHeadersInOriginRequestPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyInvalidationsInProgressRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyInvalidationsInProgress({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyKeyGroupsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyKeyGroups({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyKeyGroupsAssociatedToDistributionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyKeyGroupsAssociatedToDistribution({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyLambdaFunctionAssociationsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyLambdaFunctionAssociations({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyOriginAccessControlsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyOriginAccessControls({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyOriginCustomHeadersRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyOriginCustomHeaders({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyOriginGroupsPerDistributionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyOriginGroupsPerDistribution({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyOriginRequestPoliciesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyOriginRequestPolicies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyOriginsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyOrigins({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyPublicKeysRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyPublicKeys({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyPublicKeysInKeyGroupRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyPublicKeysInKeyGroup({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyQueryStringParametersRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyQueryStringParameters({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyQueryStringsInCachePolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyQueryStringsInCachePolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyQueryStringsInOriginRequestPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyQueryStringsInOriginRequestPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyRealtimeLogConfigsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyRealtimeLogConfigs({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyRemoveHeadersInResponseHeadersPolicyRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooManyRemoveHeadersInResponseHeadersPolicy({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyResponseHeadersPoliciesRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooManyResponseHeadersPolicies({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyStreamingDistributionCNAMEsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooManyStreamingDistributionCNAMEs({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyStreamingDistributionsRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_1_1.TooManyStreamingDistributions({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TooManyTrustedSignersRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TooManyTrustedSigners({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TrustedKeyGroupDoesNotExistRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TrustedKeyGroupDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_TrustedSignerDoesNotExistRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.TrustedSignerDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const de_UnsupportedOperationRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body.Error;
    if (data["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(data["Message"]);
    }
    const exception = new models_0_1.UnsupportedOperation({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body.Error);
};
const se_AccessControlAllowHeadersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Header");
    });
};
const se_AccessControlAllowMethodsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("ResponseHeadersPolicyAccessControlAllowMethodsValues", entry);
        return node.withName("Method");
    });
};
const se_AccessControlAllowOriginsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Origin");
    });
};
const se_AccessControlExposeHeadersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Header");
    });
};
const se_Aliases = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Aliases");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AliasList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_AliasList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("CNAME");
    });
};
const se_AllowedMethods = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AllowedMethods");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_MethodsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.CachedMethods != null) {
        const node = se_CachedMethods(input.CachedMethods, context).withName("CachedMethods");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_AwsAccountNumberList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("AwsAccountNumber");
    });
};
const se_CacheBehavior = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CacheBehavior");
    if (input.PathPattern != null) {
        const node = xml_builder_1.XmlNode.of("string", input.PathPattern).withName("PathPattern");
        bodyNode.addChildNode(node);
    }
    if (input.TargetOriginId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.TargetOriginId).withName("TargetOriginId");
        bodyNode.addChildNode(node);
    }
    if (input.TrustedSigners != null) {
        const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
        bodyNode.addChildNode(node);
    }
    if (input.TrustedKeyGroups != null) {
        const node = se_TrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
        bodyNode.addChildNode(node);
    }
    if (input.ViewerProtocolPolicy != null) {
        const node = xml_builder_1.XmlNode.of("ViewerProtocolPolicy", input.ViewerProtocolPolicy).withName("ViewerProtocolPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.AllowedMethods != null) {
        const node = se_AllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
        bodyNode.addChildNode(node);
    }
    if (input.SmoothStreaming != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.SmoothStreaming)).withName("SmoothStreaming");
        bodyNode.addChildNode(node);
    }
    if (input.Compress != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Compress)).withName("Compress");
        bodyNode.addChildNode(node);
    }
    if (input.LambdaFunctionAssociations != null) {
        const node = se_LambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName("LambdaFunctionAssociations");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionAssociations != null) {
        const node = se_FunctionAssociations(input.FunctionAssociations, context).withName("FunctionAssociations");
        bodyNode.addChildNode(node);
    }
    if (input.FieldLevelEncryptionId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.FieldLevelEncryptionId).withName("FieldLevelEncryptionId");
        bodyNode.addChildNode(node);
    }
    if (input.RealtimeLogConfigArn != null) {
        const node = xml_builder_1.XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
        bodyNode.addChildNode(node);
    }
    if (input.CachePolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CachePolicyId).withName("CachePolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.OriginRequestPolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginRequestPolicyId).withName("OriginRequestPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.ResponseHeadersPolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ResponseHeadersPolicyId).withName("ResponseHeadersPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.ForwardedValues != null) {
        const node = se_ForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
        bodyNode.addChildNode(node);
    }
    if (input.MinTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
        bodyNode.addChildNode(node);
    }
    if (input.DefaultTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
        bodyNode.addChildNode(node);
    }
    if (input.MaxTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CacheBehaviorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_CacheBehavior(entry, context);
        return node.withName("CacheBehavior");
    });
};
const se_CacheBehaviors = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CacheBehaviors");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_CacheBehaviorList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_CachedMethods = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachedMethods");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_MethodsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_CachePolicyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachePolicyConfig");
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.DefaultTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
        bodyNode.addChildNode(node);
    }
    if (input.MaxTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
        bodyNode.addChildNode(node);
    }
    if (input.MinTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
        bodyNode.addChildNode(node);
    }
    if (input.ParametersInCacheKeyAndForwardedToOrigin != null) {
        const node = se_ParametersInCacheKeyAndForwardedToOrigin(input.ParametersInCacheKeyAndForwardedToOrigin, context).withName("ParametersInCacheKeyAndForwardedToOrigin");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CachePolicyCookiesConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachePolicyCookiesConfig");
    if (input.CookieBehavior != null) {
        const node = xml_builder_1.XmlNode.of("CachePolicyCookieBehavior", input.CookieBehavior).withName("CookieBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.Cookies != null) {
        const node = se_CookieNames(input.Cookies, context).withName("Cookies");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CachePolicyHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachePolicyHeadersConfig");
    if (input.HeaderBehavior != null) {
        const node = xml_builder_1.XmlNode.of("CachePolicyHeaderBehavior", input.HeaderBehavior).withName("HeaderBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.Headers != null) {
        const node = se_Headers(input.Headers, context).withName("Headers");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CachePolicyQueryStringsConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CachePolicyQueryStringsConfig");
    if (input.QueryStringBehavior != null) {
        const node = xml_builder_1.XmlNode
            .of("CachePolicyQueryStringBehavior", input.QueryStringBehavior)
            .withName("QueryStringBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.QueryStrings != null) {
        const node = se_QueryStringNames(input.QueryStrings, context).withName("QueryStrings");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CloudFrontOriginAccessIdentityConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CloudFrontOriginAccessIdentityConfig");
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ContentTypeProfile = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfile");
    if (input.Format != null) {
        const node = xml_builder_1.XmlNode.of("Format", input.Format).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.ProfileId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ProfileId).withName("ProfileId");
        bodyNode.addChildNode(node);
    }
    if (input.ContentType != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ContentType).withName("ContentType");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ContentTypeProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfileConfig");
    if (input.ForwardWhenContentTypeIsUnknown != null) {
        const node = xml_builder_1.XmlNode
            .of("boolean", String(input.ForwardWhenContentTypeIsUnknown))
            .withName("ForwardWhenContentTypeIsUnknown");
        bodyNode.addChildNode(node);
    }
    if (input.ContentTypeProfiles != null) {
        const node = se_ContentTypeProfiles(input.ContentTypeProfiles, context).withName("ContentTypeProfiles");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ContentTypeProfileList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_ContentTypeProfile(entry, context);
        return node.withName("ContentTypeProfile");
    });
};
const se_ContentTypeProfiles = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContentTypeProfiles");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_ContentTypeProfileList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ContinuousDeploymentPolicyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContinuousDeploymentPolicyConfig");
    if (input.StagingDistributionDnsNames != null) {
        const node = se_StagingDistributionDnsNames(input.StagingDistributionDnsNames, context).withName("StagingDistributionDnsNames");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.TrafficConfig != null) {
        const node = se_TrafficConfig(input.TrafficConfig, context).withName("TrafficConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ContinuousDeploymentSingleHeaderConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContinuousDeploymentSingleHeaderConfig");
    if (input.Header != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Header).withName("Header");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ContinuousDeploymentSingleWeightConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ContinuousDeploymentSingleWeightConfig");
    if (input.Weight != null) {
        const node = xml_builder_1.XmlNode.of("float", String(input.Weight)).withName("Weight");
        bodyNode.addChildNode(node);
    }
    if (input.SessionStickinessConfig != null) {
        const node = se_SessionStickinessConfig(input.SessionStickinessConfig, context).withName("SessionStickinessConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CookieNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Name");
    });
};
const se_CookieNames = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CookieNames");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_CookieNameList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_CookiePreference = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CookiePreference");
    if (input.Forward != null) {
        const node = xml_builder_1.XmlNode.of("ItemSelection", input.Forward).withName("Forward");
        bodyNode.addChildNode(node);
    }
    if (input.WhitelistedNames != null) {
        const node = se_CookieNames(input.WhitelistedNames, context).withName("WhitelistedNames");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CustomErrorResponse = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponse");
    if (input.ErrorCode != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.ErrorCode)).withName("ErrorCode");
        bodyNode.addChildNode(node);
    }
    if (input.ResponsePagePath != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ResponsePagePath).withName("ResponsePagePath");
        bodyNode.addChildNode(node);
    }
    if (input.ResponseCode != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ResponseCode).withName("ResponseCode");
        bodyNode.addChildNode(node);
    }
    if (input.ErrorCachingMinTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.ErrorCachingMinTTL)).withName("ErrorCachingMinTTL");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_CustomErrorResponseList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_CustomErrorResponse(entry, context);
        return node.withName("CustomErrorResponse");
    });
};
const se_CustomErrorResponses = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomErrorResponses");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_CustomErrorResponseList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_CustomHeaders = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomHeaders");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_OriginCustomHeadersList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_CustomOriginConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CustomOriginConfig");
    if (input.HTTPPort != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.HTTPPort)).withName("HTTPPort");
        bodyNode.addChildNode(node);
    }
    if (input.HTTPSPort != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.HTTPSPort)).withName("HTTPSPort");
        bodyNode.addChildNode(node);
    }
    if (input.OriginProtocolPolicy != null) {
        const node = xml_builder_1.XmlNode.of("OriginProtocolPolicy", input.OriginProtocolPolicy).withName("OriginProtocolPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.OriginSslProtocols != null) {
        const node = se_OriginSslProtocols(input.OriginSslProtocols, context).withName("OriginSslProtocols");
        bodyNode.addChildNode(node);
    }
    if (input.OriginReadTimeout != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.OriginReadTimeout)).withName("OriginReadTimeout");
        bodyNode.addChildNode(node);
    }
    if (input.OriginKeepaliveTimeout != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.OriginKeepaliveTimeout)).withName("OriginKeepaliveTimeout");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_DefaultCacheBehavior = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DefaultCacheBehavior");
    if (input.TargetOriginId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.TargetOriginId).withName("TargetOriginId");
        bodyNode.addChildNode(node);
    }
    if (input.TrustedSigners != null) {
        const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
        bodyNode.addChildNode(node);
    }
    if (input.TrustedKeyGroups != null) {
        const node = se_TrustedKeyGroups(input.TrustedKeyGroups, context).withName("TrustedKeyGroups");
        bodyNode.addChildNode(node);
    }
    if (input.ViewerProtocolPolicy != null) {
        const node = xml_builder_1.XmlNode.of("ViewerProtocolPolicy", input.ViewerProtocolPolicy).withName("ViewerProtocolPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.AllowedMethods != null) {
        const node = se_AllowedMethods(input.AllowedMethods, context).withName("AllowedMethods");
        bodyNode.addChildNode(node);
    }
    if (input.SmoothStreaming != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.SmoothStreaming)).withName("SmoothStreaming");
        bodyNode.addChildNode(node);
    }
    if (input.Compress != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Compress)).withName("Compress");
        bodyNode.addChildNode(node);
    }
    if (input.LambdaFunctionAssociations != null) {
        const node = se_LambdaFunctionAssociations(input.LambdaFunctionAssociations, context).withName("LambdaFunctionAssociations");
        bodyNode.addChildNode(node);
    }
    if (input.FunctionAssociations != null) {
        const node = se_FunctionAssociations(input.FunctionAssociations, context).withName("FunctionAssociations");
        bodyNode.addChildNode(node);
    }
    if (input.FieldLevelEncryptionId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.FieldLevelEncryptionId).withName("FieldLevelEncryptionId");
        bodyNode.addChildNode(node);
    }
    if (input.RealtimeLogConfigArn != null) {
        const node = xml_builder_1.XmlNode.of("string", input.RealtimeLogConfigArn).withName("RealtimeLogConfigArn");
        bodyNode.addChildNode(node);
    }
    if (input.CachePolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CachePolicyId).withName("CachePolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.OriginRequestPolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginRequestPolicyId).withName("OriginRequestPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.ResponseHeadersPolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ResponseHeadersPolicyId).withName("ResponseHeadersPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.ForwardedValues != null) {
        const node = se_ForwardedValues(input.ForwardedValues, context).withName("ForwardedValues");
        bodyNode.addChildNode(node);
    }
    if (input.MinTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MinTTL)).withName("MinTTL");
        bodyNode.addChildNode(node);
    }
    if (input.DefaultTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.DefaultTTL)).withName("DefaultTTL");
        bodyNode.addChildNode(node);
    }
    if (input.MaxTTL != null) {
        const node = xml_builder_1.XmlNode.of("long", String(input.MaxTTL)).withName("MaxTTL");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_DistributionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DistributionConfig");
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Aliases != null) {
        const node = se_Aliases(input.Aliases, context).withName("Aliases");
        bodyNode.addChildNode(node);
    }
    if (input.DefaultRootObject != null) {
        const node = xml_builder_1.XmlNode.of("string", input.DefaultRootObject).withName("DefaultRootObject");
        bodyNode.addChildNode(node);
    }
    if (input.Origins != null) {
        const node = se_Origins(input.Origins, context).withName("Origins");
        bodyNode.addChildNode(node);
    }
    if (input.OriginGroups != null) {
        const node = se_OriginGroups(input.OriginGroups, context).withName("OriginGroups");
        bodyNode.addChildNode(node);
    }
    if (input.DefaultCacheBehavior != null) {
        const node = se_DefaultCacheBehavior(input.DefaultCacheBehavior, context).withName("DefaultCacheBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.CacheBehaviors != null) {
        const node = se_CacheBehaviors(input.CacheBehaviors, context).withName("CacheBehaviors");
        bodyNode.addChildNode(node);
    }
    if (input.CustomErrorResponses != null) {
        const node = se_CustomErrorResponses(input.CustomErrorResponses, context).withName("CustomErrorResponses");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("CommentType", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Logging != null) {
        const node = se_LoggingConfig(input.Logging, context).withName("Logging");
        bodyNode.addChildNode(node);
    }
    if (input.PriceClass != null) {
        const node = xml_builder_1.XmlNode.of("PriceClass", input.PriceClass).withName("PriceClass");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.ViewerCertificate != null) {
        const node = se_ViewerCertificate(input.ViewerCertificate, context).withName("ViewerCertificate");
        bodyNode.addChildNode(node);
    }
    if (input.Restrictions != null) {
        const node = se_Restrictions(input.Restrictions, context).withName("Restrictions");
        bodyNode.addChildNode(node);
    }
    if (input.WebACLId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.WebACLId).withName("WebACLId");
        bodyNode.addChildNode(node);
    }
    if (input.HttpVersion != null) {
        const node = xml_builder_1.XmlNode.of("HttpVersion", input.HttpVersion).withName("HttpVersion");
        bodyNode.addChildNode(node);
    }
    if (input.IsIPV6Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.IsIPV6Enabled)).withName("IsIPV6Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.ContinuousDeploymentPolicyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ContinuousDeploymentPolicyId).withName("ContinuousDeploymentPolicyId");
        bodyNode.addChildNode(node);
    }
    if (input.Staging != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Staging)).withName("Staging");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_DistributionConfigWithTags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DistributionConfigWithTags");
    if (input.DistributionConfig != null) {
        const node = se_DistributionConfig(input.DistributionConfig, context).withName("DistributionConfig");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const node = se_Tags(input.Tags, context).withName("Tags");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_EncryptionEntities = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionEntities");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_EncryptionEntityList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_EncryptionEntity = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionEntity");
    if (input.PublicKeyId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.PublicKeyId).withName("PublicKeyId");
        bodyNode.addChildNode(node);
    }
    if (input.ProviderId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ProviderId).withName("ProviderId");
        bodyNode.addChildNode(node);
    }
    if (input.FieldPatterns != null) {
        const node = se_FieldPatterns(input.FieldPatterns, context).withName("FieldPatterns");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_EncryptionEntityList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_EncryptionEntity(entry, context);
        return node.withName("EncryptionEntity");
    });
};
const se_EndPoint = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EndPoint");
    if (input.StreamType != null) {
        const node = xml_builder_1.XmlNode.of("string", input.StreamType).withName("StreamType");
        bodyNode.addChildNode(node);
    }
    if (input.KinesisStreamConfig != null) {
        const node = se_KinesisStreamConfig(input.KinesisStreamConfig, context).withName("KinesisStreamConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_EndPointList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_EndPoint(entry, context);
        return node.withName("member");
    });
};
const se_FieldLevelEncryptionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionConfig");
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.QueryArgProfileConfig != null) {
        const node = se_QueryArgProfileConfig(input.QueryArgProfileConfig, context).withName("QueryArgProfileConfig");
        bodyNode.addChildNode(node);
    }
    if (input.ContentTypeProfileConfig != null) {
        const node = se_ContentTypeProfileConfig(input.ContentTypeProfileConfig, context).withName("ContentTypeProfileConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_FieldLevelEncryptionProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldLevelEncryptionProfileConfig");
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.EncryptionEntities != null) {
        const node = se_EncryptionEntities(input.EncryptionEntities, context).withName("EncryptionEntities");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_FieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Field");
    });
};
const se_FieldPatternList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("FieldPattern");
    });
};
const se_FieldPatterns = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FieldPatterns");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_FieldPatternList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ForwardedValues = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ForwardedValues");
    if (input.QueryString != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.QueryString)).withName("QueryString");
        bodyNode.addChildNode(node);
    }
    if (input.Cookies != null) {
        const node = se_CookiePreference(input.Cookies, context).withName("Cookies");
        bodyNode.addChildNode(node);
    }
    if (input.Headers != null) {
        const node = se_Headers(input.Headers, context).withName("Headers");
        bodyNode.addChildNode(node);
    }
    if (input.QueryStringCacheKeys != null) {
        const node = se_QueryStringCacheKeys(input.QueryStringCacheKeys, context).withName("QueryStringCacheKeys");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_FunctionAssociation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FunctionAssociation");
    if (input.FunctionARN != null) {
        const node = xml_builder_1.XmlNode.of("FunctionARN", input.FunctionARN).withName("FunctionARN");
        bodyNode.addChildNode(node);
    }
    if (input.EventType != null) {
        const node = xml_builder_1.XmlNode.of("EventType", input.EventType).withName("EventType");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_FunctionAssociationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_FunctionAssociation(entry, context);
        return node.withName("FunctionAssociation");
    });
};
const se_FunctionAssociations = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FunctionAssociations");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_FunctionAssociationList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_FunctionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FunctionConfig");
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Runtime != null) {
        const node = xml_builder_1.XmlNode.of("FunctionRuntime", input.Runtime).withName("Runtime");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_GeoRestriction = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GeoRestriction");
    if (input.RestrictionType != null) {
        const node = xml_builder_1.XmlNode.of("GeoRestrictionType", input.RestrictionType).withName("RestrictionType");
        bodyNode.addChildNode(node);
    }
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_LocationList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_HeaderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Name");
    });
};
const se_Headers = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Headers");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_HeaderList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_InvalidationBatch = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InvalidationBatch");
    if (input.Paths != null) {
        const node = se_Paths(input.Paths, context).withName("Paths");
        bodyNode.addChildNode(node);
    }
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_KeyGroupConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("KeyGroupConfig");
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_PublicKeyIdList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_KinesisStreamConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("KinesisStreamConfig");
    if (input.RoleARN != null) {
        const node = xml_builder_1.XmlNode.of("string", input.RoleARN).withName("RoleARN");
        bodyNode.addChildNode(node);
    }
    if (input.StreamARN != null) {
        const node = xml_builder_1.XmlNode.of("string", input.StreamARN).withName("StreamARN");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_LambdaFunctionAssociation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociation");
    if (input.LambdaFunctionARN != null) {
        const node = xml_builder_1.XmlNode.of("LambdaFunctionARN", input.LambdaFunctionARN).withName("LambdaFunctionARN");
        bodyNode.addChildNode(node);
    }
    if (input.EventType != null) {
        const node = xml_builder_1.XmlNode.of("EventType", input.EventType).withName("EventType");
        bodyNode.addChildNode(node);
    }
    if (input.IncludeBody != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.IncludeBody)).withName("IncludeBody");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_LambdaFunctionAssociationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_LambdaFunctionAssociation(entry, context);
        return node.withName("LambdaFunctionAssociation");
    });
};
const se_LambdaFunctionAssociations = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionAssociations");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_LambdaFunctionAssociationList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_LocationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Location");
    });
};
const se_LoggingConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LoggingConfig");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.IncludeCookies != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.IncludeCookies)).withName("IncludeCookies");
        bodyNode.addChildNode(node);
    }
    if (input.Bucket != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Bucket).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_MethodsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("Method", entry);
        return node.withName("Method");
    });
};
const se_MonitoringSubscription = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MonitoringSubscription");
    if (input.RealtimeMetricsSubscriptionConfig != null) {
        const node = se_RealtimeMetricsSubscriptionConfig(input.RealtimeMetricsSubscriptionConfig, context).withName("RealtimeMetricsSubscriptionConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_Origin = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Origin");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.DomainName != null) {
        const node = xml_builder_1.XmlNode.of("string", input.DomainName).withName("DomainName");
        bodyNode.addChildNode(node);
    }
    if (input.OriginPath != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginPath).withName("OriginPath");
        bodyNode.addChildNode(node);
    }
    if (input.CustomHeaders != null) {
        const node = se_CustomHeaders(input.CustomHeaders, context).withName("CustomHeaders");
        bodyNode.addChildNode(node);
    }
    if (input.S3OriginConfig != null) {
        const node = se_S3OriginConfig(input.S3OriginConfig, context).withName("S3OriginConfig");
        bodyNode.addChildNode(node);
    }
    if (input.CustomOriginConfig != null) {
        const node = se_CustomOriginConfig(input.CustomOriginConfig, context).withName("CustomOriginConfig");
        bodyNode.addChildNode(node);
    }
    if (input.ConnectionAttempts != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.ConnectionAttempts)).withName("ConnectionAttempts");
        bodyNode.addChildNode(node);
    }
    if (input.ConnectionTimeout != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.ConnectionTimeout)).withName("ConnectionTimeout");
        bodyNode.addChildNode(node);
    }
    if (input.OriginShield != null) {
        const node = se_OriginShield(input.OriginShield, context).withName("OriginShield");
        bodyNode.addChildNode(node);
    }
    if (input.OriginAccessControlId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginAccessControlId).withName("OriginAccessControlId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginAccessControlConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginAccessControlConfig");
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Description != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Description).withName("Description");
        bodyNode.addChildNode(node);
    }
    if (input.SigningProtocol != null) {
        const node = xml_builder_1.XmlNode.of("OriginAccessControlSigningProtocols", input.SigningProtocol).withName("SigningProtocol");
        bodyNode.addChildNode(node);
    }
    if (input.SigningBehavior != null) {
        const node = xml_builder_1.XmlNode.of("OriginAccessControlSigningBehaviors", input.SigningBehavior).withName("SigningBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.OriginAccessControlOriginType != null) {
        const node = xml_builder_1.XmlNode
            .of("OriginAccessControlOriginTypes", input.OriginAccessControlOriginType)
            .withName("OriginAccessControlOriginType");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginCustomHeader = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginCustomHeader");
    if (input.HeaderName != null) {
        const node = xml_builder_1.XmlNode.of("string", input.HeaderName).withName("HeaderName");
        bodyNode.addChildNode(node);
    }
    if (input.HeaderValue != null) {
        const node = xml_builder_1.XmlNode.of("sensitiveStringType", input.HeaderValue).withName("HeaderValue");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginCustomHeadersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_OriginCustomHeader(entry, context);
        return node.withName("OriginCustomHeader");
    });
};
const se_OriginGroup = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroup");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.FailoverCriteria != null) {
        const node = se_OriginGroupFailoverCriteria(input.FailoverCriteria, context).withName("FailoverCriteria");
        bodyNode.addChildNode(node);
    }
    if (input.Members != null) {
        const node = se_OriginGroupMembers(input.Members, context).withName("Members");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginGroupFailoverCriteria = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupFailoverCriteria");
    if (input.StatusCodes != null) {
        const node = se_StatusCodes(input.StatusCodes, context).withName("StatusCodes");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_OriginGroup(entry, context);
        return node.withName("OriginGroup");
    });
};
const se_OriginGroupMember = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupMember");
    if (input.OriginId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginId).withName("OriginId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginGroupMemberList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_OriginGroupMember(entry, context);
        return node.withName("OriginGroupMember");
    });
};
const se_OriginGroupMembers = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroupMembers");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_OriginGroupMemberList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_OriginGroups = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginGroups");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_OriginGroupList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_OriginList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_Origin(entry, context);
        return node.withName("Origin");
    });
};
const se_OriginRequestPolicyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyConfig");
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.HeadersConfig != null) {
        const node = se_OriginRequestPolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
        bodyNode.addChildNode(node);
    }
    if (input.CookiesConfig != null) {
        const node = se_OriginRequestPolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
        bodyNode.addChildNode(node);
    }
    if (input.QueryStringsConfig != null) {
        const node = se_OriginRequestPolicyQueryStringsConfig(input.QueryStringsConfig, context).withName("QueryStringsConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginRequestPolicyCookiesConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyCookiesConfig");
    if (input.CookieBehavior != null) {
        const node = xml_builder_1.XmlNode.of("OriginRequestPolicyCookieBehavior", input.CookieBehavior).withName("CookieBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.Cookies != null) {
        const node = se_CookieNames(input.Cookies, context).withName("Cookies");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginRequestPolicyHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyHeadersConfig");
    if (input.HeaderBehavior != null) {
        const node = xml_builder_1.XmlNode.of("OriginRequestPolicyHeaderBehavior", input.HeaderBehavior).withName("HeaderBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.Headers != null) {
        const node = se_Headers(input.Headers, context).withName("Headers");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginRequestPolicyQueryStringsConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginRequestPolicyQueryStringsConfig");
    if (input.QueryStringBehavior != null) {
        const node = xml_builder_1.XmlNode
            .of("OriginRequestPolicyQueryStringBehavior", input.QueryStringBehavior)
            .withName("QueryStringBehavior");
        bodyNode.addChildNode(node);
    }
    if (input.QueryStrings != null) {
        const node = se_QueryStringNames(input.QueryStrings, context).withName("QueryStrings");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_Origins = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Origins");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_OriginList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_OriginShield = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginShield");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.OriginShieldRegion != null) {
        const node = xml_builder_1.XmlNode.of("OriginShieldRegion", input.OriginShieldRegion).withName("OriginShieldRegion");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_OriginSslProtocols = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OriginSslProtocols");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_SslProtocolsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ParametersInCacheKeyAndForwardedToOrigin = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ParametersInCacheKeyAndForwardedToOrigin");
    if (input.EnableAcceptEncodingGzip != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.EnableAcceptEncodingGzip)).withName("EnableAcceptEncodingGzip");
        bodyNode.addChildNode(node);
    }
    if (input.EnableAcceptEncodingBrotli != null) {
        const node = xml_builder_1.XmlNode
            .of("boolean", String(input.EnableAcceptEncodingBrotli))
            .withName("EnableAcceptEncodingBrotli");
        bodyNode.addChildNode(node);
    }
    if (input.HeadersConfig != null) {
        const node = se_CachePolicyHeadersConfig(input.HeadersConfig, context).withName("HeadersConfig");
        bodyNode.addChildNode(node);
    }
    if (input.CookiesConfig != null) {
        const node = se_CachePolicyCookiesConfig(input.CookiesConfig, context).withName("CookiesConfig");
        bodyNode.addChildNode(node);
    }
    if (input.QueryStringsConfig != null) {
        const node = se_CachePolicyQueryStringsConfig(input.QueryStringsConfig, context).withName("QueryStringsConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_PathList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Path");
    });
};
const se_Paths = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Paths");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_PathList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_PublicKeyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PublicKeyConfig");
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.EncodedKey != null) {
        const node = xml_builder_1.XmlNode.of("string", input.EncodedKey).withName("EncodedKey");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_PublicKeyIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("PublicKey");
    });
};
const se_QueryArgProfile = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfile");
    if (input.QueryArg != null) {
        const node = xml_builder_1.XmlNode.of("string", input.QueryArg).withName("QueryArg");
        bodyNode.addChildNode(node);
    }
    if (input.ProfileId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ProfileId).withName("ProfileId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_QueryArgProfileConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfileConfig");
    if (input.ForwardWhenQueryArgProfileIsUnknown != null) {
        const node = xml_builder_1.XmlNode
            .of("boolean", String(input.ForwardWhenQueryArgProfileIsUnknown))
            .withName("ForwardWhenQueryArgProfileIsUnknown");
        bodyNode.addChildNode(node);
    }
    if (input.QueryArgProfiles != null) {
        const node = se_QueryArgProfiles(input.QueryArgProfiles, context).withName("QueryArgProfiles");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_QueryArgProfileList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_QueryArgProfile(entry, context);
        return node.withName("QueryArgProfile");
    });
};
const se_QueryArgProfiles = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryArgProfiles");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_QueryArgProfileList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_QueryStringCacheKeys = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryStringCacheKeys");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_QueryStringCacheKeysList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_QueryStringCacheKeysList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Name");
    });
};
const se_QueryStringNames = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueryStringNames");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_QueryStringNamesList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_QueryStringNamesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("Name");
    });
};
const se_RealtimeMetricsSubscriptionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RealtimeMetricsSubscriptionConfig");
    if (input.RealtimeMetricsSubscriptionStatus != null) {
        const node = xml_builder_1.XmlNode
            .of("RealtimeMetricsSubscriptionStatus", input.RealtimeMetricsSubscriptionStatus)
            .withName("RealtimeMetricsSubscriptionStatus");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyAccessControlAllowHeaders = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyAccessControlAllowHeaders");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AccessControlAllowHeadersList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyAccessControlAllowMethods = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyAccessControlAllowMethods");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AccessControlAllowMethodsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyAccessControlAllowOrigins = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyAccessControlAllowOrigins");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AccessControlAllowOriginsList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyAccessControlExposeHeaders = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyAccessControlExposeHeaders");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AccessControlExposeHeadersList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyConfig");
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.CorsConfig != null) {
        const node = se_ResponseHeadersPolicyCorsConfig(input.CorsConfig, context).withName("CorsConfig");
        bodyNode.addChildNode(node);
    }
    if (input.SecurityHeadersConfig != null) {
        const node = se_ResponseHeadersPolicySecurityHeadersConfig(input.SecurityHeadersConfig, context).withName("SecurityHeadersConfig");
        bodyNode.addChildNode(node);
    }
    if (input.ServerTimingHeadersConfig != null) {
        const node = se_ResponseHeadersPolicyServerTimingHeadersConfig(input.ServerTimingHeadersConfig, context).withName("ServerTimingHeadersConfig");
        bodyNode.addChildNode(node);
    }
    if (input.CustomHeadersConfig != null) {
        const node = se_ResponseHeadersPolicyCustomHeadersConfig(input.CustomHeadersConfig, context).withName("CustomHeadersConfig");
        bodyNode.addChildNode(node);
    }
    if (input.RemoveHeadersConfig != null) {
        const node = se_ResponseHeadersPolicyRemoveHeadersConfig(input.RemoveHeadersConfig, context).withName("RemoveHeadersConfig");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyContentSecurityPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyContentSecurityPolicy");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    if (input.ContentSecurityPolicy != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ContentSecurityPolicy).withName("ContentSecurityPolicy");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyContentTypeOptions = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyContentTypeOptions");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyCorsConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyCorsConfig");
    if (input.AccessControlAllowOrigins != null) {
        const node = se_ResponseHeadersPolicyAccessControlAllowOrigins(input.AccessControlAllowOrigins, context).withName("AccessControlAllowOrigins");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlAllowHeaders != null) {
        const node = se_ResponseHeadersPolicyAccessControlAllowHeaders(input.AccessControlAllowHeaders, context).withName("AccessControlAllowHeaders");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlAllowMethods != null) {
        const node = se_ResponseHeadersPolicyAccessControlAllowMethods(input.AccessControlAllowMethods, context).withName("AccessControlAllowMethods");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlAllowCredentials != null) {
        const node = xml_builder_1.XmlNode
            .of("boolean", String(input.AccessControlAllowCredentials))
            .withName("AccessControlAllowCredentials");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlExposeHeaders != null) {
        const node = se_ResponseHeadersPolicyAccessControlExposeHeaders(input.AccessControlExposeHeaders, context).withName("AccessControlExposeHeaders");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlMaxAgeSec != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.AccessControlMaxAgeSec)).withName("AccessControlMaxAgeSec");
        bodyNode.addChildNode(node);
    }
    if (input.OriginOverride != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.OriginOverride)).withName("OriginOverride");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyCustomHeader = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyCustomHeader");
    if (input.Header != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Header).withName("Header");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyCustomHeaderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_ResponseHeadersPolicyCustomHeader(entry, context);
        return node.withName("ResponseHeadersPolicyCustomHeader");
    });
};
const se_ResponseHeadersPolicyCustomHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyCustomHeadersConfig");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_ResponseHeadersPolicyCustomHeaderList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyFrameOptions = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyFrameOptions");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    if (input.FrameOption != null) {
        const node = xml_builder_1.XmlNode.of("FrameOptionsList", input.FrameOption).withName("FrameOption");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyReferrerPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyReferrerPolicy");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    if (input.ReferrerPolicy != null) {
        const node = xml_builder_1.XmlNode.of("ReferrerPolicyList", input.ReferrerPolicy).withName("ReferrerPolicy");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyRemoveHeader = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyRemoveHeader");
    if (input.Header != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Header).withName("Header");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyRemoveHeaderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_ResponseHeadersPolicyRemoveHeader(entry, context);
        return node.withName("ResponseHeadersPolicyRemoveHeader");
    });
};
const se_ResponseHeadersPolicyRemoveHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyRemoveHeadersConfig");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_ResponseHeadersPolicyRemoveHeaderList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicySecurityHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicySecurityHeadersConfig");
    if (input.XSSProtection != null) {
        const node = se_ResponseHeadersPolicyXSSProtection(input.XSSProtection, context).withName("XSSProtection");
        bodyNode.addChildNode(node);
    }
    if (input.FrameOptions != null) {
        const node = se_ResponseHeadersPolicyFrameOptions(input.FrameOptions, context).withName("FrameOptions");
        bodyNode.addChildNode(node);
    }
    if (input.ReferrerPolicy != null) {
        const node = se_ResponseHeadersPolicyReferrerPolicy(input.ReferrerPolicy, context).withName("ReferrerPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.ContentSecurityPolicy != null) {
        const node = se_ResponseHeadersPolicyContentSecurityPolicy(input.ContentSecurityPolicy, context).withName("ContentSecurityPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.ContentTypeOptions != null) {
        const node = se_ResponseHeadersPolicyContentTypeOptions(input.ContentTypeOptions, context).withName("ContentTypeOptions");
        bodyNode.addChildNode(node);
    }
    if (input.StrictTransportSecurity != null) {
        const node = se_ResponseHeadersPolicyStrictTransportSecurity(input.StrictTransportSecurity, context).withName("StrictTransportSecurity");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyServerTimingHeadersConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyServerTimingHeadersConfig");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.SamplingRate != null) {
        const node = xml_builder_1.XmlNode.of("SamplingRate", String(input.SamplingRate)).withName("SamplingRate");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyStrictTransportSecurity = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyStrictTransportSecurity");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    if (input.IncludeSubdomains != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.IncludeSubdomains)).withName("IncludeSubdomains");
        bodyNode.addChildNode(node);
    }
    if (input.Preload != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Preload)).withName("Preload");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlMaxAgeSec != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.AccessControlMaxAgeSec)).withName("AccessControlMaxAgeSec");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_ResponseHeadersPolicyXSSProtection = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ResponseHeadersPolicyXSSProtection");
    if (input.Override != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Override)).withName("Override");
        bodyNode.addChildNode(node);
    }
    if (input.Protection != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Protection)).withName("Protection");
        bodyNode.addChildNode(node);
    }
    if (input.ModeBlock != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.ModeBlock)).withName("ModeBlock");
        bodyNode.addChildNode(node);
    }
    if (input.ReportUri != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ReportUri).withName("ReportUri");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_Restrictions = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Restrictions");
    if (input.GeoRestriction != null) {
        const node = se_GeoRestriction(input.GeoRestriction, context).withName("GeoRestriction");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_S3Origin = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Origin");
    if (input.DomainName != null) {
        const node = xml_builder_1.XmlNode.of("string", input.DomainName).withName("DomainName");
        bodyNode.addChildNode(node);
    }
    if (input.OriginAccessIdentity != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginAccessIdentity).withName("OriginAccessIdentity");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_S3OriginConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3OriginConfig");
    if (input.OriginAccessIdentity != null) {
        const node = xml_builder_1.XmlNode.of("string", input.OriginAccessIdentity).withName("OriginAccessIdentity");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_SessionStickinessConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SessionStickinessConfig");
    if (input.IdleTTL != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.IdleTTL)).withName("IdleTTL");
        bodyNode.addChildNode(node);
    }
    if (input.MaximumTTL != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.MaximumTTL)).withName("MaximumTTL");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_SslProtocolsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("SslProtocol", entry);
        return node.withName("SslProtocol");
    });
};
const se_StagingDistributionDnsNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("DnsName");
    });
};
const se_StagingDistributionDnsNames = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StagingDistributionDnsNames");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_StagingDistributionDnsNameList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_StatusCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("integer", String(entry));
        return node.withName("StatusCode");
    });
};
const se_StatusCodes = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StatusCodes");
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_StatusCodeList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_StreamingDistributionConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfig");
    if (input.CallerReference != null) {
        const node = xml_builder_1.XmlNode.of("string", input.CallerReference).withName("CallerReference");
        bodyNode.addChildNode(node);
    }
    if (input.S3Origin != null) {
        const node = se_S3Origin(input.S3Origin, context).withName("S3Origin");
        bodyNode.addChildNode(node);
    }
    if (input.Aliases != null) {
        const node = se_Aliases(input.Aliases, context).withName("Aliases");
        bodyNode.addChildNode(node);
    }
    if (input.Comment != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Comment).withName("Comment");
        bodyNode.addChildNode(node);
    }
    if (input.Logging != null) {
        const node = se_StreamingLoggingConfig(input.Logging, context).withName("Logging");
        bodyNode.addChildNode(node);
    }
    if (input.TrustedSigners != null) {
        const node = se_TrustedSigners(input.TrustedSigners, context).withName("TrustedSigners");
        bodyNode.addChildNode(node);
    }
    if (input.PriceClass != null) {
        const node = xml_builder_1.XmlNode.of("PriceClass", input.PriceClass).withName("PriceClass");
        bodyNode.addChildNode(node);
    }
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_StreamingDistributionConfigWithTags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingDistributionConfigWithTags");
    if (input.StreamingDistributionConfig != null) {
        const node = se_StreamingDistributionConfig(input.StreamingDistributionConfig, context).withName("StreamingDistributionConfig");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const node = se_Tags(input.Tags, context).withName("Tags");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_StreamingLoggingConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StreamingLoggingConfig");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.Bucket != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Bucket).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_Tag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tag");
    if (input.Key != null) {
        const node = xml_builder_1.XmlNode.of("TagKey", input.Key).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("TagValue", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("TagKey", entry);
        return node.withName("Key");
    });
};
const se_TagKeys = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TagKeys");
    if (input.Items != null) {
        const nodes = se_TagKeyList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = se_Tag(entry, context);
        return node.withName("Tag");
    });
};
const se_Tags = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tags");
    if (input.Items != null) {
        const nodes = se_TagList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_TrafficConfig = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TrafficConfig");
    if (input.SingleWeightConfig != null) {
        const node = se_ContinuousDeploymentSingleWeightConfig(input.SingleWeightConfig, context).withName("SingleWeightConfig");
        bodyNode.addChildNode(node);
    }
    if (input.SingleHeaderConfig != null) {
        const node = se_ContinuousDeploymentSingleHeaderConfig(input.SingleHeaderConfig, context).withName("SingleHeaderConfig");
        bodyNode.addChildNode(node);
    }
    if (input.Type != null) {
        const node = xml_builder_1.XmlNode.of("ContinuousDeploymentPolicyType", input.Type).withName("Type");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const se_TrustedKeyGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("string", entry);
        return node.withName("KeyGroup");
    });
};
const se_TrustedKeyGroups = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TrustedKeyGroups");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_TrustedKeyGroupIdList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_TrustedSigners = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TrustedSigners");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("boolean", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    if (input.Quantity != null) {
        const node = xml_builder_1.XmlNode.of("integer", String(input.Quantity)).withName("Quantity");
        bodyNode.addChildNode(node);
    }
    if (input.Items != null) {
        const nodes = se_AwsAccountNumberList(input.Items, context);
        const containerNode = new xml_builder_1.XmlNode("Items");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const se_ViewerCertificate = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ViewerCertificate");
    if (input.CloudFrontDefaultCertificate != null) {
        const node = xml_builder_1.XmlNode
            .of("boolean", String(input.CloudFrontDefaultCertificate))
            .withName("CloudFrontDefaultCertificate");
        bodyNode.addChildNode(node);
    }
    if (input.IAMCertificateId != null) {
        const node = xml_builder_1.XmlNode.of("string", input.IAMCertificateId).withName("IAMCertificateId");
        bodyNode.addChildNode(node);
    }
    if (input.ACMCertificateArn != null) {
        const node = xml_builder_1.XmlNode.of("string", input.ACMCertificateArn).withName("ACMCertificateArn");
        bodyNode.addChildNode(node);
    }
    if (input.SSLSupportMethod != null) {
        const node = xml_builder_1.XmlNode.of("SSLSupportMethod", input.SSLSupportMethod).withName("SSLSupportMethod");
        bodyNode.addChildNode(node);
    }
    if (input.MinimumProtocolVersion != null) {
        const node = xml_builder_1.XmlNode
            .of("MinimumProtocolVersion", input.MinimumProtocolVersion)
            .withName("MinimumProtocolVersion");
        bodyNode.addChildNode(node);
    }
    if (input.Certificate != null) {
        const node = xml_builder_1.XmlNode.of("string", input.Certificate).withName("Certificate");
        bodyNode.addChildNode(node);
    }
    if (input.CertificateSource != null) {
        const node = xml_builder_1.XmlNode.of("CertificateSource", input.CertificateSource).withName("CertificateSource");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const de_AccessControlAllowHeadersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_AccessControlAllowMethodsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_AccessControlAllowOriginsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_AccessControlExposeHeadersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_ActiveTrustedKeyGroups = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
        contents.Items = de_KGKeyPairIdsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["KeyGroup"]), context);
    }
    return contents;
};
const de_ActiveTrustedSigners = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Signer"] !== undefined) {
        contents.Items = de_SignerList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Signer"]), context);
    }
    return contents;
};
const de_Aliases = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["CNAME"] !== undefined) {
        contents.Items = de_AliasList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["CNAME"]), context);
    }
    return contents;
};
const de_AliasICPRecordal = (output, context) => {
    const contents = {};
    if (output["CNAME"] !== undefined) {
        contents.CNAME = (0, smithy_client_1.expectString)(output["CNAME"]);
    }
    if (output["ICPRecordalStatus"] !== undefined) {
        contents.ICPRecordalStatus = (0, smithy_client_1.expectString)(output["ICPRecordalStatus"]);
    }
    return contents;
};
const de_AliasICPRecordals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AliasICPRecordal(entry, context);
    });
};
const de_AliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_AllowedMethods = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
        contents.Items = de_MethodsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Method"]), context);
    }
    if (output["CachedMethods"] !== undefined) {
        contents.CachedMethods = de_CachedMethods(output["CachedMethods"], context);
    }
    return contents;
};
const de_AwsAccountNumberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_CacheBehavior = (output, context) => {
    const contents = {};
    if (output["PathPattern"] !== undefined) {
        contents.PathPattern = (0, smithy_client_1.expectString)(output["PathPattern"]);
    }
    if (output["TargetOriginId"] !== undefined) {
        contents.TargetOriginId = (0, smithy_client_1.expectString)(output["TargetOriginId"]);
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
    }
    if (output["TrustedKeyGroups"] !== undefined) {
        contents.TrustedKeyGroups = de_TrustedKeyGroups(output["TrustedKeyGroups"], context);
    }
    if (output["ViewerProtocolPolicy"] !== undefined) {
        contents.ViewerProtocolPolicy = (0, smithy_client_1.expectString)(output["ViewerProtocolPolicy"]);
    }
    if (output["AllowedMethods"] !== undefined) {
        contents.AllowedMethods = de_AllowedMethods(output["AllowedMethods"], context);
    }
    if (output["SmoothStreaming"] !== undefined) {
        contents.SmoothStreaming = (0, smithy_client_1.parseBoolean)(output["SmoothStreaming"]);
    }
    if (output["Compress"] !== undefined) {
        contents.Compress = (0, smithy_client_1.parseBoolean)(output["Compress"]);
    }
    if (output["LambdaFunctionAssociations"] !== undefined) {
        contents.LambdaFunctionAssociations = de_LambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
    }
    if (output["FunctionAssociations"] !== undefined) {
        contents.FunctionAssociations = de_FunctionAssociations(output["FunctionAssociations"], context);
    }
    if (output["FieldLevelEncryptionId"] !== undefined) {
        contents.FieldLevelEncryptionId = (0, smithy_client_1.expectString)(output["FieldLevelEncryptionId"]);
    }
    if (output["RealtimeLogConfigArn"] !== undefined) {
        contents.RealtimeLogConfigArn = (0, smithy_client_1.expectString)(output["RealtimeLogConfigArn"]);
    }
    if (output["CachePolicyId"] !== undefined) {
        contents.CachePolicyId = (0, smithy_client_1.expectString)(output["CachePolicyId"]);
    }
    if (output["OriginRequestPolicyId"] !== undefined) {
        contents.OriginRequestPolicyId = (0, smithy_client_1.expectString)(output["OriginRequestPolicyId"]);
    }
    if (output["ResponseHeadersPolicyId"] !== undefined) {
        contents.ResponseHeadersPolicyId = (0, smithy_client_1.expectString)(output["ResponseHeadersPolicyId"]);
    }
    if (output["ForwardedValues"] !== undefined) {
        contents.ForwardedValues = de_ForwardedValues(output["ForwardedValues"], context);
    }
    if (output["MinTTL"] !== undefined) {
        contents.MinTTL = (0, smithy_client_1.strictParseLong)(output["MinTTL"]);
    }
    if (output["DefaultTTL"] !== undefined) {
        contents.DefaultTTL = (0, smithy_client_1.strictParseLong)(output["DefaultTTL"]);
    }
    if (output["MaxTTL"] !== undefined) {
        contents.MaxTTL = (0, smithy_client_1.strictParseLong)(output["MaxTTL"]);
    }
    return contents;
};
const de_CacheBehaviorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CacheBehavior(entry, context);
    });
};
const de_CacheBehaviors = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["CacheBehavior"] !== undefined) {
        contents.Items = de_CacheBehaviorList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["CacheBehavior"]), context);
    }
    return contents;
};
const de_CachedMethods = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
        contents.Items = de_MethodsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Method"]), context);
    }
    return contents;
};
const de_CachePolicy = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["CachePolicyConfig"] !== undefined) {
        contents.CachePolicyConfig = de_CachePolicyConfig(output["CachePolicyConfig"], context);
    }
    return contents;
};
const de_CachePolicyConfig = (output, context) => {
    const contents = {};
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["DefaultTTL"] !== undefined) {
        contents.DefaultTTL = (0, smithy_client_1.strictParseLong)(output["DefaultTTL"]);
    }
    if (output["MaxTTL"] !== undefined) {
        contents.MaxTTL = (0, smithy_client_1.strictParseLong)(output["MaxTTL"]);
    }
    if (output["MinTTL"] !== undefined) {
        contents.MinTTL = (0, smithy_client_1.strictParseLong)(output["MinTTL"]);
    }
    if (output["ParametersInCacheKeyAndForwardedToOrigin"] !== undefined) {
        contents.ParametersInCacheKeyAndForwardedToOrigin = de_ParametersInCacheKeyAndForwardedToOrigin(output["ParametersInCacheKeyAndForwardedToOrigin"], context);
    }
    return contents;
};
const de_CachePolicyCookiesConfig = (output, context) => {
    const contents = {};
    if (output["CookieBehavior"] !== undefined) {
        contents.CookieBehavior = (0, smithy_client_1.expectString)(output["CookieBehavior"]);
    }
    if (output["Cookies"] !== undefined) {
        contents.Cookies = de_CookieNames(output["Cookies"], context);
    }
    return contents;
};
const de_CachePolicyHeadersConfig = (output, context) => {
    const contents = {};
    if (output["HeaderBehavior"] !== undefined) {
        contents.HeaderBehavior = (0, smithy_client_1.expectString)(output["HeaderBehavior"]);
    }
    if (output["Headers"] !== undefined) {
        contents.Headers = de_Headers(output["Headers"], context);
    }
    return contents;
};
const de_CachePolicyList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["CachePolicySummary"] !== undefined) {
        contents.Items = de_CachePolicySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["CachePolicySummary"]), context);
    }
    return contents;
};
const de_CachePolicyQueryStringsConfig = (output, context) => {
    const contents = {};
    if (output["QueryStringBehavior"] !== undefined) {
        contents.QueryStringBehavior = (0, smithy_client_1.expectString)(output["QueryStringBehavior"]);
    }
    if (output["QueryStrings"] !== undefined) {
        contents.QueryStrings = de_QueryStringNames(output["QueryStrings"], context);
    }
    return contents;
};
const de_CachePolicySummary = (output, context) => {
    const contents = {};
    if (output["Type"] !== undefined) {
        contents.Type = (0, smithy_client_1.expectString)(output["Type"]);
    }
    if (output["CachePolicy"] !== undefined) {
        contents.CachePolicy = de_CachePolicy(output["CachePolicy"], context);
    }
    return contents;
};
const de_CachePolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CachePolicySummary(entry, context);
    });
};
const de_CloudFrontOriginAccessIdentity = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["S3CanonicalUserId"] !== undefined) {
        contents.S3CanonicalUserId = (0, smithy_client_1.expectString)(output["S3CanonicalUserId"]);
    }
    if (output["CloudFrontOriginAccessIdentityConfig"] !== undefined) {
        contents.CloudFrontOriginAccessIdentityConfig = de_CloudFrontOriginAccessIdentityConfig(output["CloudFrontOriginAccessIdentityConfig"], context);
    }
    return contents;
};
const de_CloudFrontOriginAccessIdentityConfig = (output, context) => {
    const contents = {};
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_CloudFrontOriginAccessIdentityList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["CloudFrontOriginAccessIdentitySummary"] !== undefined) {
        contents.Items = de_CloudFrontOriginAccessIdentitySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["CloudFrontOriginAccessIdentitySummary"]), context);
    }
    return contents;
};
const de_CloudFrontOriginAccessIdentitySummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["S3CanonicalUserId"] !== undefined) {
        contents.S3CanonicalUserId = (0, smithy_client_1.expectString)(output["S3CanonicalUserId"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_CloudFrontOriginAccessIdentitySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CloudFrontOriginAccessIdentitySummary(entry, context);
    });
};
const de_ConflictingAlias = (output, context) => {
    const contents = {};
    if (output["Alias"] !== undefined) {
        contents.Alias = (0, smithy_client_1.expectString)(output["Alias"]);
    }
    if (output["DistributionId"] !== undefined) {
        contents.DistributionId = (0, smithy_client_1.expectString)(output["DistributionId"]);
    }
    if (output["AccountId"] !== undefined) {
        contents.AccountId = (0, smithy_client_1.expectString)(output["AccountId"]);
    }
    return contents;
};
const de_ConflictingAliases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ConflictingAlias(entry, context);
    });
};
const de_ConflictingAliasesList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ConflictingAlias"] !== undefined) {
        contents.Items = de_ConflictingAliases((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ConflictingAlias"]), context);
    }
    return contents;
};
const de_ContentTypeProfile = (output, context) => {
    const contents = {};
    if (output["Format"] !== undefined) {
        contents.Format = (0, smithy_client_1.expectString)(output["Format"]);
    }
    if (output["ProfileId"] !== undefined) {
        contents.ProfileId = (0, smithy_client_1.expectString)(output["ProfileId"]);
    }
    if (output["ContentType"] !== undefined) {
        contents.ContentType = (0, smithy_client_1.expectString)(output["ContentType"]);
    }
    return contents;
};
const de_ContentTypeProfileConfig = (output, context) => {
    const contents = {};
    if (output["ForwardWhenContentTypeIsUnknown"] !== undefined) {
        contents.ForwardWhenContentTypeIsUnknown = (0, smithy_client_1.parseBoolean)(output["ForwardWhenContentTypeIsUnknown"]);
    }
    if (output["ContentTypeProfiles"] !== undefined) {
        contents.ContentTypeProfiles = de_ContentTypeProfiles(output["ContentTypeProfiles"], context);
    }
    return contents;
};
const de_ContentTypeProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ContentTypeProfile(entry, context);
    });
};
const de_ContentTypeProfiles = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ContentTypeProfile"] !== undefined) {
        contents.Items = de_ContentTypeProfileList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ContentTypeProfile"]), context);
    }
    return contents;
};
const de_ContinuousDeploymentPolicy = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["ContinuousDeploymentPolicyConfig"] !== undefined) {
        contents.ContinuousDeploymentPolicyConfig = de_ContinuousDeploymentPolicyConfig(output["ContinuousDeploymentPolicyConfig"], context);
    }
    return contents;
};
const de_ContinuousDeploymentPolicyConfig = (output, context) => {
    const contents = {};
    if (output["StagingDistributionDnsNames"] !== undefined) {
        contents.StagingDistributionDnsNames = de_StagingDistributionDnsNames(output["StagingDistributionDnsNames"], context);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["TrafficConfig"] !== undefined) {
        contents.TrafficConfig = de_TrafficConfig(output["TrafficConfig"], context);
    }
    return contents;
};
const de_ContinuousDeploymentPolicyList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ContinuousDeploymentPolicySummary"] !== undefined) {
        contents.Items = de_ContinuousDeploymentPolicySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ContinuousDeploymentPolicySummary"]), context);
    }
    return contents;
};
const de_ContinuousDeploymentPolicySummary = (output, context) => {
    const contents = {};
    if (output["ContinuousDeploymentPolicy"] !== undefined) {
        contents.ContinuousDeploymentPolicy = de_ContinuousDeploymentPolicy(output["ContinuousDeploymentPolicy"], context);
    }
    return contents;
};
const de_ContinuousDeploymentPolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ContinuousDeploymentPolicySummary(entry, context);
    });
};
const de_ContinuousDeploymentSingleHeaderConfig = (output, context) => {
    const contents = {};
    if (output["Header"] !== undefined) {
        contents.Header = (0, smithy_client_1.expectString)(output["Header"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = (0, smithy_client_1.expectString)(output["Value"]);
    }
    return contents;
};
const de_ContinuousDeploymentSingleWeightConfig = (output, context) => {
    const contents = {};
    if (output["Weight"] !== undefined) {
        contents.Weight = (0, smithy_client_1.strictParseFloat)(output["Weight"]);
    }
    if (output["SessionStickinessConfig"] !== undefined) {
        contents.SessionStickinessConfig = de_SessionStickinessConfig(output["SessionStickinessConfig"], context);
    }
    return contents;
};
const de_CookieNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_CookieNames = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        contents.Items = de_CookieNameList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Name"]), context);
    }
    return contents;
};
const de_CookiePreference = (output, context) => {
    const contents = {};
    if (output["Forward"] !== undefined) {
        contents.Forward = (0, smithy_client_1.expectString)(output["Forward"]);
    }
    if (output["WhitelistedNames"] !== undefined) {
        contents.WhitelistedNames = de_CookieNames(output["WhitelistedNames"], context);
    }
    return contents;
};
const de_CustomErrorResponse = (output, context) => {
    const contents = {};
    if (output["ErrorCode"] !== undefined) {
        contents.ErrorCode = (0, smithy_client_1.strictParseInt32)(output["ErrorCode"]);
    }
    if (output["ResponsePagePath"] !== undefined) {
        contents.ResponsePagePath = (0, smithy_client_1.expectString)(output["ResponsePagePath"]);
    }
    if (output["ResponseCode"] !== undefined) {
        contents.ResponseCode = (0, smithy_client_1.expectString)(output["ResponseCode"]);
    }
    if (output["ErrorCachingMinTTL"] !== undefined) {
        contents.ErrorCachingMinTTL = (0, smithy_client_1.strictParseLong)(output["ErrorCachingMinTTL"]);
    }
    return contents;
};
const de_CustomErrorResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CustomErrorResponse(entry, context);
    });
};
const de_CustomErrorResponses = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["CustomErrorResponse"] !== undefined) {
        contents.Items = de_CustomErrorResponseList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["CustomErrorResponse"]), context);
    }
    return contents;
};
const de_CustomHeaders = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["OriginCustomHeader"] !== undefined) {
        contents.Items = de_OriginCustomHeadersList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["OriginCustomHeader"]), context);
    }
    return contents;
};
const de_CustomOriginConfig = (output, context) => {
    const contents = {};
    if (output["HTTPPort"] !== undefined) {
        contents.HTTPPort = (0, smithy_client_1.strictParseInt32)(output["HTTPPort"]);
    }
    if (output["HTTPSPort"] !== undefined) {
        contents.HTTPSPort = (0, smithy_client_1.strictParseInt32)(output["HTTPSPort"]);
    }
    if (output["OriginProtocolPolicy"] !== undefined) {
        contents.OriginProtocolPolicy = (0, smithy_client_1.expectString)(output["OriginProtocolPolicy"]);
    }
    if (output["OriginSslProtocols"] !== undefined) {
        contents.OriginSslProtocols = de_OriginSslProtocols(output["OriginSslProtocols"], context);
    }
    if (output["OriginReadTimeout"] !== undefined) {
        contents.OriginReadTimeout = (0, smithy_client_1.strictParseInt32)(output["OriginReadTimeout"]);
    }
    if (output["OriginKeepaliveTimeout"] !== undefined) {
        contents.OriginKeepaliveTimeout = (0, smithy_client_1.strictParseInt32)(output["OriginKeepaliveTimeout"]);
    }
    return contents;
};
const de_DefaultCacheBehavior = (output, context) => {
    const contents = {};
    if (output["TargetOriginId"] !== undefined) {
        contents.TargetOriginId = (0, smithy_client_1.expectString)(output["TargetOriginId"]);
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
    }
    if (output["TrustedKeyGroups"] !== undefined) {
        contents.TrustedKeyGroups = de_TrustedKeyGroups(output["TrustedKeyGroups"], context);
    }
    if (output["ViewerProtocolPolicy"] !== undefined) {
        contents.ViewerProtocolPolicy = (0, smithy_client_1.expectString)(output["ViewerProtocolPolicy"]);
    }
    if (output["AllowedMethods"] !== undefined) {
        contents.AllowedMethods = de_AllowedMethods(output["AllowedMethods"], context);
    }
    if (output["SmoothStreaming"] !== undefined) {
        contents.SmoothStreaming = (0, smithy_client_1.parseBoolean)(output["SmoothStreaming"]);
    }
    if (output["Compress"] !== undefined) {
        contents.Compress = (0, smithy_client_1.parseBoolean)(output["Compress"]);
    }
    if (output["LambdaFunctionAssociations"] !== undefined) {
        contents.LambdaFunctionAssociations = de_LambdaFunctionAssociations(output["LambdaFunctionAssociations"], context);
    }
    if (output["FunctionAssociations"] !== undefined) {
        contents.FunctionAssociations = de_FunctionAssociations(output["FunctionAssociations"], context);
    }
    if (output["FieldLevelEncryptionId"] !== undefined) {
        contents.FieldLevelEncryptionId = (0, smithy_client_1.expectString)(output["FieldLevelEncryptionId"]);
    }
    if (output["RealtimeLogConfigArn"] !== undefined) {
        contents.RealtimeLogConfigArn = (0, smithy_client_1.expectString)(output["RealtimeLogConfigArn"]);
    }
    if (output["CachePolicyId"] !== undefined) {
        contents.CachePolicyId = (0, smithy_client_1.expectString)(output["CachePolicyId"]);
    }
    if (output["OriginRequestPolicyId"] !== undefined) {
        contents.OriginRequestPolicyId = (0, smithy_client_1.expectString)(output["OriginRequestPolicyId"]);
    }
    if (output["ResponseHeadersPolicyId"] !== undefined) {
        contents.ResponseHeadersPolicyId = (0, smithy_client_1.expectString)(output["ResponseHeadersPolicyId"]);
    }
    if (output["ForwardedValues"] !== undefined) {
        contents.ForwardedValues = de_ForwardedValues(output["ForwardedValues"], context);
    }
    if (output["MinTTL"] !== undefined) {
        contents.MinTTL = (0, smithy_client_1.strictParseLong)(output["MinTTL"]);
    }
    if (output["DefaultTTL"] !== undefined) {
        contents.DefaultTTL = (0, smithy_client_1.strictParseLong)(output["DefaultTTL"]);
    }
    if (output["MaxTTL"] !== undefined) {
        contents.MaxTTL = (0, smithy_client_1.strictParseLong)(output["MaxTTL"]);
    }
    return contents;
};
const de_Distribution = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = (0, smithy_client_1.expectString)(output["ARN"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["InProgressInvalidationBatches"] !== undefined) {
        contents.InProgressInvalidationBatches = (0, smithy_client_1.strictParseInt32)(output["InProgressInvalidationBatches"]);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["ActiveTrustedSigners"] !== undefined) {
        contents.ActiveTrustedSigners = de_ActiveTrustedSigners(output["ActiveTrustedSigners"], context);
    }
    if (output["ActiveTrustedKeyGroups"] !== undefined) {
        contents.ActiveTrustedKeyGroups = de_ActiveTrustedKeyGroups(output["ActiveTrustedKeyGroups"], context);
    }
    if (output["DistributionConfig"] !== undefined) {
        contents.DistributionConfig = de_DistributionConfig(output["DistributionConfig"], context);
    }
    if (output.AliasICPRecordals === "") {
        contents.AliasICPRecordals = [];
    }
    else if (output["AliasICPRecordals"] !== undefined &&
        output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
        contents.AliasICPRecordals = de_AliasICPRecordals((0, smithy_client_1.getArrayIfSingleItem)(output["AliasICPRecordals"]["AliasICPRecordal"]), context);
    }
    return contents;
};
const de_DistributionConfig = (output, context) => {
    const contents = {};
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = de_Aliases(output["Aliases"], context);
    }
    if (output["DefaultRootObject"] !== undefined) {
        contents.DefaultRootObject = (0, smithy_client_1.expectString)(output["DefaultRootObject"]);
    }
    if (output["Origins"] !== undefined) {
        contents.Origins = de_Origins(output["Origins"], context);
    }
    if (output["OriginGroups"] !== undefined) {
        contents.OriginGroups = de_OriginGroups(output["OriginGroups"], context);
    }
    if (output["DefaultCacheBehavior"] !== undefined) {
        contents.DefaultCacheBehavior = de_DefaultCacheBehavior(output["DefaultCacheBehavior"], context);
    }
    if (output["CacheBehaviors"] !== undefined) {
        contents.CacheBehaviors = de_CacheBehaviors(output["CacheBehaviors"], context);
    }
    if (output["CustomErrorResponses"] !== undefined) {
        contents.CustomErrorResponses = de_CustomErrorResponses(output["CustomErrorResponses"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Logging"] !== undefined) {
        contents.Logging = de_LoggingConfig(output["Logging"], context);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = (0, smithy_client_1.expectString)(output["PriceClass"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["ViewerCertificate"] !== undefined) {
        contents.ViewerCertificate = de_ViewerCertificate(output["ViewerCertificate"], context);
    }
    if (output["Restrictions"] !== undefined) {
        contents.Restrictions = de_Restrictions(output["Restrictions"], context);
    }
    if (output["WebACLId"] !== undefined) {
        contents.WebACLId = (0, smithy_client_1.expectString)(output["WebACLId"]);
    }
    if (output["HttpVersion"] !== undefined) {
        contents.HttpVersion = (0, smithy_client_1.expectString)(output["HttpVersion"]);
    }
    if (output["IsIPV6Enabled"] !== undefined) {
        contents.IsIPV6Enabled = (0, smithy_client_1.parseBoolean)(output["IsIPV6Enabled"]);
    }
    if (output["ContinuousDeploymentPolicyId"] !== undefined) {
        contents.ContinuousDeploymentPolicyId = (0, smithy_client_1.expectString)(output["ContinuousDeploymentPolicyId"]);
    }
    if (output["Staging"] !== undefined) {
        contents.Staging = (0, smithy_client_1.parseBoolean)(output["Staging"]);
    }
    return contents;
};
const de_DistributionIdList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["DistributionId"] !== undefined) {
        contents.Items = de_DistributionIdListSummary((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["DistributionId"]), context);
    }
    return contents;
};
const de_DistributionIdListSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_DistributionList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["DistributionSummary"] !== undefined) {
        contents.Items = de_DistributionSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["DistributionSummary"]), context);
    }
    return contents;
};
const de_DistributionSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = (0, smithy_client_1.expectString)(output["ARN"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = de_Aliases(output["Aliases"], context);
    }
    if (output["Origins"] !== undefined) {
        contents.Origins = de_Origins(output["Origins"], context);
    }
    if (output["OriginGroups"] !== undefined) {
        contents.OriginGroups = de_OriginGroups(output["OriginGroups"], context);
    }
    if (output["DefaultCacheBehavior"] !== undefined) {
        contents.DefaultCacheBehavior = de_DefaultCacheBehavior(output["DefaultCacheBehavior"], context);
    }
    if (output["CacheBehaviors"] !== undefined) {
        contents.CacheBehaviors = de_CacheBehaviors(output["CacheBehaviors"], context);
    }
    if (output["CustomErrorResponses"] !== undefined) {
        contents.CustomErrorResponses = de_CustomErrorResponses(output["CustomErrorResponses"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = (0, smithy_client_1.expectString)(output["PriceClass"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["ViewerCertificate"] !== undefined) {
        contents.ViewerCertificate = de_ViewerCertificate(output["ViewerCertificate"], context);
    }
    if (output["Restrictions"] !== undefined) {
        contents.Restrictions = de_Restrictions(output["Restrictions"], context);
    }
    if (output["WebACLId"] !== undefined) {
        contents.WebACLId = (0, smithy_client_1.expectString)(output["WebACLId"]);
    }
    if (output["HttpVersion"] !== undefined) {
        contents.HttpVersion = (0, smithy_client_1.expectString)(output["HttpVersion"]);
    }
    if (output["IsIPV6Enabled"] !== undefined) {
        contents.IsIPV6Enabled = (0, smithy_client_1.parseBoolean)(output["IsIPV6Enabled"]);
    }
    if (output.AliasICPRecordals === "") {
        contents.AliasICPRecordals = [];
    }
    else if (output["AliasICPRecordals"] !== undefined &&
        output["AliasICPRecordals"]["AliasICPRecordal"] !== undefined) {
        contents.AliasICPRecordals = de_AliasICPRecordals((0, smithy_client_1.getArrayIfSingleItem)(output["AliasICPRecordals"]["AliasICPRecordal"]), context);
    }
    if (output["Staging"] !== undefined) {
        contents.Staging = (0, smithy_client_1.parseBoolean)(output["Staging"]);
    }
    return contents;
};
const de_DistributionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DistributionSummary(entry, context);
    });
};
const de_EncryptionEntities = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["EncryptionEntity"] !== undefined) {
        contents.Items = de_EncryptionEntityList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["EncryptionEntity"]), context);
    }
    return contents;
};
const de_EncryptionEntity = (output, context) => {
    const contents = {};
    if (output["PublicKeyId"] !== undefined) {
        contents.PublicKeyId = (0, smithy_client_1.expectString)(output["PublicKeyId"]);
    }
    if (output["ProviderId"] !== undefined) {
        contents.ProviderId = (0, smithy_client_1.expectString)(output["ProviderId"]);
    }
    if (output["FieldPatterns"] !== undefined) {
        contents.FieldPatterns = de_FieldPatterns(output["FieldPatterns"], context);
    }
    return contents;
};
const de_EncryptionEntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EncryptionEntity(entry, context);
    });
};
const de_EndPoint = (output, context) => {
    const contents = {};
    if (output["StreamType"] !== undefined) {
        contents.StreamType = (0, smithy_client_1.expectString)(output["StreamType"]);
    }
    if (output["KinesisStreamConfig"] !== undefined) {
        contents.KinesisStreamConfig = de_KinesisStreamConfig(output["KinesisStreamConfig"], context);
    }
    return contents;
};
const de_EndPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EndPoint(entry, context);
    });
};
const de_FieldLevelEncryption = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["FieldLevelEncryptionConfig"] !== undefined) {
        contents.FieldLevelEncryptionConfig = de_FieldLevelEncryptionConfig(output["FieldLevelEncryptionConfig"], context);
    }
    return contents;
};
const de_FieldLevelEncryptionConfig = (output, context) => {
    const contents = {};
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["QueryArgProfileConfig"] !== undefined) {
        contents.QueryArgProfileConfig = de_QueryArgProfileConfig(output["QueryArgProfileConfig"], context);
    }
    if (output["ContentTypeProfileConfig"] !== undefined) {
        contents.ContentTypeProfileConfig = de_ContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
    }
    return contents;
};
const de_FieldLevelEncryptionList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionSummary"] !== undefined) {
        contents.Items = de_FieldLevelEncryptionSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["FieldLevelEncryptionSummary"]), context);
    }
    return contents;
};
const de_FieldLevelEncryptionProfile = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["FieldLevelEncryptionProfileConfig"] !== undefined) {
        contents.FieldLevelEncryptionProfileConfig = de_FieldLevelEncryptionProfileConfig(output["FieldLevelEncryptionProfileConfig"], context);
    }
    return contents;
};
const de_FieldLevelEncryptionProfileConfig = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["EncryptionEntities"] !== undefined) {
        contents.EncryptionEntities = de_EncryptionEntities(output["EncryptionEntities"], context);
    }
    return contents;
};
const de_FieldLevelEncryptionProfileList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["FieldLevelEncryptionProfileSummary"] !== undefined) {
        contents.Items = de_FieldLevelEncryptionProfileSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["FieldLevelEncryptionProfileSummary"]), context);
    }
    return contents;
};
const de_FieldLevelEncryptionProfileSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["EncryptionEntities"] !== undefined) {
        contents.EncryptionEntities = de_EncryptionEntities(output["EncryptionEntities"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_FieldLevelEncryptionProfileSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FieldLevelEncryptionProfileSummary(entry, context);
    });
};
const de_FieldLevelEncryptionSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["QueryArgProfileConfig"] !== undefined) {
        contents.QueryArgProfileConfig = de_QueryArgProfileConfig(output["QueryArgProfileConfig"], context);
    }
    if (output["ContentTypeProfileConfig"] !== undefined) {
        contents.ContentTypeProfileConfig = de_ContentTypeProfileConfig(output["ContentTypeProfileConfig"], context);
    }
    return contents;
};
const de_FieldLevelEncryptionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FieldLevelEncryptionSummary(entry, context);
    });
};
const de_FieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_FieldPatternList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_FieldPatterns = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["FieldPattern"] !== undefined) {
        contents.Items = de_FieldPatternList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["FieldPattern"]), context);
    }
    return contents;
};
const de_ForwardedValues = (output, context) => {
    const contents = {};
    if (output["QueryString"] !== undefined) {
        contents.QueryString = (0, smithy_client_1.parseBoolean)(output["QueryString"]);
    }
    if (output["Cookies"] !== undefined) {
        contents.Cookies = de_CookiePreference(output["Cookies"], context);
    }
    if (output["Headers"] !== undefined) {
        contents.Headers = de_Headers(output["Headers"], context);
    }
    if (output["QueryStringCacheKeys"] !== undefined) {
        contents.QueryStringCacheKeys = de_QueryStringCacheKeys(output["QueryStringCacheKeys"], context);
    }
    return contents;
};
const de_FunctionAssociation = (output, context) => {
    const contents = {};
    if (output["FunctionARN"] !== undefined) {
        contents.FunctionARN = (0, smithy_client_1.expectString)(output["FunctionARN"]);
    }
    if (output["EventType"] !== undefined) {
        contents.EventType = (0, smithy_client_1.expectString)(output["EventType"]);
    }
    return contents;
};
const de_FunctionAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FunctionAssociation(entry, context);
    });
};
const de_FunctionAssociations = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["FunctionAssociation"] !== undefined) {
        contents.Items = de_FunctionAssociationList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["FunctionAssociation"]), context);
    }
    return contents;
};
const de_FunctionConfig = (output, context) => {
    const contents = {};
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Runtime"] !== undefined) {
        contents.Runtime = (0, smithy_client_1.expectString)(output["Runtime"]);
    }
    return contents;
};
const de_FunctionExecutionLogList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_FunctionList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["FunctionSummary"] !== undefined) {
        contents.Items = de_FunctionSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["FunctionSummary"]), context);
    }
    return contents;
};
const de_FunctionMetadata = (output, context) => {
    const contents = {};
    if (output["FunctionARN"] !== undefined) {
        contents.FunctionARN = (0, smithy_client_1.expectString)(output["FunctionARN"]);
    }
    if (output["Stage"] !== undefined) {
        contents.Stage = (0, smithy_client_1.expectString)(output["Stage"]);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreatedTime"]));
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    return contents;
};
const de_FunctionSummary = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["FunctionConfig"] !== undefined) {
        contents.FunctionConfig = de_FunctionConfig(output["FunctionConfig"], context);
    }
    if (output["FunctionMetadata"] !== undefined) {
        contents.FunctionMetadata = de_FunctionMetadata(output["FunctionMetadata"], context);
    }
    return contents;
};
const de_FunctionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FunctionSummary(entry, context);
    });
};
const de_GeoRestriction = (output, context) => {
    const contents = {};
    if (output["RestrictionType"] !== undefined) {
        contents.RestrictionType = (0, smithy_client_1.expectString)(output["RestrictionType"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Location"] !== undefined) {
        contents.Items = de_LocationList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Location"]), context);
    }
    return contents;
};
const de_HeaderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_Headers = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        contents.Items = de_HeaderList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Name"]), context);
    }
    return contents;
};
const de_Invalidation = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["CreateTime"] !== undefined) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreateTime"]));
    }
    if (output["InvalidationBatch"] !== undefined) {
        contents.InvalidationBatch = de_InvalidationBatch(output["InvalidationBatch"], context);
    }
    return contents;
};
const de_InvalidationBatch = (output, context) => {
    const contents = {};
    if (output["Paths"] !== undefined) {
        contents.Paths = de_Paths(output["Paths"], context);
    }
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    return contents;
};
const de_InvalidationList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["InvalidationSummary"] !== undefined) {
        contents.Items = de_InvalidationSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["InvalidationSummary"]), context);
    }
    return contents;
};
const de_InvalidationSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["CreateTime"] !== undefined) {
        contents.CreateTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreateTime"]));
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const de_InvalidationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_InvalidationSummary(entry, context);
    });
};
const de_KeyGroup = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["KeyGroupConfig"] !== undefined) {
        contents.KeyGroupConfig = de_KeyGroupConfig(output["KeyGroupConfig"], context);
    }
    return contents;
};
const de_KeyGroupConfig = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["PublicKey"] !== undefined) {
        contents.Items = de_PublicKeyIdList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["PublicKey"]), context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_KeyGroupList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["KeyGroupSummary"] !== undefined) {
        contents.Items = de_KeyGroupSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["KeyGroupSummary"]), context);
    }
    return contents;
};
const de_KeyGroupSummary = (output, context) => {
    const contents = {};
    if (output["KeyGroup"] !== undefined) {
        contents.KeyGroup = de_KeyGroup(output["KeyGroup"], context);
    }
    return contents;
};
const de_KeyGroupSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_KeyGroupSummary(entry, context);
    });
};
const de_KeyPairIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_KeyPairIds = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["KeyPairId"] !== undefined) {
        contents.Items = de_KeyPairIdList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["KeyPairId"]), context);
    }
    return contents;
};
const de_KGKeyPairIds = (output, context) => {
    const contents = {};
    if (output["KeyGroupId"] !== undefined) {
        contents.KeyGroupId = (0, smithy_client_1.expectString)(output["KeyGroupId"]);
    }
    if (output["KeyPairIds"] !== undefined) {
        contents.KeyPairIds = de_KeyPairIds(output["KeyPairIds"], context);
    }
    return contents;
};
const de_KGKeyPairIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_KGKeyPairIds(entry, context);
    });
};
const de_KinesisStreamConfig = (output, context) => {
    const contents = {};
    if (output["RoleARN"] !== undefined) {
        contents.RoleARN = (0, smithy_client_1.expectString)(output["RoleARN"]);
    }
    if (output["StreamARN"] !== undefined) {
        contents.StreamARN = (0, smithy_client_1.expectString)(output["StreamARN"]);
    }
    return contents;
};
const de_LambdaFunctionAssociation = (output, context) => {
    const contents = {};
    if (output["LambdaFunctionARN"] !== undefined) {
        contents.LambdaFunctionARN = (0, smithy_client_1.expectString)(output["LambdaFunctionARN"]);
    }
    if (output["EventType"] !== undefined) {
        contents.EventType = (0, smithy_client_1.expectString)(output["EventType"]);
    }
    if (output["IncludeBody"] !== undefined) {
        contents.IncludeBody = (0, smithy_client_1.parseBoolean)(output["IncludeBody"]);
    }
    return contents;
};
const de_LambdaFunctionAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_LambdaFunctionAssociation(entry, context);
    });
};
const de_LambdaFunctionAssociations = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["LambdaFunctionAssociation"] !== undefined) {
        contents.Items = de_LambdaFunctionAssociationList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["LambdaFunctionAssociation"]), context);
    }
    return contents;
};
const de_LocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_LoggingConfig = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["IncludeCookies"] !== undefined) {
        contents.IncludeCookies = (0, smithy_client_1.parseBoolean)(output["IncludeCookies"]);
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    return contents;
};
const de_MethodsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_MonitoringSubscription = (output, context) => {
    const contents = {};
    if (output["RealtimeMetricsSubscriptionConfig"] !== undefined) {
        contents.RealtimeMetricsSubscriptionConfig = de_RealtimeMetricsSubscriptionConfig(output["RealtimeMetricsSubscriptionConfig"], context);
    }
    return contents;
};
const de_Origin = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["OriginPath"] !== undefined) {
        contents.OriginPath = (0, smithy_client_1.expectString)(output["OriginPath"]);
    }
    if (output["CustomHeaders"] !== undefined) {
        contents.CustomHeaders = de_CustomHeaders(output["CustomHeaders"], context);
    }
    if (output["S3OriginConfig"] !== undefined) {
        contents.S3OriginConfig = de_S3OriginConfig(output["S3OriginConfig"], context);
    }
    if (output["CustomOriginConfig"] !== undefined) {
        contents.CustomOriginConfig = de_CustomOriginConfig(output["CustomOriginConfig"], context);
    }
    if (output["ConnectionAttempts"] !== undefined) {
        contents.ConnectionAttempts = (0, smithy_client_1.strictParseInt32)(output["ConnectionAttempts"]);
    }
    if (output["ConnectionTimeout"] !== undefined) {
        contents.ConnectionTimeout = (0, smithy_client_1.strictParseInt32)(output["ConnectionTimeout"]);
    }
    if (output["OriginShield"] !== undefined) {
        contents.OriginShield = de_OriginShield(output["OriginShield"], context);
    }
    if (output["OriginAccessControlId"] !== undefined) {
        contents.OriginAccessControlId = (0, smithy_client_1.expectString)(output["OriginAccessControlId"]);
    }
    return contents;
};
const de_OriginAccessControl = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["OriginAccessControlConfig"] !== undefined) {
        contents.OriginAccessControlConfig = de_OriginAccessControlConfig(output["OriginAccessControlConfig"], context);
    }
    return contents;
};
const de_OriginAccessControlConfig = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = (0, smithy_client_1.expectString)(output["Description"]);
    }
    if (output["SigningProtocol"] !== undefined) {
        contents.SigningProtocol = (0, smithy_client_1.expectString)(output["SigningProtocol"]);
    }
    if (output["SigningBehavior"] !== undefined) {
        contents.SigningBehavior = (0, smithy_client_1.expectString)(output["SigningBehavior"]);
    }
    if (output["OriginAccessControlOriginType"] !== undefined) {
        contents.OriginAccessControlOriginType = (0, smithy_client_1.expectString)(output["OriginAccessControlOriginType"]);
    }
    return contents;
};
const de_OriginAccessControlList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["OriginAccessControlSummary"] !== undefined) {
        contents.Items = de_OriginAccessControlSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["OriginAccessControlSummary"]), context);
    }
    return contents;
};
const de_OriginAccessControlSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Description"] !== undefined) {
        contents.Description = (0, smithy_client_1.expectString)(output["Description"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["SigningProtocol"] !== undefined) {
        contents.SigningProtocol = (0, smithy_client_1.expectString)(output["SigningProtocol"]);
    }
    if (output["SigningBehavior"] !== undefined) {
        contents.SigningBehavior = (0, smithy_client_1.expectString)(output["SigningBehavior"]);
    }
    if (output["OriginAccessControlOriginType"] !== undefined) {
        contents.OriginAccessControlOriginType = (0, smithy_client_1.expectString)(output["OriginAccessControlOriginType"]);
    }
    return contents;
};
const de_OriginAccessControlSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OriginAccessControlSummary(entry, context);
    });
};
const de_OriginCustomHeader = (output, context) => {
    const contents = {};
    if (output["HeaderName"] !== undefined) {
        contents.HeaderName = (0, smithy_client_1.expectString)(output["HeaderName"]);
    }
    if (output["HeaderValue"] !== undefined) {
        contents.HeaderValue = (0, smithy_client_1.expectString)(output["HeaderValue"]);
    }
    return contents;
};
const de_OriginCustomHeadersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OriginCustomHeader(entry, context);
    });
};
const de_OriginGroup = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["FailoverCriteria"] !== undefined) {
        contents.FailoverCriteria = de_OriginGroupFailoverCriteria(output["FailoverCriteria"], context);
    }
    if (output["Members"] !== undefined) {
        contents.Members = de_OriginGroupMembers(output["Members"], context);
    }
    return contents;
};
const de_OriginGroupFailoverCriteria = (output, context) => {
    const contents = {};
    if (output["StatusCodes"] !== undefined) {
        contents.StatusCodes = de_StatusCodes(output["StatusCodes"], context);
    }
    return contents;
};
const de_OriginGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OriginGroup(entry, context);
    });
};
const de_OriginGroupMember = (output, context) => {
    const contents = {};
    if (output["OriginId"] !== undefined) {
        contents.OriginId = (0, smithy_client_1.expectString)(output["OriginId"]);
    }
    return contents;
};
const de_OriginGroupMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OriginGroupMember(entry, context);
    });
};
const de_OriginGroupMembers = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["OriginGroupMember"] !== undefined) {
        contents.Items = de_OriginGroupMemberList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["OriginGroupMember"]), context);
    }
    return contents;
};
const de_OriginGroups = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["OriginGroup"] !== undefined) {
        contents.Items = de_OriginGroupList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["OriginGroup"]), context);
    }
    return contents;
};
const de_OriginList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Origin(entry, context);
    });
};
const de_OriginRequestPolicy = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["OriginRequestPolicyConfig"] !== undefined) {
        contents.OriginRequestPolicyConfig = de_OriginRequestPolicyConfig(output["OriginRequestPolicyConfig"], context);
    }
    return contents;
};
const de_OriginRequestPolicyConfig = (output, context) => {
    const contents = {};
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["HeadersConfig"] !== undefined) {
        contents.HeadersConfig = de_OriginRequestPolicyHeadersConfig(output["HeadersConfig"], context);
    }
    if (output["CookiesConfig"] !== undefined) {
        contents.CookiesConfig = de_OriginRequestPolicyCookiesConfig(output["CookiesConfig"], context);
    }
    if (output["QueryStringsConfig"] !== undefined) {
        contents.QueryStringsConfig = de_OriginRequestPolicyQueryStringsConfig(output["QueryStringsConfig"], context);
    }
    return contents;
};
const de_OriginRequestPolicyCookiesConfig = (output, context) => {
    const contents = {};
    if (output["CookieBehavior"] !== undefined) {
        contents.CookieBehavior = (0, smithy_client_1.expectString)(output["CookieBehavior"]);
    }
    if (output["Cookies"] !== undefined) {
        contents.Cookies = de_CookieNames(output["Cookies"], context);
    }
    return contents;
};
const de_OriginRequestPolicyHeadersConfig = (output, context) => {
    const contents = {};
    if (output["HeaderBehavior"] !== undefined) {
        contents.HeaderBehavior = (0, smithy_client_1.expectString)(output["HeaderBehavior"]);
    }
    if (output["Headers"] !== undefined) {
        contents.Headers = de_Headers(output["Headers"], context);
    }
    return contents;
};
const de_OriginRequestPolicyList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["OriginRequestPolicySummary"] !== undefined) {
        contents.Items = de_OriginRequestPolicySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["OriginRequestPolicySummary"]), context);
    }
    return contents;
};
const de_OriginRequestPolicyQueryStringsConfig = (output, context) => {
    const contents = {};
    if (output["QueryStringBehavior"] !== undefined) {
        contents.QueryStringBehavior = (0, smithy_client_1.expectString)(output["QueryStringBehavior"]);
    }
    if (output["QueryStrings"] !== undefined) {
        contents.QueryStrings = de_QueryStringNames(output["QueryStrings"], context);
    }
    return contents;
};
const de_OriginRequestPolicySummary = (output, context) => {
    const contents = {};
    if (output["Type"] !== undefined) {
        contents.Type = (0, smithy_client_1.expectString)(output["Type"]);
    }
    if (output["OriginRequestPolicy"] !== undefined) {
        contents.OriginRequestPolicy = de_OriginRequestPolicy(output["OriginRequestPolicy"], context);
    }
    return contents;
};
const de_OriginRequestPolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_OriginRequestPolicySummary(entry, context);
    });
};
const de_Origins = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
        contents.Items = de_OriginList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Origin"]), context);
    }
    return contents;
};
const de_OriginShield = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["OriginShieldRegion"] !== undefined) {
        contents.OriginShieldRegion = (0, smithy_client_1.expectString)(output["OriginShieldRegion"]);
    }
    return contents;
};
const de_OriginSslProtocols = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["SslProtocol"] !== undefined) {
        contents.Items = de_SslProtocolsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["SslProtocol"]), context);
    }
    return contents;
};
const de_ParametersInCacheKeyAndForwardedToOrigin = (output, context) => {
    const contents = {};
    if (output["EnableAcceptEncodingGzip"] !== undefined) {
        contents.EnableAcceptEncodingGzip = (0, smithy_client_1.parseBoolean)(output["EnableAcceptEncodingGzip"]);
    }
    if (output["EnableAcceptEncodingBrotli"] !== undefined) {
        contents.EnableAcceptEncodingBrotli = (0, smithy_client_1.parseBoolean)(output["EnableAcceptEncodingBrotli"]);
    }
    if (output["HeadersConfig"] !== undefined) {
        contents.HeadersConfig = de_CachePolicyHeadersConfig(output["HeadersConfig"], context);
    }
    if (output["CookiesConfig"] !== undefined) {
        contents.CookiesConfig = de_CachePolicyCookiesConfig(output["CookiesConfig"], context);
    }
    if (output["QueryStringsConfig"] !== undefined) {
        contents.QueryStringsConfig = de_CachePolicyQueryStringsConfig(output["QueryStringsConfig"], context);
    }
    return contents;
};
const de_PathList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_Paths = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Path"] !== undefined) {
        contents.Items = de_PathList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Path"]), context);
    }
    return contents;
};
const de_PublicKey = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreatedTime"]));
    }
    if (output["PublicKeyConfig"] !== undefined) {
        contents.PublicKeyConfig = de_PublicKeyConfig(output["PublicKeyConfig"], context);
    }
    return contents;
};
const de_PublicKeyConfig = (output, context) => {
    const contents = {};
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["EncodedKey"] !== undefined) {
        contents.EncodedKey = (0, smithy_client_1.expectString)(output["EncodedKey"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_PublicKeyIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_PublicKeyList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["PublicKeySummary"] !== undefined) {
        contents.Items = de_PublicKeySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["PublicKeySummary"]), context);
    }
    return contents;
};
const de_PublicKeySummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CreatedTime"] !== undefined) {
        contents.CreatedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreatedTime"]));
    }
    if (output["EncodedKey"] !== undefined) {
        contents.EncodedKey = (0, smithy_client_1.expectString)(output["EncodedKey"]);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    return contents;
};
const de_PublicKeySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_PublicKeySummary(entry, context);
    });
};
const de_QueryArgProfile = (output, context) => {
    const contents = {};
    if (output["QueryArg"] !== undefined) {
        contents.QueryArg = (0, smithy_client_1.expectString)(output["QueryArg"]);
    }
    if (output["ProfileId"] !== undefined) {
        contents.ProfileId = (0, smithy_client_1.expectString)(output["ProfileId"]);
    }
    return contents;
};
const de_QueryArgProfileConfig = (output, context) => {
    const contents = {};
    if (output["ForwardWhenQueryArgProfileIsUnknown"] !== undefined) {
        contents.ForwardWhenQueryArgProfileIsUnknown = (0, smithy_client_1.parseBoolean)(output["ForwardWhenQueryArgProfileIsUnknown"]);
    }
    if (output["QueryArgProfiles"] !== undefined) {
        contents.QueryArgProfiles = de_QueryArgProfiles(output["QueryArgProfiles"], context);
    }
    return contents;
};
const de_QueryArgProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_QueryArgProfile(entry, context);
    });
};
const de_QueryArgProfiles = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["QueryArgProfile"] !== undefined) {
        contents.Items = de_QueryArgProfileList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["QueryArgProfile"]), context);
    }
    return contents;
};
const de_QueryStringCacheKeys = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        contents.Items = de_QueryStringCacheKeysList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Name"]), context);
    }
    return contents;
};
const de_QueryStringCacheKeysList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_QueryStringNames = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Name"] !== undefined) {
        contents.Items = de_QueryStringNamesList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Name"]), context);
    }
    return contents;
};
const de_QueryStringNamesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_RealtimeLogConfig = (output, context) => {
    const contents = {};
    if (output["ARN"] !== undefined) {
        contents.ARN = (0, smithy_client_1.expectString)(output["ARN"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["SamplingRate"] !== undefined) {
        contents.SamplingRate = (0, smithy_client_1.strictParseLong)(output["SamplingRate"]);
    }
    if (output.EndPoints === "") {
        contents.EndPoints = [];
    }
    else if (output["EndPoints"] !== undefined && output["EndPoints"]["member"] !== undefined) {
        contents.EndPoints = de_EndPointList((0, smithy_client_1.getArrayIfSingleItem)(output["EndPoints"]["member"]), context);
    }
    if (output.Fields === "") {
        contents.Fields = [];
    }
    else if (output["Fields"] !== undefined && output["Fields"]["Field"] !== undefined) {
        contents.Fields = de_FieldList((0, smithy_client_1.getArrayIfSingleItem)(output["Fields"]["Field"]), context);
    }
    return contents;
};
const de_RealtimeLogConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_RealtimeLogConfig(entry, context);
    });
};
const de_RealtimeLogConfigs = (output, context) => {
    const contents = {};
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["member"] !== undefined) {
        contents.Items = de_RealtimeLogConfigList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["member"]), context);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    return contents;
};
const de_RealtimeMetricsSubscriptionConfig = (output, context) => {
    const contents = {};
    if (output["RealtimeMetricsSubscriptionStatus"] !== undefined) {
        contents.RealtimeMetricsSubscriptionStatus = (0, smithy_client_1.expectString)(output["RealtimeMetricsSubscriptionStatus"]);
    }
    return contents;
};
const de_ResponseHeadersPolicy = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["ResponseHeadersPolicyConfig"] !== undefined) {
        contents.ResponseHeadersPolicyConfig = de_ResponseHeadersPolicyConfig(output["ResponseHeadersPolicyConfig"], context);
    }
    return contents;
};
const de_ResponseHeadersPolicyAccessControlAllowHeaders = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
        contents.Items = de_AccessControlAllowHeadersList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Header"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyAccessControlAllowMethods = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Method"] !== undefined) {
        contents.Items = de_AccessControlAllowMethodsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Method"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyAccessControlAllowOrigins = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Origin"] !== undefined) {
        contents.Items = de_AccessControlAllowOriginsList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Origin"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyAccessControlExposeHeaders = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Header"] !== undefined) {
        contents.Items = de_AccessControlExposeHeadersList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Header"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyConfig = (output, context) => {
    const contents = {};
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CorsConfig"] !== undefined) {
        contents.CorsConfig = de_ResponseHeadersPolicyCorsConfig(output["CorsConfig"], context);
    }
    if (output["SecurityHeadersConfig"] !== undefined) {
        contents.SecurityHeadersConfig = de_ResponseHeadersPolicySecurityHeadersConfig(output["SecurityHeadersConfig"], context);
    }
    if (output["ServerTimingHeadersConfig"] !== undefined) {
        contents.ServerTimingHeadersConfig = de_ResponseHeadersPolicyServerTimingHeadersConfig(output["ServerTimingHeadersConfig"], context);
    }
    if (output["CustomHeadersConfig"] !== undefined) {
        contents.CustomHeadersConfig = de_ResponseHeadersPolicyCustomHeadersConfig(output["CustomHeadersConfig"], context);
    }
    if (output["RemoveHeadersConfig"] !== undefined) {
        contents.RemoveHeadersConfig = de_ResponseHeadersPolicyRemoveHeadersConfig(output["RemoveHeadersConfig"], context);
    }
    return contents;
};
const de_ResponseHeadersPolicyContentSecurityPolicy = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    if (output["ContentSecurityPolicy"] !== undefined) {
        contents.ContentSecurityPolicy = (0, smithy_client_1.expectString)(output["ContentSecurityPolicy"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyContentTypeOptions = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyCorsConfig = (output, context) => {
    const contents = {};
    if (output["AccessControlAllowOrigins"] !== undefined) {
        contents.AccessControlAllowOrigins = de_ResponseHeadersPolicyAccessControlAllowOrigins(output["AccessControlAllowOrigins"], context);
    }
    if (output["AccessControlAllowHeaders"] !== undefined) {
        contents.AccessControlAllowHeaders = de_ResponseHeadersPolicyAccessControlAllowHeaders(output["AccessControlAllowHeaders"], context);
    }
    if (output["AccessControlAllowMethods"] !== undefined) {
        contents.AccessControlAllowMethods = de_ResponseHeadersPolicyAccessControlAllowMethods(output["AccessControlAllowMethods"], context);
    }
    if (output["AccessControlAllowCredentials"] !== undefined) {
        contents.AccessControlAllowCredentials = (0, smithy_client_1.parseBoolean)(output["AccessControlAllowCredentials"]);
    }
    if (output["AccessControlExposeHeaders"] !== undefined) {
        contents.AccessControlExposeHeaders = de_ResponseHeadersPolicyAccessControlExposeHeaders(output["AccessControlExposeHeaders"], context);
    }
    if (output["AccessControlMaxAgeSec"] !== undefined) {
        contents.AccessControlMaxAgeSec = (0, smithy_client_1.strictParseInt32)(output["AccessControlMaxAgeSec"]);
    }
    if (output["OriginOverride"] !== undefined) {
        contents.OriginOverride = (0, smithy_client_1.parseBoolean)(output["OriginOverride"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyCustomHeader = (output, context) => {
    const contents = {};
    if (output["Header"] !== undefined) {
        contents.Header = (0, smithy_client_1.expectString)(output["Header"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = (0, smithy_client_1.expectString)(output["Value"]);
    }
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyCustomHeaderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResponseHeadersPolicyCustomHeader(entry, context);
    });
};
const de_ResponseHeadersPolicyCustomHeadersConfig = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicyCustomHeader"] !== undefined) {
        contents.Items = de_ResponseHeadersPolicyCustomHeaderList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ResponseHeadersPolicyCustomHeader"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyFrameOptions = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    if (output["FrameOption"] !== undefined) {
        contents.FrameOption = (0, smithy_client_1.expectString)(output["FrameOption"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyList = (output, context) => {
    const contents = {};
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicySummary"] !== undefined) {
        contents.Items = de_ResponseHeadersPolicySummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ResponseHeadersPolicySummary"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicyReferrerPolicy = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    if (output["ReferrerPolicy"] !== undefined) {
        contents.ReferrerPolicy = (0, smithy_client_1.expectString)(output["ReferrerPolicy"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyRemoveHeader = (output, context) => {
    const contents = {};
    if (output["Header"] !== undefined) {
        contents.Header = (0, smithy_client_1.expectString)(output["Header"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyRemoveHeaderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResponseHeadersPolicyRemoveHeader(entry, context);
    });
};
const de_ResponseHeadersPolicyRemoveHeadersConfig = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["ResponseHeadersPolicyRemoveHeader"] !== undefined) {
        contents.Items = de_ResponseHeadersPolicyRemoveHeaderList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["ResponseHeadersPolicyRemoveHeader"]), context);
    }
    return contents;
};
const de_ResponseHeadersPolicySecurityHeadersConfig = (output, context) => {
    const contents = {};
    if (output["XSSProtection"] !== undefined) {
        contents.XSSProtection = de_ResponseHeadersPolicyXSSProtection(output["XSSProtection"], context);
    }
    if (output["FrameOptions"] !== undefined) {
        contents.FrameOptions = de_ResponseHeadersPolicyFrameOptions(output["FrameOptions"], context);
    }
    if (output["ReferrerPolicy"] !== undefined) {
        contents.ReferrerPolicy = de_ResponseHeadersPolicyReferrerPolicy(output["ReferrerPolicy"], context);
    }
    if (output["ContentSecurityPolicy"] !== undefined) {
        contents.ContentSecurityPolicy = de_ResponseHeadersPolicyContentSecurityPolicy(output["ContentSecurityPolicy"], context);
    }
    if (output["ContentTypeOptions"] !== undefined) {
        contents.ContentTypeOptions = de_ResponseHeadersPolicyContentTypeOptions(output["ContentTypeOptions"], context);
    }
    if (output["StrictTransportSecurity"] !== undefined) {
        contents.StrictTransportSecurity = de_ResponseHeadersPolicyStrictTransportSecurity(output["StrictTransportSecurity"], context);
    }
    return contents;
};
const de_ResponseHeadersPolicyServerTimingHeadersConfig = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["SamplingRate"] !== undefined) {
        contents.SamplingRate = (0, smithy_client_1.strictParseFloat)(output["SamplingRate"]);
    }
    return contents;
};
const de_ResponseHeadersPolicyStrictTransportSecurity = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    if (output["IncludeSubdomains"] !== undefined) {
        contents.IncludeSubdomains = (0, smithy_client_1.parseBoolean)(output["IncludeSubdomains"]);
    }
    if (output["Preload"] !== undefined) {
        contents.Preload = (0, smithy_client_1.parseBoolean)(output["Preload"]);
    }
    if (output["AccessControlMaxAgeSec"] !== undefined) {
        contents.AccessControlMaxAgeSec = (0, smithy_client_1.strictParseInt32)(output["AccessControlMaxAgeSec"]);
    }
    return contents;
};
const de_ResponseHeadersPolicySummary = (output, context) => {
    const contents = {};
    if (output["Type"] !== undefined) {
        contents.Type = (0, smithy_client_1.expectString)(output["Type"]);
    }
    if (output["ResponseHeadersPolicy"] !== undefined) {
        contents.ResponseHeadersPolicy = de_ResponseHeadersPolicy(output["ResponseHeadersPolicy"], context);
    }
    return contents;
};
const de_ResponseHeadersPolicySummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ResponseHeadersPolicySummary(entry, context);
    });
};
const de_ResponseHeadersPolicyXSSProtection = (output, context) => {
    const contents = {};
    if (output["Override"] !== undefined) {
        contents.Override = (0, smithy_client_1.parseBoolean)(output["Override"]);
    }
    if (output["Protection"] !== undefined) {
        contents.Protection = (0, smithy_client_1.parseBoolean)(output["Protection"]);
    }
    if (output["ModeBlock"] !== undefined) {
        contents.ModeBlock = (0, smithy_client_1.parseBoolean)(output["ModeBlock"]);
    }
    if (output["ReportUri"] !== undefined) {
        contents.ReportUri = (0, smithy_client_1.expectString)(output["ReportUri"]);
    }
    return contents;
};
const de_Restrictions = (output, context) => {
    const contents = {};
    if (output["GeoRestriction"] !== undefined) {
        contents.GeoRestriction = de_GeoRestriction(output["GeoRestriction"], context);
    }
    return contents;
};
const de_S3Origin = (output, context) => {
    const contents = {};
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["OriginAccessIdentity"] !== undefined) {
        contents.OriginAccessIdentity = (0, smithy_client_1.expectString)(output["OriginAccessIdentity"]);
    }
    return contents;
};
const de_S3OriginConfig = (output, context) => {
    const contents = {};
    if (output["OriginAccessIdentity"] !== undefined) {
        contents.OriginAccessIdentity = (0, smithy_client_1.expectString)(output["OriginAccessIdentity"]);
    }
    return contents;
};
const de_SessionStickinessConfig = (output, context) => {
    const contents = {};
    if (output["IdleTTL"] !== undefined) {
        contents.IdleTTL = (0, smithy_client_1.strictParseInt32)(output["IdleTTL"]);
    }
    if (output["MaximumTTL"] !== undefined) {
        contents.MaximumTTL = (0, smithy_client_1.strictParseInt32)(output["MaximumTTL"]);
    }
    return contents;
};
const de_Signer = (output, context) => {
    const contents = {};
    if (output["AwsAccountNumber"] !== undefined) {
        contents.AwsAccountNumber = (0, smithy_client_1.expectString)(output["AwsAccountNumber"]);
    }
    if (output["KeyPairIds"] !== undefined) {
        contents.KeyPairIds = de_KeyPairIds(output["KeyPairIds"], context);
    }
    return contents;
};
const de_SignerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Signer(entry, context);
    });
};
const de_SslProtocolsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_StagingDistributionDnsNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_StagingDistributionDnsNames = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["DnsName"] !== undefined) {
        contents.Items = de_StagingDistributionDnsNameList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["DnsName"]), context);
    }
    return contents;
};
const de_StatusCodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.strictParseInt32)(entry);
    });
};
const de_StatusCodes = (output, context) => {
    const contents = {};
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["StatusCode"] !== undefined) {
        contents.Items = de_StatusCodeList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["StatusCode"]), context);
    }
    return contents;
};
const de_StreamingDistribution = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = (0, smithy_client_1.expectString)(output["ARN"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["ActiveTrustedSigners"] !== undefined) {
        contents.ActiveTrustedSigners = de_ActiveTrustedSigners(output["ActiveTrustedSigners"], context);
    }
    if (output["StreamingDistributionConfig"] !== undefined) {
        contents.StreamingDistributionConfig = de_StreamingDistributionConfig(output["StreamingDistributionConfig"], context);
    }
    return contents;
};
const de_StreamingDistributionConfig = (output, context) => {
    const contents = {};
    if (output["CallerReference"] !== undefined) {
        contents.CallerReference = (0, smithy_client_1.expectString)(output["CallerReference"]);
    }
    if (output["S3Origin"] !== undefined) {
        contents.S3Origin = de_S3Origin(output["S3Origin"], context);
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = de_Aliases(output["Aliases"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["Logging"] !== undefined) {
        contents.Logging = de_StreamingLoggingConfig(output["Logging"], context);
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = (0, smithy_client_1.expectString)(output["PriceClass"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    return contents;
};
const de_StreamingDistributionList = (output, context) => {
    const contents = {};
    if (output["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(output["Marker"]);
    }
    if (output["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(output["NextMarker"]);
    }
    if (output["MaxItems"] !== undefined) {
        contents.MaxItems = (0, smithy_client_1.strictParseInt32)(output["MaxItems"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["StreamingDistributionSummary"] !== undefined) {
        contents.Items = de_StreamingDistributionSummaryList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["StreamingDistributionSummary"]), context);
    }
    return contents;
};
const de_StreamingDistributionSummary = (output, context) => {
    const contents = {};
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = (0, smithy_client_1.expectString)(output["ARN"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["LastModifiedTime"] !== undefined) {
        contents.LastModifiedTime = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModifiedTime"]));
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = (0, smithy_client_1.expectString)(output["DomainName"]);
    }
    if (output["S3Origin"] !== undefined) {
        contents.S3Origin = de_S3Origin(output["S3Origin"], context);
    }
    if (output["Aliases"] !== undefined) {
        contents.Aliases = de_Aliases(output["Aliases"], context);
    }
    if (output["TrustedSigners"] !== undefined) {
        contents.TrustedSigners = de_TrustedSigners(output["TrustedSigners"], context);
    }
    if (output["Comment"] !== undefined) {
        contents.Comment = (0, smithy_client_1.expectString)(output["Comment"]);
    }
    if (output["PriceClass"] !== undefined) {
        contents.PriceClass = (0, smithy_client_1.expectString)(output["PriceClass"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    return contents;
};
const de_StreamingDistributionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StreamingDistributionSummary(entry, context);
    });
};
const de_StreamingLoggingConfig = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    return contents;
};
const de_Tag = (output, context) => {
    const contents = {};
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = (0, smithy_client_1.expectString)(output["Value"]);
    }
    return contents;
};
const de_TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Tag(entry, context);
    });
};
const de_Tags = (output, context) => {
    const contents = {};
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["Tag"] !== undefined) {
        contents.Items = de_TagList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["Tag"]), context);
    }
    return contents;
};
const de_TestResult = (output, context) => {
    const contents = {};
    if (output["FunctionSummary"] !== undefined) {
        contents.FunctionSummary = de_FunctionSummary(output["FunctionSummary"], context);
    }
    if (output["ComputeUtilization"] !== undefined) {
        contents.ComputeUtilization = (0, smithy_client_1.expectString)(output["ComputeUtilization"]);
    }
    if (output.FunctionExecutionLogs === "") {
        contents.FunctionExecutionLogs = [];
    }
    else if (output["FunctionExecutionLogs"] !== undefined && output["FunctionExecutionLogs"]["member"] !== undefined) {
        contents.FunctionExecutionLogs = de_FunctionExecutionLogList((0, smithy_client_1.getArrayIfSingleItem)(output["FunctionExecutionLogs"]["member"]), context);
    }
    if (output["FunctionErrorMessage"] !== undefined) {
        contents.FunctionErrorMessage = (0, smithy_client_1.expectString)(output["FunctionErrorMessage"]);
    }
    if (output["FunctionOutput"] !== undefined) {
        contents.FunctionOutput = (0, smithy_client_1.expectString)(output["FunctionOutput"]);
    }
    return contents;
};
const de_TrafficConfig = (output, context) => {
    const contents = {};
    if (output["SingleWeightConfig"] !== undefined) {
        contents.SingleWeightConfig = de_ContinuousDeploymentSingleWeightConfig(output["SingleWeightConfig"], context);
    }
    if (output["SingleHeaderConfig"] !== undefined) {
        contents.SingleHeaderConfig = de_ContinuousDeploymentSingleHeaderConfig(output["SingleHeaderConfig"], context);
    }
    if (output["Type"] !== undefined) {
        contents.Type = (0, smithy_client_1.expectString)(output["Type"]);
    }
    return contents;
};
const de_TrustedKeyGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_TrustedKeyGroups = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["KeyGroup"] !== undefined) {
        contents.Items = de_TrustedKeyGroupIdList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["KeyGroup"]), context);
    }
    return contents;
};
const de_TrustedSigners = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["Quantity"] !== undefined) {
        contents.Quantity = (0, smithy_client_1.strictParseInt32)(output["Quantity"]);
    }
    if (output.Items === "") {
        contents.Items = [];
    }
    else if (output["Items"] !== undefined && output["Items"]["AwsAccountNumber"] !== undefined) {
        contents.Items = de_AwsAccountNumberList((0, smithy_client_1.getArrayIfSingleItem)(output["Items"]["AwsAccountNumber"]), context);
    }
    return contents;
};
const de_ViewerCertificate = (output, context) => {
    const contents = {};
    if (output["CloudFrontDefaultCertificate"] !== undefined) {
        contents.CloudFrontDefaultCertificate = (0, smithy_client_1.parseBoolean)(output["CloudFrontDefaultCertificate"]);
    }
    if (output["IAMCertificateId"] !== undefined) {
        contents.IAMCertificateId = (0, smithy_client_1.expectString)(output["IAMCertificateId"]);
    }
    if (output["ACMCertificateArn"] !== undefined) {
        contents.ACMCertificateArn = (0, smithy_client_1.expectString)(output["ACMCertificateArn"]);
    }
    if (output["SSLSupportMethod"] !== undefined) {
        contents.SSLSupportMethod = (0, smithy_client_1.expectString)(output["SSLSupportMethod"]);
    }
    if (output["MinimumProtocolVersion"] !== undefined) {
        contents.MinimumProtocolVersion = (0, smithy_client_1.expectString)(output["MinimumProtocolVersion"]);
    }
    if (output["Certificate"] !== undefined) {
        contents.Certificate = (0, smithy_client_1.expectString)(output["Certificate"]);
    }
    if (output["CertificateSource"] !== undefined) {
        contents.CertificateSource = (0, smithy_client_1.expectString)(output["CertificateSource"]);
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fast_xml_parser_1.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const loadRestXmlErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};
