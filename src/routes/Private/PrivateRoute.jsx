import {  useContext } from "react";
import { AuthContext } from "../../ContextAPI/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const {pathname} = useLocation();
    

    if(user){
        return children
    }

    return (
        <div>
           <Navigate state={pathname} to="/login"></Navigate> 
        </div>
    );
};

PrivateRoute.propTypes = {
    children:PropTypes.object
}

export default PrivateRoute;