import { createContext } from "react";

/* Stores isAuthenticated for app-wide authentication */
const AuthContext = createContext({
    isAuthenticated: false,
    handleLogin: () => { },
    handleLogout: () => { },
});

export default AuthContext;
