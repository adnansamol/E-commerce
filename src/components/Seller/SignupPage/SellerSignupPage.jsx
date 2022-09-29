import React from "react";
import { sellerRegister } from "../../../services/seller-api";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  confirmPasswordAuthentication,
  emailAuthentication,
  nameAuthentication,
  passwordAuthentication,
  phoneAuthentication,
} from "../../../utils/form-authentication";
const SellerSignupPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState();

  const [isNameValid, setisNameValid] = useState({
    valid: false,
    message: "",
  });
  const [isPassValid, setisPassValid] = useState({
    valid: false,
    message: "",
  });
  const [isEmailValid, setisEmailValid] = useState({
    valid: false,
    message: "",
  });
  const [isPhoneValid, setisPhoneValid] = useState({
    valid: false,
    message: "",
  });
  const [isConfirmPassValid, setisConfirmPassValid] = useState({
    valid: false,
    message: "",
  });
  const formAuthentication = (user) => {
    setisEmailValid({
      valid: emailAuthentication(user.email),
      message: "Email is invalid!",
    });
    setisPassValid({
      valid: passwordAuthentication(user.password),
      message: "Password must contain atleast 8 characters!",
    });
    setisPhoneValid({
      valid: phoneAuthentication(user.phone_number),
      message: "Phone number must contain 10 numbers",
    });
    setisNameValid({
      valid: nameAuthentication(user.first_name, user.last_name),
      message: "Name must contain more than 3 characters",
    });
    setisConfirmPassValid({
      valid: confirmPasswordAuthentication(user.password, user.confirmPassword),
      message: "Password does not match!",
    });

    if (
      isEmailValid.valid &&
      isPassValid.valid &&
      isNameValid.valid &&
      isPhoneValid.valid &&
      isConfirmPassValid.valid
    ) {
      return true;
    }
    return false;
  };

  const registerFormHandler = async (event) => {
    event.preventDefault();

    const user = {
      first_name: event.target.fname.value,
      last_name: event.target.lname.value,
      email: event.target.email.value,
      phone_number: +event.target.phone.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
      public_id: "public_id",
      url: "url",
    };

    if (formAuthentication(user)) {
      setIsProcessing(true);
      const data = await sellerRegister(user);
      setIsProcessing(false);
      if (data === undefined) {
        setisEmailValid({ valid: false, message: "Email already exist!" });
      } else {
        navigate("/user/login");
      }
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
        <Container>
          <Title>Sign Up</Title>
          <Prompt>
            Already a member?<Link to="/user/login"> Log In</Link>
          </Prompt>
          <Label>First Name</Label>
          <InputContainer>
            <Input type="text" name="fname" />
            {!isNameValid.valid && <Error>{isNameValid.message}</Error>}
          </InputContainer>
          <Label>Last Name</Label>
          <InputContainer>
            <Input type="text" name="lname" />
            {!isNameValid.valid && <Error>{isNameValid.message}</Error>}
          </InputContainer>
          <Label>Email</Label>
          <InputContainer>
            <Input name="email" />
            {!isEmailValid.valid && <Error>{isEmailValid.message}</Error>}
          </InputContainer>
          <Label>Password</Label>
          <InputContainer>
            <Input type="password" name="password" />
            {!isPassValid.valid && <Error>{isPassValid.message}</Error>}
          </InputContainer>
          <Label>Confirm Password</Label>
          <InputContainer>
            <Input type="password" name="confirmPassword" />
            {!isConfirmPassValid.valid && (
              <Error>{isConfirmPassValid.message}</Error>
            )}
          </InputContainer>
          <Label>Phone Number</Label>
          <InputContainer>
            <Input type="text" name="phone" />
            {!isPhoneValid.valid && <Error>{isPhoneValid.message}</Error>}
          </InputContainer>
          <Button
            type="submit"
            style={isProcessing ? { backgroundColor: "grey" } : {}}
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
  font-size: 50px;
  color: black;
`;

const Label = styled.label`
  font-size: 16px;
  color: grey;
`;
const InputContainer = styled.div`
  margin-bottom: 30px;
`;
const Input = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid grey;
  width: 310px;
  font-size: 18px;
  padding: 2px 1px;

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
