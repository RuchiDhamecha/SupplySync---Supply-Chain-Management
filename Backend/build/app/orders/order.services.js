"use strict";
// import orderRepo from './order.repo';
// import { OrderI } from './order.types';
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
// const createOrder = async (orderData: OrderI) => {
//   return orderRepo.insertOrder(orderData);
// };
// const getOrderById = async (id: string) => {
//   return orderRepo.findOrderById(id);
// };
// const getOrdersByUserId = async (user_id: string, onModel: 'User' | 'Customer') => {
//   return orderRepo.findOrdersByUserId(user_id, onModel);
// };
// const updateOrderStatus = async (id: string, status: string) => {
//   return orderRepo.updateOrderStatus(id, status);
// };
// const getAllOrders = async (query: Partial<OrderI>) => await orderRepo.getAllOrders(query)
// export default {
//   createOrder,
//   getOrderById,
//   getOrdersByUserId,
//   updateOrderStatus,
//   getAllOrders
// };
const order_repo_1 = __importDefault(require("./order.repo"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    return order_repo_1.default.insertOrder(orderData);
});
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return order_repo_1.default.findOrderById(id);
});
const getOrdersByUserId = (user_id, onModel) => __awaiter(void 0, void 0, void 0, function* () {
    return order_repo_1.default.findOrdersByUserId(user_id, onModel);
});
const updateOrderStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    return order_repo_1.default.updateOrderStatus(id, status);
});
const getAllOrders = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_repo_1.default.getAllOrders(query);
        return orders;
    }
    catch (e) {
        throw e;
    }
});
exports.default = {
    createOrder,
    getOrderById,
    getOrdersByUserId,
    updateOrderStatus,
    getAllOrders
};
