import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllCategories } from "../../services/category-api";
import { createProduct } from "../../services/product-api";
import ImagePlaceholder from "../../assets/product/image-placeholder.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { colors } from "../../constants/colors";
import Loading from "../UI/Loading";
import { useNavigate } from "react-router";

let imageUrl;
const UpdateProductPage = () => {
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data.categories);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  const imageUploadHandler = (event) => {
    setFiles([...event.target.files]);
    imageUrl = event.target.files[0];
  };
  
  const createProductHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("description", event.target.description.value);
    formData.append("price", +event.target.price.value);
    formData.append("category", event.target.category.value);
    formData.append("colour", event.target.colour.value);
    formData.append("size", event.target.size.value.toUpperCase());
    formData.append("customizable", false);
    formData.append("stock", event.target.stock.value);

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    const response = await createProduct(formData);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={createProductHandler}>
          <Header>Edit your product listing</Header>
          <Container>
            <LeftContainer>
              <ImageUploader
                type="file"
                onChange={imageUploadHandler}
                name="images"
                multiple
              />
            </LeftContainer>
            <RightContainer>
              <Input name="name" placeholder="Add product name" />

              <Select name="category">
                <option>Select Category</option>
                {categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  );
                })}
              </Select>
              <Input
                type="number"
                name="price"
                placeholder="Add product price"
              />
              <Input
                name="colour"
                placeholder="Product colours: Ex. red,blue"
              />
              <Input name="size" placeholder="Product sizes: Ex. s,m,l" />

              <TextArea
                name="description"
                placeholder="Enter details about your product here..."
              />
              <Input
                type="number"
                name="stock"
                placeholder="Add product stock amount"
              />
              <Button>Update Listing</Button>
            </RightContainer>
          </Container>
        </form>
      )}
      <Footer />
    </>
  );
};

export default UpdateProductPage;

const Container = styled.div`
  display: flex;
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
`;
const Header = styled.h1`
  margin: auto;
  width: fit-content;
  padding: 12px;
`;
const ImageUploader = styled.input`
  -webkit-user-select: none;
  background: url(${ImagePlaceholder}) center no-repeat;
  background-size: 300px 300px;
  height: 300px;
  width: 300px;
  cursor: pointer;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
const LeftContainer = styled.div`
  padding: 8px;
`;
const RightContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  gap: 20px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  font-size: 20px;
  padding: 8px;

  &:focus {
    border: 1px solid ${colors.primary600};
    outline: none;
  }
`;
const TextArea = styled.textarea`
  border: 1px solid black;
  width: 300px;
  font-size: 20px;
  height: 150px;
  padding: 8px;
  resize: none;
`;
const Select = styled.select`
  width: 315px;
  height: 50px;
  border: 1px solid black;
  font-size: 20px;
  padding: 8px;
`;
const Button = styled.button`
  border: none;
  font-size: 24px;
  padding: 8px;
  background-color: ${colors.primary600};
  color: white;
  cursor: pointer;
`;
