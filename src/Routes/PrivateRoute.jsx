import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user ,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className="text-center h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg "></span>
        </div>
    }

    if(user){
        return children 
    }

    return <Navigate state={location.pathname} to={`/login`}></Navigate>
};

export default PrivateRoute;