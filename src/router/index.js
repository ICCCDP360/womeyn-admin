import { memo } from "react";

//router
import { Routes, Route } from "react-router-dom";
import Default from "../layout/default";

//Pages
import SignIn from "../pages/auth/sign-in";
import Index from "../pages/views/dashboard";
import SellerApproval from "../pages/views/seller-approval/seller-approval";
import UserManagement from "../pages/views/user-management/user-management";

const IndexRouters = memo(() => {
  console.log("index router");
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="womeyn" element={<Default />}>
        <Route path='dashboard' element={<Index></Index>}></Route>
        <Route path='seller-approval' element={<SellerApproval></SellerApproval>}></Route>
        <Route path='user-management' element={<UserManagement></UserManagement>}></Route>


      </Route>
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;
