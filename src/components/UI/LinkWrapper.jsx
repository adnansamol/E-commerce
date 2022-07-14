import React from "react";
import styled from "styled-components";
const LinkWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LinkWrapper;

const Wrapper = styled.div`
  * {
    text-decoration: none;
    color: inherit;
  }
`;
