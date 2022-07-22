import axios from "axios";
import { base_url } from "./backend";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${base_url}/categories/getAllCategories`);
    return response.data;
  } catch (error) {
    console.log("somethign went wrong in all category api", error);
  }
};
