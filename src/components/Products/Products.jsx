import Product from "./Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import LinkWrapper from "../UI/LinkWrapper";
import VerticalBar from "../UI/VerticalBar";
import { dimensions } from "../../constants/responsive";
<<<<<<< Updated upstream

=======
import RangeBar from "../UI/RangeBar";
import { useEffect } from "react";
>>>>>>> Stashed changes
const Products = ({ products, title }) => {
  const [priceSort, setPriceSort] = useState("");
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    setProductsState(products);
  }, []);
  const priceSortHandler = (event) => {
    setPriceSort(event.target.value);
  };

  const priceFilterHandler = (minPrice, maxPrice) => {
    console.log(minPrice, maxPrice);
    setProductsState(
      products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      )
    );
  };
  switch (priceSort) {
    case "ascending":
      productsState.sort((p1, p2) => p1.price - p2.price);
      break;
    case "descending":
      productsState.sort((p1, p2) => p2.price - p1.price);
      break;
    case "AtoZ":
      break;
    case "ZtoA":
      break;
    default:
      break;
  }
  return (
    <>
      <Title>{title}</Title>

      <hr />
      <SortContainer>
        <Select name="filter" onChange={priceSortHandler}>
          <Option>Sort By</Option>
          <Option value="ascending">Price (low to high)</Option>
          <Option value="descending">Price (high to low)</Option>
        </Select>
      </SortContainer>
      <Container>
<<<<<<< Updated upstream
        <VerticalBar title="Filters">
          <Price>Price</Price>
        </VerticalBar>
        <ProductContainer>
          {products.map((product) => (
            <LinkWrapper>
              <Link to={`/product/${product._id}`} key={product._id}>
                <Product
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.images[0].url}
                />
              </Link>
            </LinkWrapper>
          ))}
=======
        <FilterBar title="Filters">
          <RangeBar
            min={0}
            max={10000}
            minGap={1000}
            priceFilterHandler={priceFilterHandler}
          />
        </FilterBar>
        <ProductContainer>
          {productsState.length > 0 ? (
            productsState.map((product) => (
              <LinkWrapper key={product._id}>
                <Link to={`/product/${product._id}`} key={product._id}>
                  <Product
                    name={product.name}
                    price={product.price}
                    imageUrl={product.images[0].url}
                  />
                </Link>
              </LinkWrapper>
            ))
          ) : (
            <NotFound>No product found!</NotFound>
          )}
>>>>>>> Stashed changes
        </ProductContainer>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
<<<<<<< Updated upstream
=======
  width: 100%;
  justify-content: flex-start;
  @media (max-width: ${dimensions.mobileWidth}) {
    flex-direction: column;
  }
>>>>>>> Stashed changes
`;
const ProductContainer = styled.div`
  display: grid;
  width: 1000px;
  gap: 20px;
  grid-template-columns: auto auto auto auto;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  padding: 40px;

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 20px;
    padding: 15px;
  }
`;

const Select = styled.select`
  border: 1px solid black;
  padding: 10px;
  font-size: 18px;
  outline: none;

  @media (max-width: ${dimensions.mobileWidth}) {
    font-size: 12px;
    padding: 5px;
  }
`;
const Option = styled.option``;
const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #7a7a7a;
`;
const NotFound = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin: auto;
  text-align: center;
`;
const SortContainer = styled.div`
  margin-left: auto;
  width: fit-content;
  padding: 24px;

  @media (max-width: ${dimensions.mobileWidth}) {
    padding: 12px;
  }
`;
