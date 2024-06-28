"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_services_1 = __importDefault(require("../users/user.services"));
const auth_responses_1 = require("./auth.responses");
const bcrypt_1 = require("bcrypt");
const encrypt_1 = require("../utility/encrypt");
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_services_1.default.getUserByEmail(credentials.email);
        if (!user)
            throw auth_responses_1.authResponses.USER_NOT_FOUND;
        const userDetail = user.details.find(detail => detail.email === credentials.email);
        if (!userDetail)
            throw auth_responses_1.authResponses.USER_NOT_FOUND;
        const didMatch = yield (0, bcrypt_1.compare)(credentials.password, userDetail.password);
        if (!didMatch)
            throw auth_responses_1.authResponses.WRONG_PASSWORD;
        const { password } = userDetail, restOfTheUserDetail = __rest(userDetail, ["password"]);
        const { JWT_TOKEN } = process.env;
        const token = jsonwebtoken_1.default.sign({ userId: user._id, roleId: user.roleId }, JWT_TOKEN || '');
        // return { token, roleId: user.roleId, ...restOfTheUserDetail }
        return { token, user: Object.assign(Object.assign({}, user.toObject()), { details: [restOfTheUserDetail] }), role: user.roleId };
    }
    catch (e) {
        throw e;
    }
});
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield user_services_1.default.getUserByEmail(userData.details[0].email);
        if (existingUser) {
            throw auth_responses_1.authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
        }
        userData.details[0].password = yield (0, encrypt_1.encrypt)(userData.details[0].password);
        const newUser = yield user_services_1.default.createUser(userData);
        return newUser;
    }
    catch (e) {
        throw e;
    }
});
const registerMany = (userDataArray) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUsers = yield Promise.all(userDataArray.map(userData => user_services_1.default.getUserByEmail(userData.details[0].email)));
        if (existingUsers.some(user => user)) {
            throw auth_responses_1.authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
        }
        const encryptedUsers = yield Promise.all(userDataArray.map((userData) => __awaiter(void 0, void 0, void 0, function* () {
            userData.details[0].password = yield (0, encrypt_1.encrypt)(userData.details[0].password);
            return userData;
        })));
        const newUsers = yield user_services_1.default.createUsers(encryptedUsers);
        return newUsers;
    }
    catch (e) {
        throw e;
    }
});
const find = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield user_services_1.default.getUserByEmail(((_a = credentials.details) === null || _a === void 0 ? void 0 : _a[0].email) || '');
    if (!user)
        throw auth_responses_1.authResponses.USER_NOT_FOUND;
    const userDetail = user.details.find(detail => { var _a; return detail.email === ((_a = credentials.details) === null || _a === void 0 ? void 0 : _a[0].email); });
    if (!userDetail)
        throw auth_responses_1.authResponses.USER_NOT_FOUND;
    const { password } = userDetail, restOfTheUserDetail = __rest(userDetail, ["password"]);
    return Object.assign(Object.assign({}, user.toObject()), { details: [restOfTheUserDetail] });
});
const findAll = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_services_1.default.getUsers(query);
    return users;
});
exports.default = {
    login,
    register,
    registerMany,
    find,
    findAll,
};
