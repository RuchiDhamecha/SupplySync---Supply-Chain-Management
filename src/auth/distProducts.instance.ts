import axios from "axios";

// export const productsScreen = async()=>{
//     const productsScreenResponse = await axios.get(
//         `${import.meta.env.VITE_API_URL}products/`
//     ,{
//         headers:{
//             "ngrok-skip-browser-warning": "skip-browser-warning",
//         }
//     });
//     console.log(productsScreenResponse.data)
//     return productsScreenResponse.data;
    
// }


// import axios from "axios";
import axiosInstance from "./api";

export const productsScreen = async () => {

    try {
        const token = localStorage.getItem('token');
        console.log(token);
        
        // const parsedToken = token ? JSON.parse(token) : null;
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