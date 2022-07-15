import React from "react";
import styled from "styled-components";
// import { AccountCircle, LocalMall, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { colors } from "../../constants/colors";
import { ReactComponent as BrandIcon } from "../../assets/brand/buzzaar.svg";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem("buzzaar")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <Bar>
      <Container>
        <Brand>
          <Link to="/">
            <BrandIcon />
          </Link>
        </Brand>
        <MiddleContainer>
          <Tab>Marketplace</Tab>
          <Tab>Collection</Tab>
          <Tab>Sellers</Tab>
        </MiddleContainer>
        <RightContainer>
          <SearchBar>
            <SearchInput placeholder="Search for product" />
            <SearchIcon>{/* <Search /> */}</SearchIcon>
          </SearchBar>
          <Cart>{/* <LocalMall /> */}</Cart>
          {isLoggedIn ? (
            <Link to="/user/me">
              <Login>Profile</Login>
            </Link>
          ) : (
            <Link to="/user/login">
              <Login>Log In</Login>
            </Link>
          )}
        </RightContainer>
      </Container>
    </Bar>
  );
};

export default Navbar;
const Bar = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.3);
  height: 100px;
  padding: 0px;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  align-items: center;

  @media (min-width: 1920px) {
    width: 65%;
  }
`;
const Brand = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 600;

  * {
    width: 120px;
  }
`;
const Login = styled.button`
  padding: 4px;
  font-size: 14px;
  width: 60px;
  height: 36px;
  border: none;
  border-radius: 4px;
  margin-left: 12px;
  background-color: #f55742;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const MiddleContainer = styled.div`
  display: flex;
  width: 27%;
  margin-left: 106px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;
const Cart = styled.div`
  display: flex;
  color: ${colors.primary500};
  margin-left: 75px;
  font-size: 200px;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 85px;
`;

const SearchBar = styled.div`
  display: flex;
  width: 290px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  padding: 2px;
  align-items: center;
`;
const SearchIcon = styled.div`
  display: flex;
`;
const SearchInput = styled.input`
  &:focus {
    outline: none;
  }
  margin-right: 4px;
  padding-left: 18px;
  border: none;
  width: 250px;
  height: 30px;
`;
const Tab = styled.div`
  cursor: pointer;
`;
