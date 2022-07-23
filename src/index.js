import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContextProvider from "./context/user-context";
import ProductContextProvider from "./context/product-context";
import UtilContextProvider from "./context/util-context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UtilContextProvider>
    <ProductContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ProductContextProvider>
  </UtilContextProvider>
);
