import React from "react";
import styled from "styled-components";
import { ReactComponent as BrandLogo } from "../../assets/brand/buzzaar.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <LeftContainer>
        <div>
          <BrandLogo style={{ width: 150 }} />
          <div>MARKETPLACE</div>
        </div>
      </LeftContainer>

      <RightContainer>
        <List>
          <Label>ONLINE SHOPPING</Label>
          <Text>Accessories</Text>
          <Text>Gift {"&"} Surprises</Text>
          <Text>Stationery</Text>
          <Text>Resin Art</Text>
        </List>
        <List>
          <Label>USEFUL LINKS</Label>
          <Text>About Buzzaar</Text>
          <Text>Contact Us</Text>
          <Text>FAQ's</Text>
          <Text>Help</Text>
        </List>
        <List>
          <Label>GET IN TOUCH</Label>
          <Text>Instagram</Text>
          <Text>Mail Us</Text>
        </List>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: white;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 240px;
  align-items: center;
  box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.3);
`;
const LeftContainer = styled.div`
  margin: 120px;
`;
const RightContainer = styled.div`
  display: flex;
  margin-left: 250px;
  @media (min-width: 1920px) {
    margin-left: 600px;
  }
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Text = styled.p``;
const List = styled.div`
  margin-right: 100px;
`;
