// import { OrderModel, OrderDocument } from './order.schema';
// import { OrderI } from './order.types';

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


import { OrderModel, OrderDocument } from './order.schema';
import { OrderI } from './order.types';

const insertOrder = async (orderData: OrderI) => {
  const newOrder = new OrderModel(orderData);
  return newOrder.save();
};

const findOrderById = async (id: string) => {
  return OrderModel.findById(id);
};

const getAcceptedOrdersByDistributorId = async (distributor_id: string) => {
  return OrderModel.find({ user_id: distributor_id, order_status: 'accepted' });
};

const getRejectedOrdersByDistributorId = async (distributor_id: string) => {
  return OrderModel.find({ user_id: distributor_id, order_status: 'rejected' });
};

const getPendingOrdersByDistributorId = async (distributor_id: string) => {
  return OrderModel.find({ user_id: distributor_id, order_status: 'pending' });
};

const findOrdersByUserId = async (user_id: string, onModel: 'User' | 'Customer') => {
  return OrderModel.find({ user_id, onModel });
};

const getAllOrders = async (query: Partial<OrderI>): Promise<OrderDocument[]> => {
  try {
    const getAllOrders = await OrderModel.find(query)
    console.log(getAllOrders);
    return getAllOrders;
  } catch (error) {
    throw error;
  }
};

const updateOrderStatus = async (id: string, status: string) => {
  return OrderModel.findByIdAndUpdate(id, { order_status: status }, { new: true });
};

export default {
  insertOrder,
  findOrderById,
  findOrdersByUserId,
  updateOrderStatus,
  getAcceptedOrdersByDistributorId,
  getAllOrders,
  getRejectedOrdersByDistributorId,
  getPendingOrdersByDistributorId
};
