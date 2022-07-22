import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllCategories } from "../../services/category-api";
import { createProduct } from "../../services/product-api";
import { sellerProfile } from "../../services/seller-api";

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const CreateProductPage = () => {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategory(data.categories);
    };
    fetchCategories();
    console.log(category);
  }, []);
  console.log(category);
  const imageUploadHandler = (event) => {
    setFiles([...event.target.files]);
  };
  console.log(files);
  const createProductHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("description", event.target.description.value);
    formData.append("price", +event.target.price.value);
    formData.append("category", category[0]._id);
    formData.append("colour", "red,blue");
    formData.append("size", "S,M,L");
    formData.append("customizable", false);
    formData.append("stock", event.target.stock.value);

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    // const product = {
    //   name: event.target.name.value,
    //   description: event.target.description.value,
    //   price: +event.target.price.value,
    //   category: "623f2d1173cbf70cf448f0f5",
    //   colour: "red,blue",
    //   size: "S,M,L",
    //   stock: event.target.stock.value,
    //   images: files,
    // };
    const response = await createProduct(formData);
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
