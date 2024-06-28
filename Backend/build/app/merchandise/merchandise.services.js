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
const merchandise_repo_1 = __importDefault(require("./merchandise.repo"));
const merchandise_responses_1 = require("./merchandise.responses");
const createMerch = (merch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield merchandise_repo_1.default.insertOne(merch);
    }
    catch (e) {
        throw e;
    }
});
const getAllMerch = (query) => __awaiter(void 0, void 0, void 0, function* () { return yield merchandise_repo_1.default.find(query); });
// const find = async (query: Partial<MerchandiseI>) => await userRepo.find(query)
const getMerchById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const merch = yield merchandise_repo_1.default.findById(id);
        if (!merch) {
            throw merchandise_responses_1.merchandiseResponses.MERCHANDISE_ID_REQUIRED;
        }
        return merch;
    }
    catch (e) {
        throw e;
    }
});
const updateMerch = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield merchandise_repo_1.default.updateOne({ _id: id }, updateData);
    }
    catch (e) {
        throw e;
    }
});
const deleteMerch = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield merchandise_repo_1.default.deleteOne({ _id: id });
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    createMerch,
    getAllMerch,
    getMerchById,
    updateMerch,
    deleteMerch,
};
