import axios from "axios";
import { environment } from "../environments/environment";
import { error } from "console";

const API = axios.create({
  baseURL: environment.baseUrl,
});


API.interceptors.request.use(
    async (config:any) => {
        return config;
    },
    (error:any)=>{
        return Promise.reject(error)
    }
)


API.interceptors.response.use((response: any) => {
  return response;
});

export default API;
