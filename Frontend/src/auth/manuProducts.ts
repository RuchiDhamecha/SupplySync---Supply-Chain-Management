import axios from "axios";
import { productsDataTypes } from "../screens/manufacturerScreen/Products/Products.types";
import axiosInstance from "./api";
import authAxiosInstance from "./api.intercept";

export const productsScreen = async () => {
  try {
    const productsScreenResponse = await authAxiosInstance.get('products/');
   const products = productsScreenResponse.data.data.products
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (product: productsDataTypes) => {
  try {
    const { _id, ...updateData } = product;
    const response = await authAxiosInstance.put(`/products/${_id}`, updateData);
    console.log("Update product response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await authAxiosInstance.delete(`/products/${productId}`);
    
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createProduct = async (product: productsDataTypes) => {
  try {
    const response = await authAxiosInstance.post('/products/addproduct', product);
    
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


