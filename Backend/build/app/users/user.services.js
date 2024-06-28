"use strict";
// import userRepo from './user.repo';
// import { UserI } from './user.types';
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
// const createUser = async (userData: UserI) => {
//   return userRepo.insertOne(userData);
// };
// const createUsers = async (userDataArray: UserI[]) => {
//   return userRepo.insertMany(userDataArray);
// };
// const getUserById = async (id: string) => {
//   return userRepo.findById(id);
// };
// const getUserByEmail = async (email: string) => {
//   return userRepo.findByEmail(email);
// };
// const updateUser = async (id: string, updateData: Partial<UserI>) => {
//   return userRepo.updateOne({ _id: id }, updateData);
// };
// const deleteUser = async (id: string) => {
//   return userRepo.deleteOne({ _id: id });
// };
// const getUsers = async (query: Partial<UserI>) => {
//   return userRepo.find(query);
// };
// export default {
//   createUser,
//   createUsers,
//   getUserById,
//   getUserByEmail,
//   updateUser,
//   deleteUser,
//   getUsers,
// };
const user_repo_1 = __importDefault(require("./user.repo"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.insertOne(userData);
});
const createUsers = (userDataArray) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.insertMany(userDataArray);
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.findById(id);
});
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.findByEmail(email);
});
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.updateOne({ _id: id }, updateData);
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.deleteOne({ _id: id });
});
const getUsers = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return user_repo_1.default.find(query);
});
const getDistributors = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.find(filter);
    }
    catch (e) {
        throw e;
    }
});
const updateDistributor = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.updateOne({ _id: id }, updateData);
    }
    catch (e) {
        throw e;
    }
});
const deleteDistributor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.deleteOne({ _id: id });
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    createUser,
    createUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser,
    getUsers,
    getDistributors,
    updateDistributor,
    deleteDistributor
};
