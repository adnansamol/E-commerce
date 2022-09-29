import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../../services/user-api";
import styled from "styled-components";
import {
  emailAuthentication,
  passwordAuthentication,
} from "../../../utils/form-authentication";
import { colors } from "../../../constants/colors";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
const UserLoginPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPassValid, setIsPassValid] = useState();

  const loginUserHandler = async (event) => {
    event.preventDefault();

    if (isEmailValid && isPassValid) {
      setIsLoading(true);
      const data = await userLogin();
      setIsLoading(false);

      !data ? setIsEmailValid(false) : navigate("/");
    }
  };
  const emailAuthHandler = (event) => {
    setIsEmailValid(emailAuthentication(event.target.value));
  };
  const passwordAuthHandler = (event) => {
    setIsPassValid(passwordAuthentication(event.target.value));
  };
  return (
    <>
      {localStorage.getItem("buzzaar") ? (
        <Navigate to="/" />
      ) : (
        <>
          <CloseIcon>
            <Link style={{ color: "black" }} to="/">
              <FaPlus style={{ transform: "rotate(45deg)", fontSize: 30 }} />
            </Link>
          </CloseIcon>
          <form onSubmit={loginUserHandler}>
            <Container>
              <Title>Log In</Title>
              <Prompt>
                New to this site?<Link to="/user/register"> Sign Up</Link>
              </Prompt>
              <Label>Email</Label>
              <InputContainer>
                <Input
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={emailAuthHandler}
                  style={
                    isEmailValid === false
                      ? { borderBottom: "1px solid red" }
                      : {}
                  }
                />
                {isEmailValid === false && <Error>Email is invalid</Error>}
              </InputContainer>

              <Label>Password</Label>
              <InputContainer>
                <Input
                  onChange={(event) => setPassword(event.target.value)}
                  onBlur={passwordAuthHandler}
                  type="password"
                  id="password"
                  style={
                    isPassValid === false
                      ? { borderBottom: "1px solid red" }
                      : {}
                  }
                />
                {isPassValid === false && <Error>Password is invalid</Error>}
              </InputContainer>
              <Link to="/user/password/forget">
                <ForgotPassword>Forgot Password?</ForgotPassword>
              </Link>
              <Button
                type="submit"
                disabled={isLoading ? true : false}
                style={isLoading ? { backgroundColor: "grey" } : {}}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <Button
                onClick={() => navigate("/seller/login")}
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  color: "black",
                }}
              >
                Login to Business account
              </Button>
            </Container>
          </form>
        </>
      )}
    </>
  );
};

export default UserLoginPage;

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
const Text = styled.div`
  font-weight: 300;
  font-size: 20px;
  padding: 4px;
  color: grey;
`;
const Button = styled.button`
  width: 100%;
  align-self: center;
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
  margin-bottom: 12px;
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
