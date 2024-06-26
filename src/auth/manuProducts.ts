import axios from "axios";
import { productsDataTypes } from "../screens/manufacturerScreen/Products/Products.types";
import axiosInstance from "./api";
import authAxiosInstance from "./api.intercept";

export const productsScreen = async () => {
  try {
    const productsScreenResponse = await authAxiosInstance.get('products/');
    console.log(productsScreenResponse.data);
    return productsScreenResponse.data;
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
    console.error("Failed to update product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await authAxiosInstance.delete(`/products/${productId}`);
    // console.log("Delete product response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};

export const createProduct = async (product: productsDataTypes) => {
  try {
    const response = await authAxiosInstance.post('/products/addproduct', product);
    // console.log("Create product response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to add product:", error);
    throw error;
  }
};


