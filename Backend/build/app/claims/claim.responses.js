"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimResponses = void 0;
exports.ClaimResponses = {
    claimCreated: {
        statusCode: 201,
        message: "Claim created successfully.",
    },
    claimUpdated: {
        statusCode: 200,
        message: "Claim updated successfully.",
    },
    claimDeleted: {
        statusCode: 200,
        message: "Claim deleted successfully.",
    },
    claimNotFound: {
        statusCode: 404,
        message: "Claim not found.",
    },
    invalidClaimData: {
        statusCode: 400,
        message: "Invalid claim data.",
    },
};
