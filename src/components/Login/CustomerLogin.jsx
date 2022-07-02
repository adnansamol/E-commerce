import React from "react";
import { useState } from "react";
import { userLogin } from "../../services/user-api";
import "./style/CustomerLogin.css";

const CustomerLogin = () => {
  const [isValid, setIsValid] = useState(true);
  const loginUserHandler = async (event) => {
    event.preventDefault();

    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    if (isUserAuthenticated(user)) {
      const responseData = await userLogin(user);
    } else {
      return;
    }
  };

  const isUserAuthenticated = (user) => {
    console.log(isValid);
    const regExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (user.email !== "" || user.password !== "") {
      if (user.password.length >= 8 && user.email.match(regExp)) {
        setIsValid(true);
        return true;
      }
    }
    setIsValid(false);
    return false;
  };
  return (
    <form onSubmit={loginUserHandler}>
      <div className="customer-container">
        <h1 className="customer-login-title">Login</h1>
        <label className="customer-label">Email</label>
        <input className="customer-input" name="email" />
        <label className="customer-label">Password</label>
        <input className="customer-input" name="password" type="password" />
        {!isValid && (
          <div className="login-error-container">
            <div>Please enter valid credentials.</div>
            <div>Password must be atleast 8 characters long.</div>
          </div>
        )}
        <button type="submit" className="customer-login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default CustomerLogin;
