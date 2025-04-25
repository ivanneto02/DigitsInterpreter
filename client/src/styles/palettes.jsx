const lightPalette = {
    typography: {
        fontSize: 15,
    },
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
        text: {
            primary: "#000000",
            secondary: "#005eff",
        },
        custom: {
            textbox: {
                border: "1px 0px 3px black, -1px 0px 3px black",
            },
            appbar: {
                border: "solid 1px #000000",
                background: "#ffffff",
            },
            footer: {
                border: "solid 1px #000000",
                background: "#ffffff",
            },
        },
    },
}

const darkPalette = {
    palette: {
        mode: "dark",
        background: {
            default: "#050505",
            paper: "#060606",
        },
        text: {
            primary: "#ffffff",
            secondary: "#90caf9",
        },
        custom: {
            textbox: {
                border: "3px 0 5px black, -3px 0 5px black",
            },
            appbar: {
                border: "solid 1px #6e6e6e",
                background: "#060606",
            },
            footer: {
                border: "solid 1px #6e6e6e",
                background: "#060606",
            },
        },
    },
}

export { lightPalette, darkPalette };
