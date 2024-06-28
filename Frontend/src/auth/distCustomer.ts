import axios from "axios";
import authAxiosInstance from "./api.intercept";
import { CustomersDataTypesD } from "../screens/distributorScreen/Customers/Customers.types";

export const customersScreen = async () => {

    try {
        const customersScreenResponse = await authAxiosInstance.get('customer/');
            console.log(customersScreenResponse.data);
            
        return customersScreenResponse.data.data;
    }
  
    catch (error) {
        console.log(error);
    }
  }
  export const updateCustomer = async (customer: CustomersDataTypesD) => {
    try {
      const { _id, ...updateData } = customer;
      const response = await authAxiosInstance.put(`/customer/${_id}`, updateData);
      console.log("Update customer response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to update customer:", error);
      throw error;
    }
  };
  
  export const deleteCustomer = async (customerId: string) => {
    try {
      const response = await authAxiosInstance.delete(`/customer/${customerId}`);
      // console.log("Delete customer response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to delete customer:", error);
      throw error;
    }
  };
  
  export const createCustomer = async (customer: CustomersDataTypesD) => {
    try {
      const response = await authAxiosInstance.post('/customer/addcustomer', customer);
      // console.log("Create customer response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to add customer:", error);
      throw error;
    }
  };
  
  
  