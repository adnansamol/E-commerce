import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/colors";
const Loading = ({ color }) => {
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
  margin: auto;
  margin-top: 200px;
  width: fit-content;
`;
const LoadingWheel = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid white;
  border-top: 8px solid ${colors.primary500};
  border-radius: 50%;
  animation-name: ${LoadingKeyframes};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
`;
