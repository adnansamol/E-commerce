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
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCartPlus } from "react-icons/fa";
const CreateProductPage = () => {
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState(0);
  const navigate = useNavigate();
  const imagePrev = useRef();
  const imageInput = useRef();
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data.categories);
      setLoading(false)
    };
    fetchCategories();
  }, []);

  const nextImageHandler = () => {
    if (previewImage >= files.length) {
      setPreviewImage(0);
    } else {
      setPreviewImage(previewImage + 1);
    }

    imagePrev.current.src = URL.createObjectURL(files[previewImage]);
  };

  const previousImageHandler = () => {
    if (previewImage <= 0) {
      setPreviewImage(files.length - 1);
    } else {
      setPreviewImage(previewImage - 1);
    }

    imagePrev.current.src = URL.createObjectURL(files[previewImage]);
  };
  const imageUploadHandler = (event) => {
    setFiles([...event.target.files]);
    imagePrev.current.src = URL.createObjectURL(event.target.files[0]);
  };
  console.log(files);
  const createProductHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("description", event.target.description.value);
    formData.append("price", +event.target.price.value);
    formData.append("category", categories[0]._id);
    formData.append("colour", "red,blue");
    formData.append("size", "S,M,L");
    formData.append("customizable", false);
    formData.append("stock", event.target.stock.value);

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    setIsProcessing(true);
    const response = await createProduct(formData);
    setIsProcessing(false);
    navigate("/");
  };
  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={createProductHandler}>
          <Header>List your product</Header>
          <Container>
            <LeftContainer>
              <input
                type="file"
                ref={imageInput}
                onChange={imageUploadHandler}
                multiple
                hidden
              />
              {files.length > 1 && (
                <>
                  <LeftArrow onClick={previousImageHandler} />
                  <RightArrow onClick={nextImageHandler} />
                </>
              )}

              <ImageUploader
                ref={imagePrev}
                src={ImagePlaceholder}
                alt="image"
              />
              <UploadButton
                type="button"
                onClick={() => imageInput.current.click()}
              >
                Upload
              </UploadButton>
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
              <Button
                disabled={isProcessing && true}
                style={isProcessing ? { backgroundColor: "grey" } : {}}
              >
                {isProcessing ? "Listing..." : "List Product"}
              </Button>
            </RightContainer>
          </Container>
        </form>
      )}
      <Footer />
    </>
  );
};

export default CreateProductPage;

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

const LeftContainer = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  height: fit-content;
`;
const LeftArrow = styled(FaArrowLeft)`
  position: absolute;
  left: 25px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 8px;
  top: 35%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const RightArrow = styled(FaArrowRight)`
  position: absolute;
  font-size: 20px;
  color: white;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  padding: 8px;
  top: 35%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const ImageUploader = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 10px;
`;
const UploadButton = styled.button`
  width: fit-content;
  padding: 10px 30px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: green;
  cursor: pointer;
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
