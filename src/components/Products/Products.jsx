import React from "react";
import "./style/Products.css";
import { products } from "../../constants/dummy-data/data";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [priceFilter, setPriceFilter] = useState("");

  const priceFilterHandler = (event) => {
    setPriceFilter(event.target.value);
  };
  if (priceFilter === "ascending") {
    products.sort((p1, p2) => p1.price - p2.price);
  } else if (priceFilter === "descending") {
    products.sort((p1, p2) => p2.price - p1.price);
  }
  return (
    <>
      <div>
        <select name="filter" onChange={priceFilterHandler}>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Link to={`/product/${product._id}`}>
            <Product
              key={product._id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
