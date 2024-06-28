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
const merchandise_schema_1 = require("./merchandise.schema");
const insertOne = (merchData) => __awaiter(void 0, void 0, void 0, function* () {
    const newMerch = new merchandise_schema_1.RewardModel(merchData);
    console.log(newMerch);
    return newMerch.save();
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getMerchById = merchandise_schema_1.RewardModel.findById(id);
        console.log(getMerchById);
        return getMerchById;
    }
    catch (e) {
        throw e;
    }
});
const find = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const getAllMerch = merchandise_schema_1.RewardModel.find(query);
    console.log(getAllMerch);
    return getAllMerch;
});
const updateOne = (query, update) => __awaiter(void 0, void 0, void 0, function* () {
    const merchandise = merchandise_schema_1.RewardModel.updateOne(query, update);
    console.log(merchandise);
    return merchandise;
});
const deleteOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteMerch = merchandise_schema_1.RewardModel.deleteOne(query);
    console.log(deleteMerch);
    return deleteMerch;
});
exports.default = {
    insertOne,
    findById,
    find,
    updateOne,
    deleteOne,
};
