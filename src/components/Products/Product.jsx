import React from "react";
import "./style/Product.css";
const Product = ({ name, price, imageUrl }) => {
  return (
    <div className="product-container">
      <img src={imageUrl} alt="preview" />
      <p className="product-title">{name}</p>
      <p className="product-price">${price}</p>
    </div>
  );
};

export default Product;
