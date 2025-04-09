import axios from "axios";
// import * as courseClient from "../client";
// import * as modulesClient from "./client";


const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// export const updateModule = async (module: any) => {
//   const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
//   return data;
// };

// export const deleteModule = async (moduleId: string) => {
//   const response = await axios.delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// }; 

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
 };
 
 

 export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
 };
 
