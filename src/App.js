import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import UserLoginPage from "./components/User/LoginPage/UserLoginPage";
import SellerLoginPage from "./components/Seller/LoginPage/SellerLoginPage";
import UserSignupPage from "./components/User/SignupPage/UserSignupPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import UserProfilePage from "./components/User/UserProfilePage/UserProfilePage";
import UpdateUserProfilePage from "./components/User/UserProfilePage/UpdateUserProfilePage";
import SellerSignupPage from "./components/Seller/SignupPage/SellerSignupPage";
import SellerProfilePage from "./components/Seller/SellerProfilePage/SellerProfilePage";
import CreateProductPage from "./components/Product/CreateProductPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import OrdersPage from "./components/User/Orders/OrdersPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user/login" element={<UserLoginPage />} />
          <Route exact path="/seller/login" element={<SellerLoginPage />} />
          <Route exact path="/user/register" element={<UserSignupPage />} />
          <Route exact path="/seller/register" element={<SellerSignupPage />} />
          <Route exact path="/product/:id" element={<ProductDetailPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route exact path="/user/me" element={<UserProfilePage />} />
            <Route
              exact
              path="/user/me/update"
              element={<UpdateUserProfilePage />}
            />
            <Route exact path="/user/me/orders" element={<OrdersPage />} />
          </Route>
          <Route exact path="/seller/me" element={<SellerProfilePage />} />
          <Route exact path="/product/create" element={<CreateProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
