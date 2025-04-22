import ThemeContext from "@components/ThemeContext";
import { useContext, useState } from "react";

/* Wrap entire App in this so that components can be themed.
 * This way we do not need to pass props down to components and up to parent
 * to toggle dark/light mode.
 * */
const ThemeProvider = (props) => {

    // top-level variables set the theme for the entire app
    const [theme, setTheme] = useState("light");

    /* Function will be called from toggler */
    const toggleTheme = () => {
        if (theme === "light") { setTheme("dark"); }
        else { setTheme("light"); }
    }

    return ( // wrap
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

// Used for themeing components
const useTheme = () => {
    return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
