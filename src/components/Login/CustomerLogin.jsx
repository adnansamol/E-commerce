import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../../services/user-api";
import "./style/CustomerLogin.css";

const CustomerLogin = () => {
  const [isValid, setIsValid] = useState({ valid: true, message: "" });
  const loginUserHandler = async (event) => {
    event.preventDefault();

    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    if (isUserAuthenticated(user)) {
      const responseData = await userLogin(user);
      console.log(responseData);
      if (responseData === undefined) {
        setIsValid({
          valid: false,
          message: (
            <div className="login-error-container">
              <div>Account does not exist! </div>
            </div>
          ),
        });
      }
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
        setIsValid({ valid: true, message: "" });
        return true;
      }
    }
    setIsValid({
      valid: false,
      message: (
        <div className="login-error-container">
          <div>Please enter valid credentials. </div>
          <div>Password must be atleast 8 characters long.</div>
        </div>
      ),
    });
    return false;
  };
  return (
    <>
      {localStorage.getItem("buzzaar") ? <Navigate to="/" /> : ""}
      <form onSubmit={loginUserHandler}>
        <div className="customer-container">
          <h1 className="customer-login-title">Login</h1>
          <label className="customer-label">Email</label>
          <input className="customer-input" name="email" />
          <label className="customer-label">Password</label>
          <input className="customer-input" name="password" type="password" />
          {!isValid.valid && isValid.message}
          <button type="submit" className="customer-login-button">
            Login
          </button>
          <Link className="forgot-password" to="/user/password/forget">
            Forgot Password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default CustomerLogin;
