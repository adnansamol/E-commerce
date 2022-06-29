import React from "react";
import "./style/SellerLoginPage.css";
const SellerLoginPage = () => {
  return (
    <form>
      <div className="seller-container">
        <h1 className="seller-login-title">Seller Login</h1>
        <label className="seller-label">Email</label>
        <input className="seller-input" type="email" required />
        <label className="seller-label">Password</label>
        <input className="seller-input" type="password" required />
        <button type="submit" className="seller-login-button">
          Login
        </button>
      </div>
    </form>
  );
};

export default SellerLoginPage;
