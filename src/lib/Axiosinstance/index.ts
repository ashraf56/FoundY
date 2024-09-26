import { envConfig } from "@/src/config/envconfig";
import axios from "axios";


export const axiosinstance = axios.create({
    baseURL: envConfig.baseApi,

  });