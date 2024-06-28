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
const product_services_1 = __importDefault(require("./product.services"));
const response_handler_1 = require("../utility/response-handler");
const routes_types_1 = require("../routes/routes.types");
const auth_permissions_1 = require("../utility/auth-permissions");
// import { verifyManufacturerOrDistributorRole, verifyManufacturerRole, verifyTokenAndRole } from "../utility/auth-permissions";
const router = (0, express_1.Router)();
router.post("/addproduct", (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Created Product Is: ");
        const product = yield product_services_1.default.createProduct(req.body);
        res.send(new response_handler_1.ResponseHandler(product));
    }
    catch (e) {
        next(e);
    }
}));
router.put("/:id", (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Updated Product Is: ");
        const product = yield product_services_1.default.updateProduct(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(product));
    }
    catch (e) {
        next(e);
    }
}));
router.delete("/:id", (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Deleted Product Is: ");
        const product = yield product_services_1.default.deleteProduct(req.params.id);
        res.send(new response_handler_1.ResponseHandler(product));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/:id", (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Product is: ");
        const product = yield product_services_1.default.getProductById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(product));
    }
    catch (e) {
        next(e);
    }
}));
router.get("/", (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Products are: ");
        const products = yield product_services_1.default.getProducts({});
        console.log(products);
        res.send(new response_handler_1.ResponseHandler(products));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/products", router);
