"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResponses = void 0;
exports.productResponses = {
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "SOMETHING WENT WRONG"
    },
    UNAUTHORISED_ACCESS_DENIED: {
        statusCode: 401,
        message: "UNAUTHORISED ACCESS DENIED"
    },
    PRODUCT_NOT_FOUND: {
        statusCode: 404,
        message: "PRODUCT NOT FOUND"
    },
    PRODUCT_ALREADY_EXISTS: {
        statusCode: 403,
        message: "PRODUCT ALREADY EXISTS"
    },
    PRODUCT_NAME_REQUIRED: {
        statusCode: 403,
        message: "PRODUCT NAME REQUIRED"
    },
    PRODUCT_ID_REQUIRED: {
        statusCode: 403,
        message: "PRODUCT ID REQUIRED"
    },
    IMAGE_COULD_NOT_BE_UPLOADED: {
        statusCode: 403,
        message: "IMAGE COULD NOT BE UPLOADED"
    }
};
