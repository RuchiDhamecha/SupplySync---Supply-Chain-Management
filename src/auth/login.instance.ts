import { LoginFormInputs } from "../components/Login/Login.types";
import axiosInstance from "./api";

export interface LoginResponse {
  token: string;
  roleId: Array<number>;
}


export const login = async (data: LoginFormInputs) => {
  try {
    const response = await axiosInstance.post('auth/login', data)
    // console.log(`res : ${JSON.parse(JSON.stringify(response.data))}`)
    return response.data.data;
  } catch (e) {
    console.log(e)
    throw e
  }
}
