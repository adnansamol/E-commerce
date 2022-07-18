// import { CreateOutlined } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { UserContext } from "../../../context/user-context";
import { sellerProfile } from "../../../services/seller-api";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Loading from "../../UI/Loading";
import ProfileBox from "../../UI/ProfileBox";
import ProfileUI from "../../UI/ProfileUI";
const SellerProfilePage = () => {
  const [sellerInfo, setSellerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    const userProfileHandler = async () => {
      const user = await sellerProfile();
      setSellerInfo(user.seller);
      setIsLoading(false);
    };
    userProfileHandler();
  }, []);
  console.log(sellerInfo);
  const logoutUser = async () => {
    // const response = await userLogout();
    userCtx.setIsAuth(false);
  };

  const profileComponent = (
    <ProfileBox>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Profile</h2>
        <EditProfile>
          {/* <CreateOutlined /> */}
          <Link to="/user/me/update">Edit Profile</Link>
        </EditProfile>
      </div>
      <Label style={{ marginBottom: 30, fontWeight: 500, fontSize: 16 }}>
        Join date:{" "}
        {new Date(sellerInfo.createdAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Label>
      <hr />
      <h3>About</h3>
      <Label>First Name</Label>
      <Text>{sellerInfo.first_name}</Text>
      <Label>Last Name</Label>
      <Text>{sellerInfo.last_name}</Text>
      <Label>Email</Label>
      <Text>{sellerInfo.email}</Text>
      <Label>Phone</Label>
      <Text>{sellerInfo.phone_number}</Text>
      <Logout onClick={logoutUser}>Logout</Logout>
    </ProfileBox>
  );
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfileUI renderComponent={profileComponent} userInfo={sellerInfo} />
        </>
      )}
      <Footer />
    </>
  );
};

export default SellerProfilePage;

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
