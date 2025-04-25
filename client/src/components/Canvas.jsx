import { useEffect, useRef } from "react";
import { FabricJSCanvas } from "fabricjs-react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCanvas = styled(Box)(({ theme }) => ({
    border: theme.palette.custom.footer.border,
    marginBottom: theme.spacing(10),
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

    const handleOnReady = (canvas) => {

        const width = document.getElementById("fabric-canvas-container").clientWidth;
        const height = width;

        canvas.setDimensions({ width: width, height: height });
        ref.current = canvas;
    }

    // useEffect to see if current canvas exists already
    useEffect(() => {
        return () => {
            // Dispose canvas
            if (ref.current) {
                ref.current.dispose();
            }
        };
    }, []);

    return (
        <StyledCanvas
            height={props.height}
            width={props.width}
            id="fabric-canvas-container"
        >
            <FabricJSCanvas
                ref={ref}
                onReady={handleOnReady}
                brushColor="white"
                brushRadius={50}
            />
        </StyledCanvas>);
};

export default Canvas;
