import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";
const Sidebar = ({ userInfo }) => {
  const [currentTab, setCurrentTab] = useState("Profile");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/user/me":
        setCurrentTab("Profile");
        break;
      case "/user/me/orders":
        setCurrentTab("Orders");
        break;
      case "/user/me/addresses":
        setCurrentTab("Addresses");
        break;
      default:
        break;
    }
  });
  return (
    <Bar>
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/user/me">
        <Sidetab
          style={currentTab === "Profile" ? { color: colors.primary600 } : {}}
        >
          Profile
        </Sidetab>
      </Link>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to="/user/me/orders"
      >
        <Sidetab
          style={currentTab === "Orders" ? { color: colors.primary600 } : {}}
        >
          Orders
        </Sidetab>
      </Link>
      <Sidetab
        style={currentTab === "Addresses" ? { color: colors.primary600 } : {}}
      >
        Addresses
      </Sidetab>
      {userInfo.role === "seller" && (
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/product/create"
        >
          <Sidetab
            style={currentTab === "Orders" ? { color: colors.primary600 } : {}}
          >
            Add Product
          </Sidetab>
        </Link>
      )}
    </Bar>
  );
};

export default Sidebar;

const Bar = styled.div`
  margin-right: 12px;

  @media (max-width: ${dimensions.mobileWidth}) {
    display: none;
  }
`;

const Sidetab = styled.div`
  text-decoration: none;
  width: 220px;
  font-size: 16px;
  color: black;
  font-weight: 500;
  background-color: white;
  margin-bottom: 8px;
  padding: 15px 15px;
  border-radius: 6px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
