import { body, params, query } from "../utility/validator";
import { Credentials, signUpCredentials,  } from "./auth.types";

export const LoginValidations = [
    body(Credentials),
];
    
export const SignUpValidations = [
    body(signUpCredentials),
]