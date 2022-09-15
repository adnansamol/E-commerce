import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/colors";
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingWheel></LoadingWheel>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingKeyframes = keyframes`
  from {transform: rotate(0deg);}
  to  {transform: rotate(360deg);}
`;
const LoadingContainer = styled.div`
  display: flex;
  margin: 200px 0;
  align-items: center;
  justify-content: center;
`;
const LoadingWheel = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  border: 8px solid white;
  border-top: 8px solid ${colors.primary500};
  border-radius: 50%;
  animation-name: ${LoadingKeyframes};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
`;
