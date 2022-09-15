import React from "react";
import styled from "styled-components";
import { dimensions } from "../../constants/responsive";
const Product = ({ name, price, imageUrl }) => {
  return (
    <Container>
      <Preview src={imageUrl} alt="preview" />
      <BottomContainer>
        <Name className="product-title">{name}</Name>
        <Price className="product-price">${price}</Price>
        <Text>Free Delivery</Text>
      </BottomContainer>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding-left: 8px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  background-color: white;

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 170px;
    height: 230px;
  }
`;
const Preview = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 170px;
    height: 170px;
  }
`;
const BottomContainer = styled.div`
  margin-top: 8px;
`;
const Name = styled.div`
  color: rgb(110, 110, 110);
  font-weight: 500;
  font-size: 18px;
  padding: 2px 8px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipses;

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 14px;
    padding: 0 8px;
  }
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #2f2f2f;
  padding: 6px 8px;

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 14px;
    padding: 0 8px;
  }
`;
const Text = styled.div`
  color: #555555;
  font-size: 14px;
  padding: 4px 8px;

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 12px;
    padding: 0 8px;
  }
`;
