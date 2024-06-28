// import orderRepo from './order.repo';
// import { OrderI } from './order.types';

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

import orderRepo from './order.repo';
import { OrderI } from './order.types';

const createOrder = async (orderData: OrderI) => {
  return orderRepo.insertOrder(orderData);
};

const getOrderById = async (id: string) => {
  return orderRepo.findOrderById(id);
};

const getOrdersByUserId = async (user_id: string, onModel: 'User' | 'Customer') => {
  return orderRepo.findOrdersByUserId(user_id, onModel);
};

const updateOrderStatus = async (id: string, status: string) => {
  return orderRepo.updateOrderStatus(id, status);
};

const getAllOrders = async (query: Partial<OrderI>) => 
 {
   try {
    const orders = await orderRepo.getAllOrders(query)
    return orders;
  } catch (e) {
    throw e
  } 
}
export default {
  createOrder,
  getOrderById,
  getOrdersByUserId,
  updateOrderStatus,
  getAllOrders
};
