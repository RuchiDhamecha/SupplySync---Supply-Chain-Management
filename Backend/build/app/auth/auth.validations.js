"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpValidations = exports.LoginValidations = void 0;
const validator_1 = require("../utility/validator");
const auth_types_1 = require("./auth.types");
exports.LoginValidations = [
    (0, validator_1.body)(auth_types_1.Credentials),
];
exports.SignUpValidations = [
    (0, validator_1.body)(auth_types_1.signUpCredentials),
];
