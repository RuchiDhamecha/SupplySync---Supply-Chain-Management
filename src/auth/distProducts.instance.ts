import axios from "axios";

import authAxiosInstance from "./api.intercept";

// export const productsScreen = async () => {
//   try {
//     const productsScreenResponse = await authAxiosInstance.get('products/');
//     console.log(productsScreenResponse.data);
//     return productsScreenResponse.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const productsScreen = async () => {

    try {
        const token = localStorage.getItem('token');
        console.log(token);
      
        const productsScreenResponse = await axios.get(
            import.meta.env.VITE_API_URL+'products/'
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning":"skip-browser-warning",

                }
            });
            console.log(productsScreenResponse.data);
            
        return productsScreenResponse.data;
    }

    catch (error) {
        console.log(error);
    }
}