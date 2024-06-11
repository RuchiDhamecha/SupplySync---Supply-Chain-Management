import axios from "axios";

export const productsScreen = async()=>{
    const productsScreenResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}products/`
    ,{
        headers:{
            "ngrok-skip-browser-warning": "skip-browser-warning",
        }
    });
    console.log(productsScreenResponse.data)
    return productsScreenResponse.data;
    
}