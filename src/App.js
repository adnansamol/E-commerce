import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import CustomerLogin from "./components/Login/CustomerLogin";
import SellerLoginPage from "./components/Login/SellerLoginPage";
import CustomerSignupPage from "./components/Signup/CustomerSignupPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import UserProfilePage from "./components/User/UserProfile/UserProfilePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/user/login" element={<CustomerLogin />} />
        <Route exact path="/seller-login" element={<SellerLoginPage />} />
        <Route exact path="/user/register" element={<CustomerSignupPage />} />
        <Route exact path="/product/:id" element={<ProductDetailPage />} />
        <Route exact path="/user/me" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
