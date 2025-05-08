import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../components/AuthContext";

/* Route only accessible to authenticated users */
const PrivateRoute = (props) => {
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        console.log(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <>
            {
                isAuthenticated === "true" ? props.children : <Navigate to="/" />
            }
        </>
    );
};

export default PrivateRoute;
