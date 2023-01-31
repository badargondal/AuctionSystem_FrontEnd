import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages";
import Signup from "./pages/seller/signup/index";
import Login from "./pages/seller/login/index";
import BuyerSignup from "./pages/buyer/signup/index";
import BuyerLogin from "./pages/buyer/login/index";
import AdminLogin from "./pages/admin/login/index";
import AdminSignup from "./pages/admin/signup/index";
import CreateProduct from "./pages/seller/product/create/index";
import Protected from "./components/protected";
import ProtectedSeller from "./components/protectedSeller";
import Unauthorized from "./pages/unauthorized/index";
import Myproducts from "./pages/seller/product/Myproducts/index";
import Auction from "./pages/auction/index";
import CreateAuction from "./pages/seller/auction/create/index";
import ProductDetail from "./pages/products/id";
import AuctionDetail from "./pages/auction/id";
import Products from "./pages/products/index";
import AdminAuction from "./pages/admin/auction/index";
import AdminDashboard from "./pages/admin/dashboard/index";
import PurchasedProducts from "./pages/buyer/products/index";
import SellerReport from "./pages/seller/report/index";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* Public Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/auction/:id" element={<AuctionDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/auctions"
          element={
            <Protected>
              <AdminAuction />
            </Protected>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <Protected>
              <AdminDashboard />
            </Protected>
          }
        />

        <Route path="/seller/login" element={<Login />} />
        <Route path="/seller/signup" element={<Signup />} />
        {/* Seller Protected Routes */}
        <Route
          path="/seller/products"
          element={
            <ProtectedSeller>
              <Myproducts />
            </ProtectedSeller>
          }
        />
        <Route
          path="/seller/product/create"
          element={
            <ProtectedSeller>
              <CreateProduct />
            </ProtectedSeller>
          }
        />
        <Route
          path="/seller/auction/create"
          element={
            <ProtectedSeller>
              <CreateAuction />
            </ProtectedSeller>
          }
        />
        <Route
          path="/seller/report"
          element={
            <ProtectedSeller>
              <SellerReport />
            </ProtectedSeller>
          }
        />
        {/* Buyer Protected Routes */}
        <Route
          path="/buyer/products/purchased"
          element={
            <Protected>
              <PurchasedProducts />
            </Protected>
          }
        />
        <Route path="/buyer/signup" element={<BuyerSignup />} />
        <Route path="/buyer/login" element={<BuyerLogin />} />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
