import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { userProfileUpdate, userProfile } from "../../../services/user-api";
import styled, { keyframes } from "styled-components";
import { colors } from "../../../constants/colors";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Sidebar from "../../UI/Sidebar";
const UpdateUserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const userProfileHandler = async () => {
      setIsLoading(true);
      const user = await userProfile();
      setUserInfo(user.user);
      setIsLoading(false);
    };
    userProfileHandler();
  }, []);

  const navigate = useNavigate();
  const updateUserHandler = async (event) => {
    event.preventDefault();

    const response = await userProfileUpdate({
      first_name: document.getElementById("fname").value,
      last_name: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      phone_number: +document.getElementById("phone").value,
      public_id: "public_id",
      url: "url",
    });
    navigate("/user/me");
  };
  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <LoadingWheel></LoadingWheel>
        </LoadingContainer>
      ) : (
        <>
          <Navbar />
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
                  <h2 style={{ flex: 1 }}>My Account</h2>

                  <EditProfile>
                    <Link to="/user/me">Discard</Link>
                  </EditProfile>
                  <EditProfile
                    onClick={updateUserHandler}
                    style={{ marginLeft: 15 }}
                  >
                    Update Info
                  </EditProfile>
                </div>
                <Label
                  style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}
                >
                  View and edit your personal details below.
                </Label>
                <hr />
                <h3>Account</h3>
                <Label
                  style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}
                >
                  Update and Edit the information you share with the community
                </Label>

                <div style={{ display: " flex" }}>
                  <div style={{ marginRight: 60 }}>
                    <Label>First Name</Label>
                    <Input id="fname" defaultValue={userInfo.first_name} />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input id="lname" defaultValue={userInfo.last_name} />
                  </div>
                </div>
                <div style={{ display: " flex" }}>
                  <div style={{ marginRight: 60 }}>
                    <Label>Email</Label>
                    <Input id="email" defaultValue={userInfo.email} />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input id="phone" defaultValue={userInfo.phone_number} />
                  </div>
                </div>
              </ProfileDetail>
            </BottomSection>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default UpdateUserProfilePage;
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
  border-radius: 10px;
  cursor: pointer;
  * {
    text-decoration: none;
    color: ${colors.primary600};
  }
  &:last-child {
    background-color: ${colors.primary600};
    color: white;
  }
`;
const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;
const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 280px;
  padding: 12px;
  margin-bottom: 12px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary500};
  }

  @media (max-width: 1920px) {
    width: 170px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  margin: 4px 0;
  color: rgba(0, 0, 0, 0.6);
  > last-child {
    margin-top: 4px;
  }
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
