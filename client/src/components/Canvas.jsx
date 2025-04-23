import { useEffect, useRef } from "react";
import { FabricJSCanvas } from "fabricjs-react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCanvas = styled(Box)(({ theme, width, height }) => ({
    border: "solid 1px white",
    marginBottom: theme.spacing(10),
    height: height,
    width: width,
    alignContent: "center",
}));

const Canvas = (props) => {
    const ref = useRef();

    const handleOnReady = (canvas) => {
        ref.current = canvas;
        canvas.setDimensions({ width: props.width, height: props.height });
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
