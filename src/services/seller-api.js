import axios from "axios";
import { base_url } from "./backend";

export const sellerRegister = async (sellerData) => {
  try {
    const response = await axios.post(
      `${base_url}/seller/register`,
      sellerData
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong in seller register api: ", error);
  }
};
export const sellerLogin = async (sellerData) => {
  try {
    const response = await axios.post(`${base_url}/seller/login`, sellerData, {
      withCredentials: true,
    });
    localStorage.setItem("buzzaar", response.headers.buzzaar);
    return response.data;
  } catch (error) {
    console.log("something went wrong in seller register api: ", error);
  }
};
export const sellerProfile = async () => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.get(`${base_url}/seller/me`, {
      withCredentials: true,
      headers: {
        buzzaar,
      },
    });
    return response.data;
  } catch (error) {
    console.log("something went wrong in seller profile api: ", error);
  }
};
