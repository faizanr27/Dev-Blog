import axios from "axios"
import { BACKEND_URL } from "../config";

export const loginUser = async (
    name:string,
    password:string
)=>{
    const res = await axios.post(`${BACKEND_URL}/auth/login`,{name, password});
    if(res.status != 200){
        throw new Error("Unable to Login.")
    }

    const data = await res.data;
    console.log('userID',data.id)
    localStorage.setItem('userID',data.id)

    return data;
}

export const signUpUser = async (
    name:string,
    email: string,
    password:string
)=>{
    const res = await axios.post(`${BACKEND_URL}/auth/signup`,{name,email, password});
    if(res.status != 201){
        throw new Error("Unable to Sign Up User.")
    }

    const data = await res.data;
    localStorage.setItem('userID',data.id)
    return data;
}



export const checkAuthStatus = async () => {
    try{
      console.log(localStorage.getItem('userID'))
        const res = await axios.get(`${BACKEND_URL}/auth/status`,{
          withCredentials: true,
        });
        if(res.status===403 || res.status===401){
            throw new Error("Error caught successfully")
        }
        const data = await res.data;
        return data;
    }
    catch(error){
        return null;
    }
  };