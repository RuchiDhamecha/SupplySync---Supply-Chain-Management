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
const user_schema_1 = require("./user.schema");
const insertOne = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_schema_1.UserModel(userData);
    return newUser.save();
});
const insertMany = (userDataArray) => __awaiter(void 0, void 0, void 0, function* () {
    return user_schema_1.UserModel.insertMany(userDataArray);
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_schema_1.UserModel.findById(id);
});
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return user_schema_1.UserModel.findOne({ 'details.email': email });
});
const find = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return user_schema_1.UserModel.find(query);
});
const updateOne = (query, update) => __awaiter(void 0, void 0, void 0, function* () {
    const updateDistributor = user_schema_1.UserModel.updateOne(query, update);
    console.log(updateDistributor);
    return updateDistributor;
});
const deleteOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteDistributor = user_schema_1.UserModel.deleteOne(query);
    console.log(deleteDistributor);
    return deleteDistributor;
});
exports.default = {
    insertOne,
    insertMany,
    findById,
    findByEmail,
    find,
    updateOne,
    deleteOne,
};
