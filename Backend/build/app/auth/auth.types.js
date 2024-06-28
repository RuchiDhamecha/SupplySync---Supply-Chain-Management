"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpCredentials = exports.Credentials = void 0;
const zod_1 = require("zod");
const user_types_1 = require("../users/user.types");
const UserDetailSchema = user_types_1.UserSchema.shape.details.element;
exports.Credentials = UserDetailSchema.pick({
    email: true,
    password: true
});
exports.signUpCredentials = zod_1.z.object({
    roleId: user_types_1.UserSchema.shape.roleId,
    details: zod_1.z.array(UserDetailSchema.pick({
        user_name: true,
        email: true,
        password: true,
        mobile_number: true,
        address: true,
        points: true,
    })).nonempty(),
});
