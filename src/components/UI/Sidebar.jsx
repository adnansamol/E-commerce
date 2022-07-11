import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("Profile");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/user/me":
        setCurrentTab("Profile");
        break;
      case "/user/me/orders":
        setCurrentTab("Orders");
        break;
      default:
        break;
    }
  });
  return (
    <Bar>
      <Sidetab
        style={currentTab === "Profile" ? { color: colors.primary600 } : ""}
      >
        Profile
      </Sidetab>
      <Sidetab>Orders</Sidetab>
      <Sidetab>Addresses</Sidetab>
      <Sidetab>Add Products</Sidetab>
    </Bar>
  );
};

export default Sidebar;

const Bar = styled.div`
  margin-right: 12px;
`;
const Sidetab = styled.div`
  width: 220px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  margin-bottom: 8px;
  padding: 15px 15px;
  border-radius: 6px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
