import authAxiosInstance from './api.intercept';

export const fetchOrders = async () => {
  try {
    const pendingResponse = await authAxiosInstance.get('user/orders/pending');
    const acceptedResponse = await authAxiosInstance.get('user/orders/accepted');
    const rejectedResponse = await authAxiosInstance.get('user/orders/rejected');
    return {
      pendingOrders: pendingResponse.data.data,
      acceptedOrders: acceptedResponse.data.data,
      rejectedOrders: rejectedResponse.data.data,
    };
  } catch (err) {
    throw new Error('Error fetching orders');
  }
};

export const acceptOrder = async (orderId: string) => {
  try {
    const response=await authAxiosInstance.put(`/user/orders/DistributorAccept/${orderId}`,{
        order_status:"accepted"
    });
    console.log(response);
    return response;
  } catch (err) {
    throw new Error('cant accept order');
  }
};

export const rejectOrder = async (orderId: string) => {
  try {
    await authAxiosInstance.put(`/user/orders/DistributorReject/${orderId}`, {
        order_status:"rejected"
    });
  } catch (err) {
    throw new Error('cant rejecting order');
  }
};
