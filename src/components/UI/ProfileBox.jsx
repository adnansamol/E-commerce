import React from "react";
import styled from "styled-components";
const ProfileBox = ({ children }) => {
  return <ProfileDetail>{children}</ProfileDetail>;
};

export default ProfileBox;

const ProfileDetail = styled.div`
  flex: 1;
  background-color: white;
  padding: 28px;
  padding-top: 12px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
