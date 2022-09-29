import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const RangeBar = ({ min, max, minGap, priceFilterHandler }) => {
  const progressRef = useRef();
  const minRangeRef = useRef();
  const maxRangeRef = useRef();
  const minInputRef = useRef();
  const maxInputRef = useRef();

  const updateGUI = (event) => {
    if (maxRangeRef.current.value - minRangeRef.current.value < minGap) {
      if (event.target.name === "min-range") {
        minRangeRef.current.value =
          parseInt(maxRangeRef.current.value) - minGap;
      } else {
        maxRangeRef.current.value =
          parseInt(minRangeRef.current.value) + minGap;
      }
    } else {
      progressRef.current.style.left =
        (minRangeRef.current.value / minRangeRef.current.max) * 100 + "%";
      progressRef.current.style.right =
        100 - (maxRangeRef.current.value / maxRangeRef.current.max) * 100 + "%";
    }
    updateInputHandler();
  };

  const updateInputHandler = () => {
    minInputRef.current.value = minRangeRef.current.value;
    maxInputRef.current.value = maxRangeRef.current.value;

    priceFilterHandler(minInputRef.current.value, maxInputRef.current.value);
  };

  return (
    <Component>
      <Title>Price Range</Title>
      <Container>
        <SubContainer>
          <Label>Min</Label>
          <Input ref={minInputRef} defaultValue={min} disabled/>
        </SubContainer>
        <SubContainer>
          <Label>Max</Label>
          <Input ref={maxInputRef} defaultValue={max} disabled />
        </SubContainer>
      </Container>
      <Slider>
        <Progress ref={progressRef}></Progress>
      </Slider>
      <RangeInputContainer>
        <RangeInputMin
          name="min-range"
          type="range"
          ref={minRangeRef}
          onChange={updateGUI}
          min={min}
          max={max}
          defaultValue={min}
        />
        <RangeInputMax
          name="max-range"
          type="range"
          ref={maxRangeRef}
          onChange={updateGUI}
          min={min}
          max={max}
          defaultValue={max}
        />
      </RangeInputContainer>
    </Component>
  );
};

export default RangeBar;
const Component = styled.div`
  position: relative;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
`;
const Label = styled.p`
  font-weight: 600;
  margin: 5px 0;
`;
const SubContainer = styled.div``;
const Input = styled.input`
  width: 60px;
  font-size: 18px;
  padding: 5px;
`;
const RangeInputContainer = styled.div`
  position: relative;
`;
const RangeInputMin = styled.input`
  position: absolute;
  top: -5px;
  margin: 0;
  height: 5px;
  background: none;
  width: 100%;
  pointer-events: none;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: auto;
    height: 17px;
    width: 17px;
    background-color: turquoise;
    border-radius: 50%;
  }
`;
const RangeInputMax = styled.input`
  position: absolute;
  top: -5px;
  margin: 0;
  height: 5px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: auto;
    height: 17px;
    width: 17px;
    background-color: turquoise;
    border-radius: 50%;
  }
`;
const Slider = styled.div`
  height: 5px;
  background-color: #ddd;
  border-radius: 5px;
`;
const Progress = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  height: 5px;
  background-color: turquoise;

  border-radius: 5px;
`;
