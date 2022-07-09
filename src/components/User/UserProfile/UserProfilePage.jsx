import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  userLogout,
  userProfile,
  userProfileUpdate,
} from "../../../services/user-api";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userLoggedOut, setUserLoggedOut] = useState(false);
  useEffect(() => {
    const userProfileHandler = async () => {
      const user = await userProfile();

      setUserInfo(user.user);
    };
    userProfileHandler();
  }, []);

  const logoutUser = async () => {
    const response = await userLogout();
    console.log(response);
    setUserLoggedOut(true);
  };
  return (
    <>
      {!localStorage.getItem("buzzaar") ? <Navigate to="/user/login" /> : ""}
      <div>
        <h2>User Information</h2>
        <h6>First name: {userInfo.first_name}</h6>
        <h6>Last name: {userInfo.last_name}</h6>
        <h6>Email: {userInfo.email}</h6>
        <h6>Phone Number: {userInfo.phone_number}</h6>
        <Link to="/user/me/update">Edit Profile</Link>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </>
  );
};

export default UserProfilePage;
