import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/responsive";
import { getProduct } from "../../services/product-api";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from "../UI/Loading";
import { FaArrowLeft, FaArrowRight, FaCartPlus } from "react-icons/fa";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< Updated upstream
=======
  const [sellerID, setSellerID] = useState("");
  const [sellerName, setSellerName] = useState("Unknown");
  const [previewImage, setPreviewImage] = useState(0);
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
>>>>>>> Stashed changes
  useEffect(() => {
    const retrieveProduct = async () => {
      const product = await getProduct(id);
      setIsLoading(false);
      setProduct(product.product);
    };
    retrieveProduct();
  }, []);
<<<<<<< Updated upstream
  console.log(product.images);
=======

  const deleteProductHandler = async () => {
    await deleteProduct(product._id);
    navigate("/");
  };
  const nextImageHandler = () => {
    if (previewImage === product.images.length - 1) {
      setPreviewImage(0);
    } else {
      setPreviewImage((previewImage) => previewImage + 1);
    }
  };

  const previousImageHandler = () => {
    if (previewImage == 0) {
      setPreviewImage(product.images.length - 1);
    } else {
      setPreviewImage((previewImage) => previewImage - 1);
    }
  };

>>>>>>> Stashed changes
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
                {product.images.length > 1 && (
                  <>
                    <LeftArrow onClick={previousImageHandler} />

                    <RightArrow onClick={nextImageHandler} />
                  </>
                )}
                <Image src={product.images[previewImage].url} alt="lamp" />
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
<<<<<<< Updated upstream
                <SizeContainer>
                  {product.size.map((item) => (
                    <Size>{item}</Size>
                  ))}
                </SizeContainer>
=======
                {product.size.length > 1 && (
                  <SizeContainer>
                    {product.size.map((item) => (
                      <Size key={item}>{item}</Size>
                    ))}
                  </SizeContainer>
                )}
>>>>>>> Stashed changes
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

  @media (max-width: ${dimensions.mobileWidth}) {
    flex-direction: column;
  }
`;
<<<<<<< Updated upstream
=======
const LeftArrow = styled(FaArrowLeft)`
  position: absolute;
  left: 25px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const RightArrow = styled(FaArrowRight)`
  position: absolute;
  font-size: 20px;
  color: white;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
>>>>>>> Stashed changes
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
  position: relative;
  @media (max-width: ${dimensions.mobileWidth}) {
    border-radius: 8px;
    border: 1px solid #d3d3d3;
    padding: 10px 0;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
const RightContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 0px 8px 8px 0px;
  width: 450px;
  padding: 20px;

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 320px;
    margin: 0 auto;
    border-radius: 8px;
    border: 1px solid #d3d3d3;
  }
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

  @media (max-width: ${dimensions.mobileWidth}) {
    width: 360px;
    margin: 0 auto;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px;

  @media (max-width: ${dimensions.mobileWidth}) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-left: 100px;

  @media (max-width: ${dimensions.mobileWidth}) {
    margin: 20px;
  }
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
