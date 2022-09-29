import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";
import { BiFilter} from "react-icons/bi"
const VerticalBar = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}<BiFilterIcon /></Title>
      {children}
    </Container>
  );
};

export default VerticalBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  width: 250px;
  background-color: white;
  min-height: 200px;
  @media (max-width: ${dimensions.mobileWidth}) {
    width: 100px;
  }
`;
const BiFilterIcon = styled(BiFilter)`
  font-size: 24px;
`
const Title = styled.p`
  font-size: 24px;
  margin:0;
  padding-bottom: 20px;
  font-weight: 600;
  color: ${colors.primary600};

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 18px;
  }
`;
