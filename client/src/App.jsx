import './App.css';
import React, { useMemo, useState } from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import About from "@pages/About";
import Home from "@pages/Home";
import Drawing from "@pages/Drawing";
import DrawingInstructions from "@pages/DrawingInstructions";
import Uploading from "@pages/Uploading";
import UploadingInstructions from "@pages/UploadingInstructions";
import Page from '@components/Page';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorModeContext from './components/ColorModeContext';
import { lightPalette, darkPalette } from "@styles/palettes";

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
        path: "/drawing-instructions",
        element: <Page pageName={"Drawing Instructions"} component={DrawingInstructions} />,
    },
    {
        path: "/drawing",
        element: <Page pageName={"Drawing"} component={Drawing} />,
    },
    {
        path: "/uploading",
        element: <Page pageName={"Uploading"} component={Uploading} />,
    },
    {
        path: "/uploading-instructions",
        element: <Page pageName={"Upload Instructions"} component={UploadingInstructions} />,
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
                ...(mode === "dark" ? darkPalette : lightPalette),
            }),
        [mode],
    );

    /* Wrap the app with the ColorModeContext, which will pass the colorMode toggle
     * to every child that needs it, provided they use useContext(ColorModeContext) */
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
