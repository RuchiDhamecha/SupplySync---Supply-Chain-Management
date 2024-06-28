import { ResponsesI } from '../utility/response-handler'

export const authResponses: ResponsesI = {
    WRONG_PASSWORD: {
        statusCode: 400,
        message: "WRONG PASSWORD"
    },
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "SOMETHING WENT WRONG"
    },
    UNAUTHORISED_ACCESS_DENIED: {
        statusCode: 401,
        message: "UNAUTHORISED ACCESS DENIED"
    },
    USER_ALREADY_EXIST_WITH_THIS_EMAIL: {
        statusCode: 403,
        message: "USER ALREADY EXIST WITH THIS EMAIL"
    },
    USER_ALREADY_EXISTS: {
        statusCode: 403,
        message: "USER ALREADY EXISTS"
    },
}