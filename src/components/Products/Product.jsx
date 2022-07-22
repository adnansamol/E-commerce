import React from "react";
import styled from "styled-components";
const Product = ({ name, price, imageUrl }) => {
  return (
    <Container>
      <Preview src={imageUrl} alt="preview" />
      <div>
        <Name className="product-title">{name}</Name>
        <Price className="product-price">${price}</Price>
        <Text>Free Delivery</Text>
      </div>
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
`;
const Preview = styled.img`
  width: 200px;
  height: 200px;
`;
const Name = styled.div`
  color: rgb(130, 130, 130);
  font-size: 18px;
  padding: 6px 8px;
  white-space: no-wrap;
  overflow: hidden;
  text-overflow: ellipses;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #2f2f2f;
  padding: 6px 8px;
`;
const Text = styled.div`
  color: #555555;
  font-size: 14px;
  padding: 4px 8px;
`;
