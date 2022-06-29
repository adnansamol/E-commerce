import axios from "axios";

const base_url = "https://buzzaar.herokuapp.com/api/v1";

export const userRegister = async (userData) => {
  try {
    await axios.post(`${base_url}/user/register`, userData);
  } catch (error) {
    console.log("something went wrong in register api: ", error);
  }
};

export const userLogin = async (userData) => {
  try {
    const response = await axios.post(`${base_url}/user/login`, userData);
    return ({ token } = response.data);
  } catch (error) {
    console.log("something went wrong in login api: ", error);
  }
};

export const userProfile = async () => {
  try {
    const response = await axios.get(`${base_url}/user/me`);
    return response.data;
  } catch (error) {
    console.log("something went wrong in user profile api: ", error);
  }
};

export const userLogout = async () => {
  try {
    const response = await axios.get(`${base_url}/user/logout`);
    return response;
  } catch (error) {
    console.log("something went wrong in user logout api: ", error);
  }
};
