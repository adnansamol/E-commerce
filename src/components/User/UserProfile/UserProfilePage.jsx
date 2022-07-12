import { CreateOutlined } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../../constants/colors";
import { userLogout, userProfile } from "../../../services/user-api";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../UI/Sidebar";
const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userLoggedOut, setUserLoggedOut] = useState(false);

  useEffect(() => {
    const userProfileHandler = async () => {
      setIsLoading(true);
      const user = await userProfile();
      setUserInfo(user.user);
      setIsLoading(false);
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
      {!localStorage.getItem("buzzaar") ? <Navigate to="/" /> : ""}
      <Navbar />
      {isLoading ? (
        <LoadingContainer>
          <LoadingWheel></LoadingWheel>
        </LoadingContainer>
      ) : (
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
              <Sidebar />
              <ProfileDetail>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>Profile</h2>
                  <EditProfile>
                    <CreateOutlined />
                    <Link to="/user/me/update">Edit Profile</Link>
                  </EditProfile>
                </div>
                <Label
                  style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}
                >
                  Join date:{" "}
                  {new Date(userInfo.createdAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Label>
                <hr />
                <h3>About</h3>
                <Label>First Name</Label>
                <Text>{userInfo.first_name}</Text>
                <Label>Last Name</Label>
                <Text>{userInfo.last_name}</Text>
                <Label>Email</Label>
                <Text>{userInfo.email}</Text>
                <Label>Phone</Label>
                <Text>{userInfo.phone_number}</Text>
                <Logout onClick={logoutUser}>Logout</Logout>
              </ProfileDetail>
            </BottomSection>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default UserProfilePage;

const Container = styled.div`
  display flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  @media (min-width: 1920px){
    width: 55%;
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
const ProfileDetail = styled.div`
  flex: 1;
  background-color: white;
  padding: 28px;
  padding-top: 12px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const EditProfile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.primary600};
  padding: 6px 15px;
  * {
    text-decoration: none;
    color: ${colors.primary600};
  }
`;
const Label = styled.div`
  font-size: 14px;
`;
const Text = styled.div`
  font-size: 18px;
  margin: 4px 0;
  color: rgba(0, 0, 0, 0.6);
  > last-child {
    margin-top: 4px;
  }
`;
const Logout = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.error500};
  margin-top: 20px;
  padding: 6px 15px;
  background-color: white;
  font-size: 16px;
  color: ${colors.error500};
  cursor: pointer;
`;
const LoadingContainer = styled.div`
  margin: auto;
  margin-top: 200px;
  width: fit-content;
`;

const LoadingKeyframes = keyframes`
  from {transform: rotate(0deg);}
  to  {transform: rotate(360deg);}
`;
const LoadingWheel = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid white;
  border-top: 8px solid ${colors.primary500};
  border-radius: 50%;
  animation-name: ${LoadingKeyframes};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
`;
