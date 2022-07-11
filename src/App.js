import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import CustomerLogin from "./components/Login/CustomerLogin";
import SellerLoginPage from "./components/Login/SellerLoginPage";
import CustomerSignupPage from "./components/Signup/CustomerSignupPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import UserProfilePage from "./components/User/UserProfile/UserProfilePage";
import UpdateUserProfilePage from "./components/User/UpdateUserProfilePage/UpdateUserProfilePage";
import SellerSignupPage from "./components/Signup/SellerSignupPage";
import SellerProfilePage from "./components/Seller/SellerProfilePage";
import CreateProductPage from "./components/Product/CreateProductPage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user/login" element={<CustomerLogin />} />
          <Route exact path="/seller/login" element={<SellerLoginPage />} />
          <Route exact path="/user/register" element={<CustomerSignupPage />} />
          <Route exact path="/seller/register" element={<SellerSignupPage />} />
          <Route exact path="/product/:id" element={<ProductDetailPage />} />
          <Route exact path="/user/me" element={<UserProfilePage />} />
          <Route exact path="/seller/me" element={<SellerProfilePage />} />
          <Route exact path="/product/create" element={<CreateProductPage />} />
          <Route
            exact
            path="/user/me/update"
            element={<UpdateUserProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
