import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { UtilContext } from "../../context/util-context";

const MenuBar = ({ ...components }) => {
  const [currentTab, setCurrentTab] = useState("");
  const { toggleSetMenu } = useContext(UtilContext);
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        break;
      case "/user/me":
        setCurrentTab("Profile");
        break;
      case "/seller/me":
        setCurrentTab("Seller");
        break;
      case "/user/me/orders":
        setCurrentTab("Orders");
        break;
      default:
        break;
    }
  });

  return (
    <>
      <MenuMask onClick={() => toggleSetMenu(false)}></MenuMask>
      <Component>
        <Container>
          <Header>Menu</Header>
          <MenuItems>
            <Link to="/user/me">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Profile" ? { color: colors.primary600 } : {}
                  }
                >
                  Profile
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Cart" ? { color: colors.primary600 } : {}
                  }
                >
                  Cart
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Marketplace"
                      ? { color: colors.primary600 }
                      : {}
                  }
                >
                  Marketplace
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Collections"
                      ? { color: colors.primary600 }
                      : {}
                  }
                >
                  Collections
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/seller/me">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Seller" ? { color: colors.primary600 } : {}
                  }
                >
                  Seller
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/user/me/orders">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Orders" ? { color: colors.primary600 } : {}
                  }
                >
                  Your Orders
                </Label>
              </MenuItem>
            </Link>
            <hr />
            <Link to="/">
              <MenuItem>
                <Label
                  style={
                    currentTab === "Addresses"
                      ? { color: colors.primary600 }
                      : {}
                  }
                >
                  Your Addresses
                </Label>
              </MenuItem>
            </Link>
            <hr />
          </MenuItems>
        </Container>
      </Component>
    </>
  );
};

export default MenuBar;

const Component = styled.div`
  position: fixed;
  background-color: white;
  height: 100%;
  width: 200px;
  z-index: 50;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
const MenuMask = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;
  overflow: hidden;
`;
const Container = styled.div`
  margin: 10px;
`;
const Header = styled.h2`
  color: ${colors.primary600};
`;
const MenuItems = styled.div`
  * {
    text-decoration: none;
    color: inherit;
  }
`;
const MenuItem = styled.div``;
const Label = styled.p`
  font-weight: 500;
`;
