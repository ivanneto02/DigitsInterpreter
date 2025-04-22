import './App.css';
import React, { useMemo, useState } from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import About from "@pages/About";
import Contact from "@pages/Contact";
import Home from "@pages/Home";
import Drawing from "@pages/Drawing";
import DrawingInstructions from "@pages/DrawingInstructions";
import Detecting from "@pages/Detecting";
import Page from '@components/Page';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from './components/ColorModeContext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page pageName={"Homepage"} component={Home} />,
    },
    {
        path: "/home",
        element: <Page pageName={"Homepage"} component={Home} />,
    },
    {
        path: "/about",
        element: <Page pageName={"About"} component={About} />,
    },
    {
        path: "/contact",
        element: <Page pageName={"Contact"} component={Contact} />,
    },
    {
        path: "/drawing-instructions",
        element: <Page pageName={"Drawing Instructions"} component={DrawingInstructions} />,
    },
    {
        path: "/drawing",
        element: <Page pageName={"Drawing"} component={Drawing} />,
    },
    {
        path: "/detect",
        element: <Page pageName={"Detecting"} component={Detecting} />,
    },
]);

function App() {

    /* Keep track of mode in the app level */
    const [mode, setMode] = useState(localStorage.getItem("color") || "light");

    /* defines toggleColorMode, which will change the color from a child at any depth */
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => {
                if (prev === "light") {
                    localStorage.setItem("color", "dark");
                    return "dark";
                }
                else {
                    localStorage.setItem("color", "light");
                    return "light";
                }
            });
        },
        color: mode,
    }), [mode]);

    /* Memoize the theme, changes color based on mode */
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode, // defines which mode
                },
            }),
        [mode],
    );

    /* Wrap the app with the ColorModeContext, which will pass the colorMode toggle
     * to every child that needs it, provided they use useContext(ColorModeContext) */
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider
                theme={theme}
            >
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
