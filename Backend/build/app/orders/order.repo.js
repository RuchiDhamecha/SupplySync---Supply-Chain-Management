"use strict";
// import { OrderModel, OrderDocument } from './order.schema';
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
Object.defineProperty(exports, "__esModule", { value: true });
// const insertOrder = async (orderData: OrderI) => {
//   const newOrder = new OrderModel(orderData);
//   return newOrder.save();
// };
// const findOrderById = async (id: string) => {
//   return OrderModel.findById(id);
// };
// const getAcceptedOrdersByDistributorId = async (distributor_id: string) => {
//   return OrderModel.find({ distributor_id, order_status: 'accepted' });
// };
// const findOrdersByUserId = async (user_id: string, onModel: 'User' | 'Customer') => {
//   return OrderModel.find({ user_id, onModel });
// };
// const getAllOrders = async (query: Partial<OrderI>): Promise<OrderDocument[]> => {
//   try {
//     const getAllOrders = await OrderModel.find(query)
//     console.log(getAllOrders);
//     return getAllOrders;
//   } catch (error) {
//     throw error;
//   }
// };
// const updateOrderStatus = async (id: string, status: string) => {
//   return OrderModel.findByIdAndUpdate(id, { order_status: status }, { new: true });
// };
// export default {
//   insertOrder,
//   findOrderById,
//   findOrdersByUserId,
//   updateOrderStatus,
//   getAcceptedOrdersByDistributorId,
//   getAllOrders
// };
const order_schema_1 = require("./order.schema");
const insertOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = new order_schema_1.OrderModel(orderData);
    return newOrder.save();
});
const findOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.findById(id);
});
const getAcceptedOrdersByDistributorId = (distributor_id) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.find({ user_id: distributor_id, order_status: 'accepted' });
});
const getRejectedOrdersByDistributorId = (distributor_id) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.find({ user_id: distributor_id, order_status: 'rejected' });
});
const getPendingOrdersByDistributorId = (distributor_id) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.find({ user_id: distributor_id, order_status: 'pending' });
});
const findOrdersByUserId = (user_id, onModel) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.find({ user_id, onModel });
});
const getAllOrders = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllOrders = yield order_schema_1.OrderModel.find(query);
        console.log(getAllOrders);
        return getAllOrders;
    }
    catch (error) {
        throw error;
    }
});
const updateOrderStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    return order_schema_1.OrderModel.findByIdAndUpdate(id, { order_status: status }, { new: true });
});
exports.default = {
    insertOrder,
    findOrderById,
    findOrdersByUserId,
    updateOrderStatus,
    getAcceptedOrdersByDistributorId,
    getAllOrders,
    getRejectedOrdersByDistributorId,
    getPendingOrdersByDistributorId
};
