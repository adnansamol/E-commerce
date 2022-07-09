import React from "react";
import styled from "styled-components";
import { LocalMall, Search } from "@material-ui/icons";
const Bar = styled.div`
  display: flex;
  background-color: "white";
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.3);
  height: 70px;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;
const Brand = styled.div`
  font-size: 24px;
  align-items: center;
  font-weight: 600;
  color: purple;
`;
const Login = styled.button`
  padding: 6px;
  font-size: 14px;
  width: 60px;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  background-color: salmon;
  text-align: center;
  color: white;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Cart = styled.div`
  display: flex;
  color: purple;
`;
const MiddleContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const SearchBar = styled.div`
  display: flex;
  border-radius: 2px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
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
  border: none;
  width: 200px;
`;
const Tab = styled.div``;
const Navbar = () => {
  return (
    <Bar>
      <Container>
        <Brand>Buzzaar</Brand>
        <MiddleContainer>
          <Tab>Marketplace</Tab>
          <Tab>Collections</Tab>
          <Tab>Sellers</Tab>
          <SearchBar>
            <SearchInput />
            <SearchIcon>
              <Search />
            </SearchIcon>
          </SearchBar>
        </MiddleContainer>
        <LeftContainer>
          <Cart>
            <LocalMall />
          </Cart>
          <Login>Login</Login>
        </LeftContainer>
      </Container>
    </Bar>
  );
};

export default Navbar;