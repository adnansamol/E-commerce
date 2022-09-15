import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";
const ProfileUI = ({ renderComponent, userInfo }) => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfilePicture>
            <div>{userInfo.first_name.charAt(0).toUpperCase()}</div>
          </ProfilePicture>
          <Username>
            {userInfo.first_name} {userInfo.last_name}
          </Username>
        </ProfileContainer>
        <BottomSection>
          <Sidebar userInfo={userInfo} />
          {renderComponent}
        </BottomSection>
      </Container>
    </>
  );
};

export default ProfileUI;

const Container = styled.div`
  display flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  margin-top: 120px;
  @media (min-width: 1920px){
    width: 55%;
  }

  @media (max-width: ${dimensions.mobileWidth}){
    width: 100%;
  }
`;
const BottomSection = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 80px;
  padding-bottom: 30px;
  background-color: ${colors.primary500};
  height: 220px;

  @media (max-width: ${dimensions.mobileWidth}) {
    padding-left: 40px;
    height: 180px;
  }
`;
const ProfilePicture = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  background-color: #d8d8d8;
  border-radius: 50%;
  align-items: center;
  > * {
    margin: auto;
    font-size: 42px;
    font-weight: 600;
    color: grey;
  }
`;
const Username = styled.div`
  font-size: 26px;
  margin-left: 18px;
  margin-bottom: 12px;
  font-weight: 600;
  color: white;
`;
