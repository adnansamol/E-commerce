import React from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../../services/user-api";
import styled from "styled-components";
// import { Close } from "@material-ui/icons";
import { colors } from "../../../constants/colors";
let defaultUser = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: 0,
  password: "",
  avatar: {
    public_id: "public_id",
    url: "url",
  },
};
const UserSignupPage = () => {
<<<<<<< Updated upstream
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
      await userRegister(user);
    }
  };

  const userAuthenticate = (data) => {
    if (data.password === data.confirmPassword && data.phoneNumber > 0) {
=======
  const [isProcessing, setIsProcessing] = useState(false);
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

  const navigate = useNavigate();

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
>>>>>>> Stashed changes
      return true;
    } else {
      return false;
    }
  };

<<<<<<< Updated upstream
=======
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
      const data = await userRegister(user);
      setIsProcessing(false);
      if (data === undefined) {
        setisEmailValid({ valid: false, message: "Email already exist!" });
      } else {
        navigate("/user/login");
      }
    }
  };

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
          <Button type="submit" className="signup-button">
            Register
=======
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
>>>>>>> Stashed changes
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
