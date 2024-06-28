"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const response_handler_1 = require("../utility/response-handler");
const routes_data_2 = require("./routes.data");
const validate_permissions_1 = require("../utility/validate-permissions");
const cors_1 = __importDefault(require("cors"));
const registerMiddlewares = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    app.use((0, validate_permissions_1.validateToken)(routes_data_2.excludedRoutes));
    // app.use('/uploads', express.static('uploads'));
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
