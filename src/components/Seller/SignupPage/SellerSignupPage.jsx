import React from "react";
import { sellerRegister } from "../../../services/seller-api";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { useState } from "react";
const SellerSignupPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState();
  const registerFormHandler = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const phoneNumber = +event.target.phone.value;
    if (userAuthenticate({ password, confirmPassword, phoneNumber })) {
      const user = {
        first_name: event.target.fname.value,
        last_name: event.target.lname.value,
        email: event.target.email.value,
        phone_number: +event.target.phone.value,
        password: event.target.password.value,
        public_id: "public_id",
        url: "url",
      };
      console.log(user);
      setIsProcessing(true);
      await sellerRegister(user);
      setIsProcessing(false);
      navigate("/seller/login");
    }
  };

  const userAuthenticate = (data) => {
    if (data.password === data.confirmPassword && data.phoneNumber > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <CloseIcon>
        <Link style={{ color: "black" }} to="/">
          {/* <Close style={{ fontSize: 28 }} /> */}X
        </Link>
      </CloseIcon>
      <form onSubmit={registerFormHandler}>
        <Container className="signup-container">
          <Title className="signup-title">Become a Seller</Title>
          <Prompt>
            Already a seller?<Link to="/user/login"> Log In</Link>
          </Prompt>
          <Label className="signup-label">First Name</Label>
          <Input
            className="signup-input"
            type="text"
            minLength={4}
            required
            name="fname"
          />
          <Label className="signup-label">Last Name</Label>
          <Input
            className="signup-input"
            type="text"
            minLength={4}
            required
            name="lname"
          />
          <Label className="signup-label">Email</Label>
          <Input className="signup-input" type="email" required name="email" />
          <Label className="signup-label">Password</Label>
          <Input
            className="signup-input"
            type="password"
            required
            name="password"
          />
          <Label className="signup-label">Confirm Password</Label>
          <Input
            className="signup-input"
            type="password"
            required
            name="confirmPassword"
          />
          <Label className="signup-label">Phone Number</Label>
          <Input className="signup-input" type="text" required name="phone" />
          <Button
            type="submit"
            className="signup-button"
            style={isProcessing && { backgroundColor: "grey" }}
          >
            {isProcessing ? "Creating Account" : "Register"}
          </Button>
        </Container>
      </form>
    </>
  );
};

export default SellerSignupPage;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 12px;
  @media (min-width: 1400px) {
    margin: 100px auto;
  }
`;
const CloseIcon = styled.div`
  display: flex;
  margin-top: 65px;
  justify-content: flex-end;
  width: 95%;
  color: black;

  @media (min-width: 1400px) {
    width: 97%;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 40px;
  color: black;
`;

const Label = styled.label`
  font-size: 16px;
  color: grey;
`;
const Input = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid grey;
  width: 310px;
  font-size: 18px;
  padding: 2px 1px;
  margin-bottom: 30px;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${colors.primary600};
  }
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Button = styled.button`
  width: 100%;
  align-self: center;
  margin-top: 12px;
  padding: 14px 0;
  font-size: 16px;
  color: white;
  border: none;
  background-color: ${colors.primary600};
  cursor: pointer;
`;

const ForgotPassword = styled.div`
  font-size: 16px;
  text-align: left;
  margin-top: 8px;
`;
const Prompt = styled.div`
  font-size: 18px;
  padding: 20px;
  text-align: center;
  margin-bottom: 12px;
  > * {
    text-decoration: none;
    color: ${colors.primary600};
  }
`;
const Error = styled.div`
  font-size: 12px;
  color: red;
  padding: 1px;
`;
