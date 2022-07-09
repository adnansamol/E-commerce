import React from "react";
import { useNavigate } from "react-router";
import { userProfileUpdate } from "../../services/user-api";
const UpdateUserProfilePage = () => {
  const navigate = useNavigate();
  const updateUserHandler = async (event) => {
    event.preventDefault();

    const response = await userProfileUpdate({
      first_name: event.target.fname.value,
      last_name: event.target.lname.value,
      email: event.target.email.value,
      phone_number: +event.target.phone.value,
      public_id: "public_id",
      url: "url",
    });
    navigate("/user/me");
  };
  return (
    <div>
      <form onSubmit={updateUserHandler}>
        First Name: <input name="fname" />
        Last Name: <input name="lname" />
        Email: <input name="email" />
        Phone: <input name="phone" />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateUserProfilePage;
