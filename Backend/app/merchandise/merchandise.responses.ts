import { ResponsesI } from '../utility/response-handler'

export const merchandiseResponses: ResponsesI = {
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "SOMETHING WENT WRONG"
    },
    UNAUTHORISED_ACCESS_DENIED: {
        statusCode: 401,
        message: "UNAUTHORISED ACCESS DENIED"
    },
    MERCHANDISE_NOT_FOUND: {
      statusCode: 404,
      message: "MERCHANDISE NOT FOUND"
  },
    MERCHANDISE_ALREADY_EXISTS: {
        statusCode: 403,
        message: "MERCHANDISE ALREADY EXISTS"
    },
    MERCHANDISE_NAME_REQUIRED: {
      statusCode: 403,
      message: "MERCHANDISE NAME REQUIRED"
  },
  MERCHANDISE_ID_REQUIRED: {
    statusCode: 403,
    message: "MERCHANDISE ID REQUIRED"
},
    IMAGE_COULD_NOT_BE_UPLOADED:{
      statusCode: 403,
      message: "IMAGE COULD NOT BE UPLOADED"
    }
}