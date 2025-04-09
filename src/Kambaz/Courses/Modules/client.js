import axios from "axios";
// import * as modulesClient from "./client";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async (moduleId) => {
 const response = await axiosWithCredentials.delete(
   `${MODULES_API}/${moduleId}`
 );
 return response.data;
};

export const updateModule = async (module) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
 };
 

