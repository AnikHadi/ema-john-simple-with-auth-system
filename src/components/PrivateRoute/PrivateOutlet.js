import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateOutlet = () => {
    const { user } = useAuth();
    // const auth = useAuth();
    console.log(user);
    return user.displayName ? <Outlet/> : <Navigate to='/login' />;
};

export default PrivateOutlet;

