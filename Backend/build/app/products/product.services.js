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
const product_repo_1 = __importDefault(require("./product.repo"));
const product_responses_1 = require("./product.responses");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_repo_1.default.insertOne(product);
    }
    catch (e) {
        throw e;
    }
});
const getProducts = (query) => __awaiter(void 0, void 0, void 0, function* () { return yield product_repo_1.default.find(query); });
// const find = async (query: Partial<ProductI>) => await userRepo.find(query)
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_repo_1.default.findById(id);
        if (!product) {
            throw product_responses_1.productResponses.PRODUCT_ID_REQUIRED;
        }
        return product;
    }
    catch (e) {
        throw e;
    }
});
const getProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!name) {
            throw product_responses_1.productResponses.PRODUCT_NAME_REQUIRED;
        }
        return yield product_repo_1.default.getProductByName(name);
    }
    catch (e) {
        throw e;
    }
});
const updateProduct = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_repo_1.default.updateOne({ _id: id }, updateData);
    }
    catch (e) {
        throw e;
    }
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_repo_1.default.deleteOne({ _id: id });
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    createProduct,
    getProducts,
    getProductById,
    getProductByName,
    updateProduct,
    deleteProduct,
};
