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
const merchandise_services_1 = __importDefault(require("./merchandise.services"));
const response_handler_1 = require("../utility/response-handler");
const routes_types_1 = require("../routes/routes.types");
// import { verifyTokenAndRole, CustomRequest, verifyManufacturerRole, verifyManufacturerOrDistributorRole} from '../utility/auth-permissions';
const auth_permissions_1 = require("../utility/auth-permissions");
const router = express_1.default.Router();
router.post('/addmerch', (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Created Merchandise Is: ");
        const merchandise = yield merchandise_services_1.default.createMerch(req.body);
        res.send(new response_handler_1.ResponseHandler(merchandise));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/', (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Merchandises Are: ");
        const merchandises = yield merchandise_services_1.default.getAllMerch({});
        res.send(new response_handler_1.ResponseHandler(merchandises));
    }
    catch (e) {
        next(e);
    }
}));
router.get('/:id', (0, auth_permissions_1.permit)(['manufacturer', 'distributor']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Merchandise Is: ");
        const merchandise = yield merchandise_services_1.default.getMerchById(req.params.id);
        res.send(new response_handler_1.ResponseHandler(merchandise));
    }
    catch (e) {
        next(e);
    }
}));
router.put('/:id', (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Updated Merchandise Is: ");
        const merchandise = yield merchandise_services_1.default.updateMerch(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(merchandise));
    }
    catch (e) {
        next(e);
    }
}));
router.delete('/:id', (0, auth_permissions_1.permit)(['manufacturer']), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Deleted Merchandise Is: ");
        const merchandise = yield merchandise_services_1.default.deleteMerch(req.params.id);
        res.send(new response_handler_1.ResponseHandler(merchandise));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route('/merchandise', router);
