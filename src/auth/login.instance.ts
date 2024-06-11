import { LoginFormInputs } from "../components/Login/Login.types";
import axiosInstance from "./api";
import axios from 'axios'; 

export interface LoginResponse {
  token: string;
  roleId: Array<number>;
}

// export const login = async (username: string, password: string): Promise<LoginResponse> => {
//   const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, { username, password });
//   return response.data;
// };


export const login = async (data:LoginFormInputs) =>{
    try{
      // console.log(`res : ${data}`)
      console.log('dataa')
        const response = await axiosInstance.post('auth/login',data )
      console.log('dataa22222')

        console.log(`res : ${JSON.parse(JSON.stringify(response.data))}`)
        return response.data.user;
    }catch(e){
      console.log(e)
        throw e
    }
}
// export const login = async (email: string, password: string) => {
//   try {
//     console.log(email,password);
    
//     const response = await axios.post(
//       `${import.meta.env.VITE_API_URL}/auth/login`,
//       { email, password }
//     );
//     console.log(response.data.user);
//     return response.data.user;
//   } catch (error) {
//     throw error
//   }
// }