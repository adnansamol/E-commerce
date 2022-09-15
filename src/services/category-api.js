import axios from "axios";
import { base_url } from "./backend";

export const createCategory = async (CategoryData) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.post(
      `${base_url}/categories/create`,
      CategoryData,
      {
        headers: { buzzaar },
      }
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in create category api: ", error);
  }
};
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${base_url}/categories/getAllCategories`);
    return response.data;
  } catch (error) {
    console.log("somethign went wrong in all category api", error);
  }
};
export const getCategory = async (id) => {
  try {
    const response = await axios.get(
      `${base_url}/categories/singleCategory/:id`,
      id
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in get category api: ", error);
  }
};
