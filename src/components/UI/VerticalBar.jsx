import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

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
`;
const Title = styled.p`
  font-size: 24px;

  font-weight: 600;
  color: ${colors.primary600};
`;
