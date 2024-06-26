import axios from "axios";
import authAxiosInstance from "./api.intercept";
import { DistributorsDataTypes } from "../screens/manufacturerScreen/Distributors/Distributors.types";

export const distributorsScreen = async () => {

    try {
        const distributorsScreenResponse = await authAxiosInstance.get('user/distributors');
        return distributorsScreenResponse.data.data.map((data:any)=>{
            return { ...data.details[0], _id: data._id};
        });
       
    }
  
    catch (error) {
        console.log(error);
    }
  }
  export const updateDistributor = async (distributor: DistributorsDataTypes) => {
    try {
      const { _id, ...updateData } = distributor;
      const response = await authAxiosInstance.put(`user/distributor/${_id}`, updateData);
      console.log("Update distributor response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to update distributor:", error);
      throw error;
    }
  };
  
  export const deleteDistributor = async (distributorId: string) => {
    try {
      const response = await authAxiosInstance.delete(`/user/distributor/${distributorId}`);
      return response.data;
    } catch (error) {
      console.error("Failed to delete distributor:", error);
      throw error;
    }
  };
  
  export const createDistributor = async (distributor: DistributorsDataTypes) => {
    try {
      const response = await authAxiosInstance.post('/user/register', distributor);
      return response.data;
    } catch (error) {
      console.error("Failed to add distributor:", error);
      throw error;
    }
  };
  
  
  