import axios from "axios";
import { base_url } from "./backend";
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
