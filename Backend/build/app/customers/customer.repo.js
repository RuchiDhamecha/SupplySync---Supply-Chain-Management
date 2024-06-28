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
const customer_schema_1 = require("./customer.schema");
const insertOne = (customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCustomer = new customer_schema_1.CustomerModel(customerData);
    console.log(newCustomer);
    return newCustomer.save();
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCustomerById = customer_schema_1.CustomerModel.findById(id);
        console.log(getCustomerById);
        return getCustomerById;
    }
    catch (e) {
        throw e;
    }
});
const find = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllCustomers = customer_schema_1.CustomerModel.find(query);
    console.log(getAllCustomers);
    return getAllCustomers;
});
const updateOne = (query, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateCustomer = customer_schema_1.CustomerModel.updateOne(query, update);
    console.log(updateCustomer);
    return updateCustomer;
});
const deleteOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteCustomer = customer_schema_1.CustomerModel.deleteOne(query);
    console.log(deleteCustomer);
    return deleteCustomer;
});
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return customer_schema_1.CustomerModel.findOne({ 'email': email });
});
exports.default = {
    insertOne,
    findById,
    find,
    updateOne,
    deleteOne,
    findByEmail
};
