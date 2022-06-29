import React from "react";
import { useCookies } from "react-cookie";

import { userLogin } from "../../services/user-api";
import "./style/CustomerLogin.css";
let responseData = {};
const CustomerLogin = () => {
  const [cookies, setCookies] = useCookies();
  const loginUserHandler = async (event) => {
    event.preventDefault();

    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    responseData = await userLogin(user);
    //setCookies("token", responseData.token, { path: "/" });
    //localStorage.setItem("token", responseData.token);
  };

  return (
    <form onSubmit={loginUserHandler}>
      <div className="customer-container">
        <h1 className="customer-login-title">Login</h1>
        <label className="customer-label">Email</label>
        <input className="customer-input" name="email" type="email" required />
        <label className="customer-label">Password</label>
        <input
          className="customer-input"
          name="password"
          type="password"
          required
        />
        <button type="submit" className="customer-login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default CustomerLogin;
