import axios from "axios";

import { base_url } from "./backend";

export const userRegister = async (userData) => {
  try {
    await axios.post(`${base_url}/user/register`, userData);
  } catch (error) {
    console.log("something went wrong in register api: ", error);
  }
};

export const userLogin = async (userData) => {
  try {
    const response = await axios.post(`${base_url}/user/login`, userData, {
      withCredentials: true,
    });
    localStorage.setItem("buzzaar", response.headers.buzzaar);
    console.log(response);
    return response;
  } catch (error) {
    console.log("something went wrong in login api: ", error);
  }
};

export const userProfile = async () => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.get(`${base_url}/user/me`, {
      withCredentials: true,
      headers: {
        buzzaar,
      },
    });
    return response.data;
  } catch (error) {
    console.log("something went wrong in user profile api: ", error);
  }
};

export const userLogout = async () => {
  try {
    const response = await axios.get(`${base_url}/user/logout`, {
      withCredentials: true,
    });
    localStorage.removeItem("buzzaar");
    return response;
  } catch (error) {
    console.log("something went wrong in user logout api: ", error);
  }
};
export const userProfileUpdate = async (updatedUserData) => {
  try {
    const buzzaar = localStorage.getItem("buzzaar");
    const response = await axios.put(
      `${base_url}/user/me/update`,
      updatedUserData,
      {
        withCredentials: true,
        headers: {
          buzzaar,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("something went wrong in user update api: ", error);
  }
};

export const userForgetPassword = async (email) => {
  try {
    await axios.post(`${base_url}/user/password/forget`, email);
  } catch (error) {
    console.log("something went wrong in password forget api: ", error);
  }
};
