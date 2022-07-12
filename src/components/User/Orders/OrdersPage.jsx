import { useEffect, useState } from "react";
import ProfileBox from "../../UI/ProfileBox";
import ProfileUI from "../../UI/ProfileUI";
import { userProfile } from "../../../services/user-api";
import Loading from "../../UI/Loading";
import Navbar from "../../Navbar/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
const OrdersPage = () => {
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
  const orderComponent = (
    <ProfileBox>
      <Title>My Orders</Title>
      <Text>
        View your order history or check the status of a recent order.
      </Text>
      <br />
      <hr />
      <EmptyContainer>
        <OrderText>You haven't placed any orders yet.</OrderText>
        <Link to="/">
          <Text>Start Browsing</Text>
        </Link>
      </EmptyContainer>
    </ProfileBox>
  );
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <ProfileUI renderComponent={orderComponent} userInfo={userInfo} />
      )}
    </>
  );
};

export default OrdersPage;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 12px;
`;
const Text = styled.p`
  margin: 0;
  font-weight: 500;
`;
const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: center;
`;
const OrderText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgb(60, 60, 60);
  margin: 20px;
`;
