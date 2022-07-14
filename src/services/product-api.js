import axios from "axios";
import { base_url } from "./backend";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${base_url}/product/allProducts`);
    return response.data.results;
  } catch (error) {
    console.log("something went wrong in get all product api: ", error);
  }
};
export const createProduct = async (productData) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.post(
      `${base_url}/product/createNew`,
      productData,
      {
        withCredentials: true,
        headers: {
          buzzaar,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("something went wrong in create product api: ", error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${base_url}/product/details/${id}`);
    return response.data;
  } catch (error) {
    console.log("something went wrong in getProduct api: ", error);
  }
};
