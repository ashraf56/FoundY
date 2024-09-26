
'use server'
import { FieldValues } from "react-hook-form";

import { axiosinstance } from "@/src/lib/Axiosinstance"
import { cookies } from "next/headers";


export const registerUser = async (u:FieldValues)=>{
    try {
        const {data} = await axiosinstance.post('/auth/register',u)
         
        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken);
            cookies().set("refreshToken", data?.data?.refreshToken);
          }
      
          return data;
       
       
    } catch (error:any) {
        throw new Error(error);
        
    }
}