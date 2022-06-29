import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userProfile } from "../../../services/user-api";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    userProfileHandler();
  }, []);
  const userProfileHandler = async () => {
    const user = await userProfile();
    setUserInfo((currentState) => ({ ...currentState, user }));
  };
  return (
    <div>
      <h2>User Information</h2>
      <h6>First name: {userInfo.first_name}</h6>
      <h6>Last name: {userInfo.last_name}</h6>
      <h6>Email: {userInfo.email}</h6>
      <h6>Phone Number: {userInfo.phone_number}</h6>
    </div>
  );
};

export default UserProfilePage;
