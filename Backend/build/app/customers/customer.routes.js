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
const express_1 = __importDefault(require("express"));
const customer_services_1 = __importDefault(require("./customer.services"));
const response_handler_1 = require("../utility/response-handler");
const routes_types_1 = require("../routes/routes.types");
const auth_permissions_1 = require("../utility/auth-permissions");
const router = express_1.default.Router();
router.post('/addcustomer', (0, auth_permissions_1.permit)(['distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Created Customer Is: ");
        const customer = yield customer_services_1.default.createCustomer(req.body);
        res.send(new response_handler_1.ResponseHandler(customer));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/', (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Customers Are: ");
        const customers = yield customer_services_1.default.getAllCustomers({});
        res.send(new response_handler_1.ResponseHandler(customers));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/:id', (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Customer Is: ");
        const customer = yield customer_services_1.default.getCustomerById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(customer));
    }
    catch (e) {
        next(e);
    }
}));
router.put('/:id', (0, auth_permissions_1.permit)(['distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Updated Customer Is: ");
        const customer = yield customer_services_1.default.updateCustomer(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(customer));
    }
    catch (e) {
        next(e);
    }
}));
router.delete('/:id', (0, auth_permissions_1.permit)(['distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Deleted Customer Is: ");
        const customer = yield customer_services_1.default.deleteCustomer(req.params.id);
        res.send(new response_handler_1.ResponseHandler(customer));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route('/customer', router);
