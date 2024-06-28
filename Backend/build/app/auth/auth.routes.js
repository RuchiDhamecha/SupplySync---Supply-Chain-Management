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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const auth_services_1 = __importDefault(require("./auth.services"));
const response_handler_1 = require("../utility/response-handler");
const auth_validations_1 = require("./auth.validations");
const user_types_1 = require("../users/user.types");
const user_services_1 = __importDefault(require("../users/user.services"));
const auth_permissions_1 = require("../utility/auth-permissions");
// import { verifyManufacturerOrDistributorRole, verifyManufacturerRole } from "../utility/auth-permissions";
const router = (0, express_1.Router)();
// Register new user
router.post("/register", (0, auth_permissions_1.permit)(['manufacturer']), ...auth_validations_1.SignUpValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = user_types_1.UserSchema.parse(req.body);
        const user = yield auth_services_1.default.register(userData);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (e) {
        next(e);
    }
}));
// Register multiple users
router.post("/register-many", (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersData = req.body.map((user) => user_types_1.UserSchema.parse(user));
        const users = yield auth_services_1.default.registerMany(usersData);
        res.send(new response_handler_1.ResponseHandler(users));
    }
    catch (e) {
        next(e);
    }
}));
// User login
router.post("/login", ...auth_validations_1.LoginValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.default.login(req.body);
        console.log("logged user: ", result);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
//Get user by email
router.get("/user/email/:email", 
// verifyManufacturerRole,
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_services_1.default.getUserByEmail(req.params.email);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (e) {
        next(e);
    }
}));
// Get user by ID
router.get("/user/id/:id", 
// verifyManufacturerRole, 
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_services_1.default.getUserById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(user));
    }
    catch (e) {
        next(e);
    }
}));
// Get all users
router.get("/users", 
// verifyManufacturerRole,
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_services_1.default.getUsers({});
        res.send(new response_handler_1.ResponseHandler(users));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/auth", router);
