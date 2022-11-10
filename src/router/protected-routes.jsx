import { Navigate, Outlet } from "react-router-dom";
import loginServices from "../services/login_services/login-services";

const useAuth = async () => {
    const logged_in = await loginServices.useAuth();
    if (logged_in) {
        return logged_in
    } else {
        return false
    }

};


const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;