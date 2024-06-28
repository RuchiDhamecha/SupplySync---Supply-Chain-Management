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
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("./product.schema");
const insertOne = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_schema_1.ProductModel(product);
    console.log(newProduct);
    return newProduct.save();
});
const find = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllProducts = yield product_schema_1.ProductModel.find(query);
        console.log(getAllProducts);
        return getAllProducts;
    }
    catch (error) {
        throw error;
    }
});
// const find = async (query: any) => {
//   return ProductModel.find(query);
// };
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getProdById = yield product_schema_1.ProductModel.findById(id);
        console.log(getProdById);
        return getProdById;
    }
    catch (error) {
        throw error;
    }
});
const getProductByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return product_schema_1.ProductModel.findOne({ product_name: name });
});
const updateOne = (query, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProduct = product_schema_1.ProductModel.updateOne(query, update);
    console.log(updateProduct);
    return updateProduct;
});
const deleteOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteProduct = product_schema_1.ProductModel.deleteOne(query);
    console.log(deleteProduct);
    return deleteProduct;
});
exports.default = {
    insertOne,
    find,
    findById,
    getProductByName,
    updateOne,
    deleteOne,
};
