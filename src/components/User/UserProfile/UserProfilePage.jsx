import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  userLogout,
  userProfile,
  userProfileUpdate,
} from "../../../services/user-api";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const userProfileHandler = async () => {
      const user = await userProfile();

      setUserInfo(user.user);
    };
    userProfileHandler();
  }, []);

  const updateUserHandler = async () => {
    const response = await userProfileUpdate({
      first_name: "EFGH",
      last_name: "IJKLM",
      email: "abcxyz@gmail.com",
      phone_number: 1234566670,
      public_id: "public_id",
      url: "url",
    });
  };
  const logoutUser = async () => {
    await userLogout();
  };
  return (
    <div>
      <h2>User Information</h2>
      <h6>First name: {userInfo.first_name}</h6>
      <h6>Last name: {userInfo.last_name}</h6>
      <h6>Email: {userInfo.email}</h6>
      <h6>Phone Number: {userInfo.phone_number}</h6>
      <button onClick={updateUserHandler}>Update user</button>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default UserProfilePage;
