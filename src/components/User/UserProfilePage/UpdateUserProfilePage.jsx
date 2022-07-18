import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { userProfileUpdate, userProfile } from "../../../services/user-api";
import styled from "styled-components";
import { colors } from "../../../constants/colors";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Loading from "../../UI/Loading";
import ProfileUI from "../../UI/ProfileUI";
const UpdateUserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const userProfileHandler = async () => {
      const user = await userProfile();
      setUserInfo(user.user);
      setIsLoading(false);
    };
    userProfileHandler();
  }, []);

  const navigate = useNavigate();
  const updateUserHandler = async (event) => {
    event.preventDefault();

    await userProfileUpdate({
      first_name: document.getElementById("fname").value,
      last_name: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      phone_number: +document.getElementById("phone").value,
      public_id: "public_id",
      url: "url",
    });
    navigate("/user/me");
  };

  const profileComponent = (
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
        <EditProfile onClick={updateUserHandler} style={{ marginLeft: 15 }}>
          Update Info
        </EditProfile>
      </div>
      <Label style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}>
        View and edit your personal details below.
      </Label>
      <hr />
      <h3>Account</h3>
      <Label style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}>
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
  );
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileUI renderComponent={profileComponent} userInfo={userInfo} />
        </>
      )}
      <Footer />
    </>
  );
};

export default UpdateUserProfilePage;

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
  width: 170px;
  padding: 12px;
  margin-bottom: 12px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary500};
  }

  @media (min-width: 1920px) {
    width: 280px;
  }
`;
