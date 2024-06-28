import { ResponsesI } from "../utility/response-handler";

export const userResponses: ResponsesI = {
  USER_NOT_FOUND: {
    message: "USER NOT FOUND",
    statusCode: 404
  },
  BAD_REQUEST: {
    message: "BAD REQUEST",
    statusCode: 400
  },
  USER_ALREADY_EXISTS: {
    message: "USER ALREADY EXISTS",
    statusCode: 403
  },
  USER_REGISTERED_SUCCESSFULLY: {
    message: "USER REGISTERED SUCCESSFULLY",
    statusCode: 200
  },
  USER_REGISTRATION_FAILED: {
    message: "USER REGISTRATION FAILED",
    statusCode: 500
  }
}
