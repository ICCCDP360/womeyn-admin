import { memo } from "react";

//router
import { Routes, Route } from "react-router-dom";
import Default from "../layout/default";

//Pages
import SignIn from "../pages/auth/sign-in";
import Index from "../pages/views/dashboard";
import EditUser from "../pages/views/editUser/editUser";
import SellerApproval from "../pages/views/sellerApproval/sellerApproval";
import UserManagement from "../pages/views/userManagement/userManagement";
import ProductPage from "../pages/views/productsPage/productsPage";
import ProtectedRoutes from "./protected-routes";
import ForgetPassword from "../pages/views/forgotPassword/forgotPassword";
import UpdateForgotPassword from "../pages/views/passwordChange/updateForgotPassword";
import SellerProfile from "../pages/views/sellerProfile/sellerProfile";
import ProductList from "../pages/views/productList/productList";
import ServiceList from "../pages/views/serviceList/serviceList";
// import  from "../pages/views/productsPage/subCategoryList";
import SubCategory from "../pages/views/productsPage/subCategoryList";
import SubCategoryPage from "../pages/views/productsPage/subCategoryPage";
import ProductDetails from "../pages/views/productList/productDetails";
import PlacementList from "../pages/views/placement/placementList";
import AddPlacement from "../pages/views/placement/addPlacement";

//Users
import UserProfile from "../pages/views/userProfile/userProfile";
import AddUser from "../pages/views/addUser/addUser";
import AddProduct from "../pages/views/addProduct/addProduct";
import CouponCreation from "../pages/views/couponCreation/couponCreation";
import ServicePage from "../pages/views/servicePage/servicePage";
import AddService from "../pages/views/addService/addService";

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
            path="product-category"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="product-add" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="category/:categoryId/:name"
            element={<SubCategory></SubCategory>}
          ></Route>
          <Route
            path="sub-category/:categoryId/:name"
            element={<SubCategoryPage></SubCategoryPage>}
          ></Route>
          <Route
            path="service-category"
            element={<ServicePage></ServicePage>}
          ></Route>
          <Route path="service-add" element={<AddService></AddService>}></Route>
          <Route
            path="product-list"
            element={<ProductList></ProductList>}
          ></Route>
          <Route
            path="product-details/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="service-list"
            element={<ServiceList></ServiceList>}
          ></Route>
          <Route
            path="create-coupon"
            element={<CouponCreation></CouponCreation>}
          ></Route>
          <Route
            path="placement-list"
            element={<PlacementList></PlacementList>}
          ></Route>
          <Route
            path="add-placement"
            element={<AddPlacement></AddPlacement>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
