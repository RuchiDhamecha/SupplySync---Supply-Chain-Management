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
const order_services_1 = __importDefault(require("./order.services"));
const response_handler_1 = require("../utility/response-handler");
const auth_permissions_1 = require("../utility/auth-permissions");
const validator_1 = require("../utility/validator");
const routes_types_1 = require("../routes/routes.types");
const router = (0, express_1.Router)();
router.post('/addorder', (0, auth_permissions_1.permit)(['distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const order = yield order_services_1.default.createOrder(orderData);
        res.send(new response_handler_1.ResponseHandler(order));
    }
    catch (e) {
        next(e);
    }
}));
//for customer's order
router.post('/addorder/customer', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const order = yield order_services_1.default.createOrder(orderData);
        res.send(new response_handler_1.ResponseHandler(order));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_services_1.default.getOrderById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(order));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/getAllOrders/", (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Orders are: ");
        const orders = yield order_services_1.default.getAllOrders({});
        console.log(orders);
        res.send(new response_handler_1.ResponseHandler(orders));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/orders/:user_id/:onModel', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const onModel = (0, validator_1.validateOnModel)(req.params.onModel);
        const orders = yield order_services_1.default.getOrdersByUserId(req.params.user_id, onModel);
        res.send(new response_handler_1.ResponseHandler(orders));
    }
    catch (e) {
        next(e);
    }
}));
router.put('/:id/status', (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const order = yield order_services_1.default.updateOrderStatus(req.params.id, status);
        res.send(new response_handler_1.ResponseHandler(order));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route('/order', router);
