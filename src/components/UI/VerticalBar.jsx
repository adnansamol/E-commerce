import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";

const VerticalBar = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default VerticalBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  width: 250px;
  background-color: white;

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 100px;
  }
`;
const Title = styled.p`
  font-size: 24px;

  font-weight: 600;
  color: ${colors.primary600};

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 18px;
  }
`;
