import axios from "axios";
import { base_url } from "./backend";

export const getAllProducts = async (constraints) => {
  try {
    const response = await axios.get(
      `${base_url}/product/allProducts?limit=40&page=1&new=true`,
      constraints
    );
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
export const deleteProduct = async (id) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.delete(`${base_url}/product/delete/${id}`, {
      headers: { buzzaar },
    });
  } catch (error) {
    console.log("something went wrong in delete product api: ", error);
  }
};

export const updateProductImage = async (imageData, id) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.post(
      `${base_url}/product/editProductImage/${id}`,
      imageData,
      {
        headers: { buzzaar },
      }
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in image update api: ", error);
  }
};

export const addReview = async (reviewData) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.put(
      `${base_url}/product/writeReview`,
      reviewData,
      {
        headers: buzzaar,
      }
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in add review api: ", error);
  }
};
export const viewAllReviews = async (id) => {
  try {
    const response = await axios.get(`${base_url}/product/reviews?id=${id}`);
    return response.data;
  } catch (error) {
    console.log("something went wrong in view all reviews api: ", error);
  }
};
export const deleteReview = async (id) => {
  try {
    const response = await axios.delete(
      `${base_url}/product/review/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in delete review api: ", error);
  }
};
