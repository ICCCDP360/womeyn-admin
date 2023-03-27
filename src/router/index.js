import { memo } from "react";

//router
import { Route, Routes } from "react-router-dom";
import Default from "../layout/default";

//Pages
import SignIn from "../pages/auth/sign-in";
import Index from "../pages/views/dashboard";
import EditUser from "../pages/views/editUser/editUser";
import ForgetPassword from "../pages/views/forgotPassword/forgotPassword";
import UpdateForgotPassword from "../pages/views/passwordChange/updateForgotPassword";
import ProductList from "../pages/views/productList/productList";
import ProductPage from "../pages/views/productsPage/productsPage";
import SellerApproval from "../pages/views/sellerApproval/sellerApproval";
import SellerProfile from "../pages/views/sellerProfile/sellerProfile";
import ServiceList from "../pages/views/serviceList/serviceList";
import UserManagement from "../pages/views/userManagement/userManagement";
import ProtectedRoutes from "./protected-routes";
// import  from "../pages/views/productsPage/subCategoryList";
import Banner from "../pages/views/Banner/banner";
import CouponList from "../pages/views/couponCreation/couponList";
import AddPlacement from "../pages/views/placement/addPlacement";
import PlacementList from "../pages/views/placement/placementList";
import ProductDetails from "../pages/views/productList/productDetails";
import SubCategory from "../pages/views/productsPage/subCategoryList";
import SubCategoryPage from "../pages/views/productsPage/subCategoryPage";

//Users
import AddProduct from "../pages/views/addProduct/addProduct";
import AddService from "../pages/views/addService/addService";
import AddUser from "../pages/views/addUser/addUser";
import CouponCreation from "../pages/views/couponCreation/couponCreation";
import EditCoupon from "../pages/views/couponCreation/editCoupon";
// import OrderInvoice from "../pages/views/orders-list/allorderdetails/orderInvoice";
import OrderInvoice from "../pages/views/orders-list/allorderdetails/orderInvoice";
import ViewOrderDetails from "../pages/views/orders-list/allorderdetails/ViewOrderDetails";
import Order from "../pages/views/orders-list/OrderDetails";
import PlacementProperties from "../pages/views/placement/placementProperties";
import ScriptProperties from "../pages/views/placement/scriptProperties";
import ServicePage from "../pages/views/servicePage/servicePage";
import Subscribers from "../pages/views/Subscribers/Subscribers";
import ChatSystem from "../pages/views/ticketQuery";
import Tickets from "../pages/views/tickets/Tickets";
import Ticketsview from "../pages/views/tickets/ticketsview/Ticketsview";
import Transactions from "../pages/views/Transaction/Transactions";
import UserProfile from "../pages/views/userProfile/userProfile";

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
            path="placement-list"
            element={<PlacementList></PlacementList>}
          ></Route>
          <Route
            path="add-placement"
            element={<AddPlacement></AddPlacement>}
          ></Route>
          <Route path="banner" element={<Banner></Banner>}></Route>
          <Route path="orders" element={<Order></Order>}></Route>
          <Route
            path="view-order/:id"
            element={<ViewOrderDetails></ViewOrderDetails>}
          ></Route>
          <Route
            path="order-invoice"
            element={<OrderInvoice></OrderInvoice>}
          ></Route>
          <Route
            path="transactions"
            element={<Transactions></Transactions>}
          ></Route>
          <Route
            path="subscribers"
            element={<Subscribers></Subscribers>}
          ></Route>
          <Route path="services" element={<ServiceList></ServiceList>}></Route>
          <Route
            path="placement-properties/:id"
            element={<PlacementProperties></PlacementProperties>}
          ></Route>
          <Route
            path="placement-script-properties/:id"
            element={<ScriptProperties></ScriptProperties>}
          ></Route>
          <Route path="coupons" element={<CouponList></CouponList>}></Route>
          <Route
            path="coupon-creation"
            element={<CouponCreation></CouponCreation>}
          ></Route>
          <Route
            // path="coupon/edit-coupon/:id"
            path="coupon/edit-coupon/:id"
            element={<EditCoupon></EditCoupon>}
          ></Route>
          {/* <Route
            // path="coupon/edit-coupon/:id"
            path="chat"
            element={<ChatSystem></ChatSystem>}
          ></Route> */}
          <Route path="tickets" element={<Tickets></Tickets>}></Route>
          <Route
            path="ticket-view/:id"
            element={<Ticketsview></Ticketsview>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
