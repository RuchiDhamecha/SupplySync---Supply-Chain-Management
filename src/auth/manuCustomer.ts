import axios from "axios";
import authAxiosInstance from "./api.intercept";

export const customersScreen = async () => {
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        const customersScreenResponse = await axios.get(
            `${import.meta.env.VITE_API_URL}customer/`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "skip-browser-warning",
                }
            }
        );
        
        console.log('Response Data:', customersScreenResponse.data);
        
        return customersScreenResponse.data.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
  };