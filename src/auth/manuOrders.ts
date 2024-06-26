import axios from 'axios';
import authAxiosInstance from './api';

export const fetchOrders = async () => {
  try {
    const pendingResponse = await axios.get('user/orders/pending');
    const approvedResponse = await axios.get('user/orders/accepted');
    const rejectedResponse = await axios.get('user/orders/rejected');
    console.log(JSON.stringify(pendingResponse.data) + "dfghjk" )
    return {
      pendingOrders: pendingResponse.data.data,
      approvedOrders: approvedResponse.data.data,
      rejectedOrders: rejectedResponse.data.data,
    };
  } catch (err) {
    throw new Error('Error fetching orders');
  }
};

export const acceptOrder = async (orderId: string) => {
  try {
    await authAxiosInstance.post(`/user/orders/accept/${orderId}`);
  } catch (err) {
    throw new Error('cant accept order');
  }
};

export const rejectOrder = async (orderId: string) => {
  try {
    await authAxiosInstance.post(`/user/orders/reject/${orderId}`);
  } catch (err) {
    throw new Error('cant rejecting order');
  }
};
