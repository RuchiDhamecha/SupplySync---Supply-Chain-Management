import axios from "axios";
import axiosInstance from "./api";
import { RewardsDataType } from "../screens/manufacturerScreen/Rewards/Rewards.types";

export const rewardsScreen = async()=>{
    const rewardsScreenResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}merchandise/`
    ,{
        headers:{
            "ngrok-skip-browser-warning": "skip-browser-warning",
        }
    });
    console.log(rewardsScreenResponse.data)
    return rewardsScreenResponse.data;
    
}

export const updatereward = async (reward: RewardsDataType)=> {
    try {
      const { _id, ...updateData } = reward;
      return await axiosInstance.put(`/merchandise/${_id}`, updateData);
    } catch (error) {
      console.error("Failed to update reward:", error);
      throw error;
    }
  };
  
  export const deletereward = async (rewardId: string) => {
    try {
      return await axiosInstance.delete(`/merchandise/${rewardId}`);
    } catch (error) {
      console.error("Failed to delete reward:", error);
      throw error;
    }
  };
  export const createreward = async (reward:RewardsDataType) => {
     try {
      return await axiosInstance.post('/merchandise/addmerch', reward);
     } catch (error) {
      console.error("Failed to add reward:", error);
      throw error;
     }
    };
  
  
  
  