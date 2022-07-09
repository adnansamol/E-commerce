import React from "react";
import { sellerRegister } from "../../services/seller-api";
import "./style/CustomerSignupPage.css";

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
const SellerSignupPage = () => {
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
      await sellerRegister(user);
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
    <form onSubmit={registerFormHandler}>
      <div className="signup-container">
        <h1 className="signup-title">Become a Seller</h1>
        <label className="signup-label">First Name</label>
        <input
          className="signup-input"
          type="text"
          minLength={4}
          required
          name="fname"
        />
        <label className="signup-label">Last Name</label>
        <input
          className="signup-input"
          type="text"
          minLength={4}
          required
          name="lname"
        />
        <label className="signup-label">Email</label>
        <input className="signup-input" type="email" required name="email" />
        <label className="signup-label">Password</label>
        <input
          className="signup-input"
          type="password"
          required
          name="password"
        />
        <label className="signup-label">Confirm Password</label>
        <input
          className="signup-input"
          type="password"
          required
          name="confirmPassword"
        />
        <label className="signup-label">Phone Number</label>
        <input className="signup-input" type="text" required name="phone" />
        <button type="submit" className="signup-button">
          Register
        </button>
      </div>
    </form>
  );
};

export default SellerSignupPage;
