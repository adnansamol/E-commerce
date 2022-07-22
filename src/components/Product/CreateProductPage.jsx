import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createProduct } from "../../services/product-api";
import { sellerProfile } from "../../services/seller-api";

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const CreateProductPage = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState({});
  const imageUploadHandler = (event) => {
    [...event.target.files].forEach((file) =>
      setFiles((curr) => [...curr, file])
    );
  };
  console.log(files);
  const createProductHandler = async (event) => {
    event.preventDefault();
    const product = {
      name: event.target.name.value,
      description: event.target.description.value,
      price: +event.target.price.value,
      category: "623f2d1173cbf70cf448f0f5",
      colour: "red,blue",
      size: "S,M,L",
      stock: event.target.stock.value,
      images: files,
    };
    const response = await createProduct(product);
    console.log(response);
  };

  return (
    <Container>
      <form onSubmit={createProductHandler}>
        <Input
          type="file"
          onChange={imageUploadHandler}
          name="images"
          multiple
        />
        Product name: <Input name="name" />
        Product Description: <Input name="description" />
        Product price: <Input name="price" />
        Product stock: <Input name="stock" />
        <Button>Create</Button>
      </form>
    </Container>
  );
};

export default CreateProductPage;

//  name, description, price, category, stock, colour, size, customizable,
// 	images (this will take multiple image files)
// Here in category, dropdown should be there and needs to populate with the values coming from Category API and from that need to fetch id.
// 	It will create product and will send product details as a json response.
