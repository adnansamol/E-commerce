import React from "react";
import styled from "styled-components";
import carousel from "../../assets/carousel/carousel.jpg";
import { dimensions } from "../../constants/responsive";
const Carousel = () => {
  return (
    <CarouselContainer>
      <img src={carousel} />
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  * {
    width: 100%;
  }
`;
