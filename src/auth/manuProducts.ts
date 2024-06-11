import { productsDataTypes } from "../screens/manufacturerScreen/Products/Products.types";
import axiosInstance from "./api";

export const updateProduct = async (product: productsDataTypes)=> {
  try {
    const { _id, ...updateData } = product;
    return await axiosInstance.put(`/products/${_id}`, updateData);
  } catch (error) {
    console.error("Failed to update product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    return await axiosInstance.delete(`/products/${productId}`);
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};
export const createProduct = async (product:productsDataTypes) => {
   try {
    return await axiosInstance.post('/products/addproduct', product);
   } catch (error) {
    console.error("Failed to add product:", error);
    throw error;
   }
  };



