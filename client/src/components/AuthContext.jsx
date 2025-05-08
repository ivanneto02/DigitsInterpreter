import { createContext, useState } from "react";

/* Stores isAuthenticated for app-wide authentication */
const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
