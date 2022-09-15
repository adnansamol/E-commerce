import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";

const FilterBar = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default FilterBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  width: 250px;
  background-color: white;

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 100%;
    padding: 0;
    justify-content: space-between;
    flex-direction: row;
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
