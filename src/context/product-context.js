import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  addToProducts: () => {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToProducts = (products) => {
    setProducts(products);
  };
  return (
    <ProductContext.Provider
      value={{ products: products, addToProducts: addToProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
