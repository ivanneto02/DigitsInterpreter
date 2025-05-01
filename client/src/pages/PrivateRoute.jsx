import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "@components/AuthContext";

/* Route only accessible to authenticated users */
const PrivateRoute = (props) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
