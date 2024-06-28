"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerResponses = void 0;
exports.customerResponses = {
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "SOMETHING WENT WRONG"
    },
    UNAUTHORISED_ACCESS_DENIED: {
        statusCode: 401,
        message: "UNAUTHORISED ACCESS DENIED"
    },
    CUSTOMER_NOT_FOUND: {
        statusCode: 404,
        message: "CUSTOMER NOT FOUND"
    },
    CUSTOMER_ALREADY_EXISTS: {
        statusCode: 403,
        message: "CUSTOMER ALREADY EXISTS"
    },
    CUSTOMER_NAME_REQUIRED: {
        statusCode: 403,
        message: "CUSTOMER NAME REQUIRED"
    },
    CUSTOMER_ID_REQUIRED: {
        statusCode: 403,
        message: "CUSTOMER ID REQUIRED"
    },
    IMAGE_COULD_NOT_BE_UPLOADED: {
        statusCode: 403,
        message: "IMAGE COULD NOT BE UPLOADED"
    }
};
