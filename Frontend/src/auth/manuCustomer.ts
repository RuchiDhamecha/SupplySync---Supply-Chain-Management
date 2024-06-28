import axios from "axios";
import authAxiosInstance from "./api.intercept";

export const customersScreen = async () => {
    try {
        const customersScreenResponse = await authAxiosInstance.get(`customer/`);

        console.log('Response Data:', customersScreenResponse.data);

        return customersScreenResponse.data.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
};