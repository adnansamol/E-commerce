import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { products } from "../../constants/dummy-data/data";
import "./style/ProductDetailPage.css";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const findProduct = () => {
    const product = products.find((product) => product._id === id);
    setProduct(product);
  };
  useEffect(() => {
    findProduct();
  }, []);
  return (
    <div className="detail-container">
      <div>
        <img className="product-image" src={product.imageUrl} alt="lamp" />
      </div>
      <div className="detail-section">
        <p className="product-name">{product.name}</p>
        <p className="product-price">M.R.P: ${product.price}</p>
        <p className="general-text">
          reviews:{" "}
          <span style={{ color: "green" }}>{product.numOfReviews} </span>
          ratings
        </p>
        <p className="product-description">
          <b>Description</b>
          <br />
          {product.description}
        </p>
        <p>
          Stock: <b>{product.stock}</b>
        </p>
        <p className="general-text">Seller: {product.seller}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
