import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../services/product-api";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loading from "../UI/Loading";
import "./style/ProductDetailPage.css";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const retrieveProduct = async () => {
      const product = await getProduct(id);
      setIsLoading(false);
      setProduct(product.product);
    };
    retrieveProduct();
  }, []);
  console.log(product.images);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="detail-container">
            <div>
              <img
                className="product-image"
                src={product.images[0].url}
                alt="lamp"
              />
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
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetailPage;
