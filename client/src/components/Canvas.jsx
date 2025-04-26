import { FabricJSCanvas } from "fabricjs-react";
import { PencilBrush } from "fabric";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useEffect } from "react";

const StyledCanvas = styled(Box)(({ theme }) => ({
    border: theme.palette.custom.footer.border,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignContent: "center",
    "@media screen and (max-width: 900px)": {
        height: "100%",
        width: "100%",
    },
}));

const Canvas = (props) => {
    const ref = useRef();
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 900px)");

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                ref.current.clear();
            }
            else {
                console.log(`redundant key press: ${event.key}`);
            }
        };

        return () => {
            document.addEventListener("keypress", handleKeyDown);
        }
    }, []);

    // useEffect to see if current canvas exists already
    useEffect(() => {
        return () => {
            // Dispose canvas
            if (ref.current) {
                ref.current.dispose();
            }
        };
    }, []);

    /* Handle canvas component ready */
    const handleOnReady = (canvas) => {

        /* Canvas width and height based on real width */
        const width = document.getElementById("fabric-canvas-container").clientWidth;
        const height = width - 1;

        /* Set brush and canvas parameters */
        canvas.setDimensions({ width: width, height: height });
        canvas.isDrawingMode = true;
        canvas.backgroundColor = theme.palette.background.default;
        canvas.freeDrawingBrush = new PencilBrush(canvas);
        canvas.freeDrawingBrush.width = isMobile ? 60 : 90;
        canvas.freeDrawingBrush.color = theme.palette.text.primary;
        ref.current = canvas;
        props.setRef(ref);
        /* --- */
    }
    /* --- */

    return (
        <StyledCanvas
            height={props.height}
            width={props.width}
            id="fabric-canvas-container"
        >
            <FabricJSCanvas onReady={handleOnReady} />
        </StyledCanvas>);
};

export default Canvas;
