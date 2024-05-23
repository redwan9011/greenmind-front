/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRouts = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center items-center h-screen w-full">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
    // return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRouts;