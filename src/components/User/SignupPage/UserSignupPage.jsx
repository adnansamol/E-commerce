import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../../services/user-api";
import styled from "styled-components";
// import { Close } from "@material-ui/icons";
import { colors } from "../../../constants/colors";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import {
  confirmPasswordAuthentication,
  emailAuthentication,
  nameAuthentication,
  passwordAuthentication,
  phoneAuthentication,
} from "../../../utils/form-authentication";

const UserSignupPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isNameValid, setisNameValid] = useState({
    valid: true,
    message: "",
  });
  const [isPassValid, setisPassValid] = useState({
    valid: true,
    message: "",
  });
  const [isEmailValid, setisEmailValid] = useState({
    valid: true,
    message: "",
  });
  const [isPhoneValid, setisPhoneValid] = useState({
    valid: true,
    message: "",
  });
  const [isConfirmPassValid, setisConfirmPassValid] = useState({
    valid: true,
    message: "",
  });

  const navigate = useNavigate();
  const registerFormHandler = async (event) => {
    event.preventDefault();

    const confirmPassword = event.target.confirmPassword.value;
    const user = {
      first_name: event.target.fname.value,
      last_name: event.target.lname.value,
      email: event.target.email.value,
      phone_number: +event.target.phone.value,
      password: event.target.password.value,
      public_id: "public_id",
      url: "url",
    };
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
      message: "Phone number must contain alteast 10 letters",
    });
    setisNameValid({
      valid: nameAuthentication(user.first_name, user.last_name),
      message: "Name must contain more than 3 characters",
    });
    setisConfirmPassValid({
      valid: confirmPasswordAuthentication(user.password, confirmPassword),
      message: "Password does not match!",
    });
    if (formAuthentication()) {
      setIsProcessing(true);
      const data = await userRegister(user);
      setIsProcessing(false);
      if (data === undefined) {
        setisEmailValid({ valid: false, message: "Email already exist!" });
      } else {
        navigate("/user/login");
      }
    }
  };

  const formAuthentication = () => {
    if (
      isEmailValid.valid &&
      isPassValid.valid &&
      isNameValid.valid &&
      isPhoneValid &&
      isConfirmPassValid.valid
    ) {
      return true;
    }
    return false;
  };
  return (
    <>
      <CloseIcon>
        <Link style={{ color: "black" }} to="/">
          <FaPlus style={{ transform: "rotate(45deg)", fontSize: 30 }} />
        </Link>
      </CloseIcon>
      <form onSubmit={registerFormHandler}>
        <Container className="signup-container">
          <Title className="signup-title">Sign Up</Title>
          <Prompt>
            Already a member?<Link to="/user/login"> Log In</Link>
          </Prompt>
          <Label className="signup-label">First Name</Label>
          <InputContainer>
            <Input className="signup-input" type="text" name="fname" />
            {!isNameValid.valid && <Error>{isNameValid.message}</Error>}
          </InputContainer>
          <Label className="signup-label">Last Name</Label>
          <InputContainer>
            <Input className="signup-input" type="text" name="lname" />
            {!isNameValid.valid && <Error>{isNameValid.message}</Error>}
          </InputContainer>
          <Label className="signup-label">Email</Label>
          <InputContainer>
            <Input className="signup-input" type="email" name="email" />
            {!isEmailValid.valid && <Error>{isEmailValid.message}</Error>}
          </InputContainer>
          <Label className="signup-label">Password</Label>
          <InputContainer>
            <Input className="signup-input" type="password" name="password" />
            {!isPassValid.valid && <Error>{isPassValid.message}</Error>}
          </InputContainer>
          <Label className="signup-label">Confirm Password</Label>
          <InputContainer>
            <Input
              className="signup-input"
              type="password"
              name="confirmPassword"
            />
            {!isConfirmPassValid.valid && (
              <Error>{isConfirmPassValid.message}</Error>
            )}
          </InputContainer>
          <Label className="signup-label">Phone Number</Label>
          <InputContainer>
            <Input className="signup-input" type="text" name="phone" />
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

export default UserSignupPage;

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
