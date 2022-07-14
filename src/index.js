import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContextProvider from "./context/user-context";
import ProductContextProvider from "./context/product-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ProductContextProvider>
);
