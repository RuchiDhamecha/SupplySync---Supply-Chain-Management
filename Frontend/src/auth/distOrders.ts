import axios from "axios";
import { ordersDataTypes } from "../screens/distributorScreen/Orders/Orders.types";
import authAxiosInstance from "./api.intercept";


export const ordersScreen = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log(token);
    
    const ordersScreenResponse = await axios.get(
      import.meta.env.VITE_API_URL + 'products/', 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "skip-browser-warning",
        }
      }
    );
    console.log(ordersScreenResponse.data);
    
    return ordersScreenResponse.data.data;
  } catch (error) {
    console.log(error);
  }
};


export const addToCart = async (order: { product_name: string, product_price: number, quantity: number }) => {
  try {
    const payload = {
      products: [order]
    };
    console.log("Add to Cart payload:", payload);  
    await authAxiosInstance.post("/user/cart", payload);
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to add to cart");
  }
};

export const fetchCartOrders = async () => {
  try {
    const response = await authAxiosInstance.get('/cart');
    console.log("Fetch cart orders response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch cart orders:", error);
    throw error;
  }
};

export const placeOrderNow = async (order: { product_name: string, product_price: number, quantity: number }) => {
  try {
    const payload = {
      products: [order]
    };
    console.log("Place Order Now payload:", payload);  
    const response = await authAxiosInstance.post("/user/orders/distributorOrder", payload);
    console.log("Server response:", response.data);  
    return response.data;
  } catch (error: any) {
    console.error("Place Order Now error:", error.response.data);  
    throw new Error(error.response.data.message || "Failed to place order");
  }
};
