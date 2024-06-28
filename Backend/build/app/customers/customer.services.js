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
const auth_responses_1 = require("../auth/auth.responses");
const customer_repo_1 = __importDefault(require("./customer.repo"));
const customer_responses_1 = require("./customer.responses");
const createCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield getUserByEmail(customer.email);
        if (existingUser) {
            throw auth_responses_1.authResponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
        }
        return yield customer_repo_1.default.insertOne(customer);
    }
    catch (e) {
        throw e;
    }
});
const getAllCustomers = (query) => __awaiter(void 0, void 0, void 0, function* () { return yield customer_repo_1.default.find(query); });
// const find = async (query: Partial<MerchandiseI>) => await userRepo.find(query)
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield customer_repo_1.default.findById(id);
        if (!customer) {
            throw customer_responses_1.customerResponses.CUSTOMER_ID_REQUIRED;
        }
        return customer;
    }
    catch (e) {
        throw e;
    }
});
const updateCustomer = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.updateOne({ _id: id }, updateData);
    }
    catch (e) {
        throw e;
    }
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.deleteOne({ _id: id });
    }
    catch (e) {
        throw e;
    }
});
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return customer_repo_1.default.findByEmail(email);
});
exports.default = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    getUserByEmail
};
