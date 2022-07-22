import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { getProduct } from "../../services/product-api";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from "../UI/Loading";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const retrieveProduct = async () => {
      const product = await getProduct(id);
      setIsLoading(false);
      setProduct(product.product);
    };
    retrieveProduct();
  }, []);
  console.log(product.images);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Component>
            <Container>
              <LeftContainer>
                <Image src={product.images[0].url} alt="lamp" />
              </LeftContainer>
              <RightContainer>
                <Name>{product.name}</Name>
                <Price>${product.price}</Price>
                <p className="general-text">
                  reviews:{" "}
                  <span style={{ color: "green" }}>
                    {product.numOfReviews}{" "}
                  </span>
                  ratings
                </p>
                <SizeContainer>
                  {product.size.map((item) => (
                    <Size>{item}</Size>
                  ))}
                </SizeContainer>
                <Stock>
                  Stock: <b>{product.stock}</b>
                </Stock>
                <p className="general-text">Seller: {product.seller}</p>
                <BuyNow>Buy Now</BuyNow>
              </RightContainer>
            </Container>
            <BottomSection>
              <Title>Product Details</Title>
              <HR />
              <DescriptionContainer>
                <div>
                  <Text>Description</Text>
                  <DescText>{product.description}</DescText>
                </div>
                <div>
                  <Text>Shipping & Delivery</Text>
                  <DescText>Free Delivery</DescText>
                </div>
              </DescriptionContainer>
            </BottomSection>
          </Component>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetailPage;

const Component = styled.div`
  width: fit-content;
  margin: 48px auto;
`;
const Container = styled.div`
  display: flex;
  margin: 48px 0;
`;
const Image = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 8px;
`;
const LeftContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-right: none;
  border-radius: 8px 0px 0px 8px;
  background-color: #f0f0f0;
`;
const RightContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 0px 8px 8px 0px;
  width: 450px;
  padding: 20px;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 28px;
  margin: 0;
  color: grey;
`;
const Price = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  margin-top: 4px;
`;
const SizeContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const Size = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  font-weight: 500;
  color: grey;
  padding: 6px;
  border: 1px solid #d3d3d3;
  cursor: pointer;
`;
const Stock = styled.p`
  font-weight: 500;
  font-size: 18px;
`;
const BuyNow = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${colors.primary600};
  padding: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
const BottomSection = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-left: 100px;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

const DescText = styled.p`
  font-size: 18px;
`;
const HR = styled.hr`
  border-top: 1px solid #d3d3d3;
`;
