import { memo, useState } from "react";

//router
import { Routes, Route } from "react-router-dom";
import Default from "../layout/default";

//Pages
import SignIn from "../pages/auth/sign-in";
import Index from "../pages/views/dashboard";
import EditUser from "../pages/views/seller-approval/edit-user/edit-user";
import SellerApproval from "../pages/views/seller-approval/seller-approval";
import UserManagement from "../pages/views/user-management/user-management";
import ProductPage from "../pages/views/products-page/products-page";
import ProtectedRoutes from "./protected-routes";
import ForgetPassword from "../pages/views/forgot-password/forgot-password";
import UpdateForgotPassword from "../pages/views/password-change/updateForgotPassword";
import SellerProfile from "../pages/views/seller-profile/seller-profile";

//Users
import UserProfile from "../pages/views/app/user-profile";
import AddUser from "../pages/views/adduser/AddUser";
import AddProduct from "../pages/views/add-product/add-product";

const IndexRouters = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/forgot-password" element={<ForgetPassword />}></Route>
      <Route path="/reset-password" element={<UpdateForgotPassword />}></Route>
      <Route element={<ProtectedRoutes></ProtectedRoutes>}>
        <Route path="womeyn" element={<Default />}>
          <Route
            path="user-profile"
            element={<UserProfile></UserProfile>}
          ></Route>
          <Route path="dashboard" element={<Index></Index>}></Route>
          <Route
            path="seller-approval"
            element={<SellerApproval></SellerApproval>}
          ></Route>
          <Route
            path="seller-profile/:id"
            element={<SellerProfile></SellerProfile>}
          ></Route>
          <Route
            path="seller-approval/edit/:id"
            element={<EditUser></EditUser>}
          ></Route>
          <Route
            path="user-management"
            element={<UserManagement></UserManagement>}
          ></Route>
          <Route path="user-add" element={<AddUser></AddUser>}></Route>
          <Route
            path="product-page"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="product-add" element={<AddProduct></AddProduct>}></Route>
        </Route>
      </Route>
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
