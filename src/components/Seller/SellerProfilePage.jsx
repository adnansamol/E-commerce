import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { sellerProfile } from "../../services/seller-api";

const SellerProfilePage = () => {
  const [sellerInfo, setSellerInfo] = useState({});
  // const [userLoggedOut, setUserLoggedOut] = useState(false);
  useEffect(() => {
    const sellerProfileHandler = async () => {
      const seller = await sellerProfile();

      setSellerInfo(seller.seller);
    };
    sellerProfileHandler();
  }, []);

  // const logoutUser = async () => {
  //   const response = await userLogout();
  //   console.log(response);
  //   setUserLoggedOut(true);
  // };
  return (
    <>
      {!localStorage.getItem("buzzaar") ? <Navigate to="/user/login" /> : ""}
      <div>
        <h2>Seller Information</h2>
        <h6>First name: {sellerInfo.first_name}</h6>
        <h6>Last name: {sellerInfo.last_name}</h6>
        <h6>Email: {sellerInfo.email}</h6>
        <h6>Phone Number: {sellerInfo.phone_number}</h6>
        {/* <Link to="/user/me/update">Edit Profile</Link> */}
        <button>Logout</button>
      </div>
    </>
  );
};

export default SellerProfilePage;
