import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";
import { UserContext } from "../../context/user-context";
import { UtilContext } from "../../context/util-context";

const MenuBar = ({ ...components }) => {
  const [currentTab, setCurrentTab] = useState("");
  const { isAuth } = useContext(UserContext);
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
          <MenuItems>
            {isAuth ? (
              <Link to="/user/me">
                <MenuItem>
                  <Label
                    style={
                      currentTab === "Profile"
                        ? { color: colors.primary600 }
                        : {}
                    }
                  >
                    Profile
                  </Label>
                </MenuItem>
              </Link>
            ) : (
              <Link to="/user/login">
                <MenuItem>
                  <Label
                    style={
                      currentTab === "Profile"
                        ? { color: colors.primary600 }
                        : {}
                    }
                  >
                    Log In
                  </Label>
                </MenuItem>
              </Link>
            )}

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
  top: 100px;
  height: 100%;
  width: 200px;
  z-index: 50;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  @media (min-width: ${dimensions.mobileWidth}) {
    display: none;
  }
`;
const MenuMask = styled.div`
  height: 100%;
  width: 100%;
  top: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1;

  @media (min-width: ${dimensions.mobileWidth}) {
    display: none;
  }
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
