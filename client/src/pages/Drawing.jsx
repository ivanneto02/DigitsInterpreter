import React, { useRef } from "react";
import Grid from '@mui/material/Grid';
import { Title } from "@styles/TextStyles";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { randChar } from "@utils/randChar";
import Canvas from "@components/Canvas";

const Drawing = () => {
    const canvasRef = useRef(null);

    return (
        <Grid container>
            <Grid size={12}>
                <Title component="h1">
                    Drawing
                </Title>
            </Grid>
            <Grid size={12}>
                <Box>
                    <Typography variant="h4">
                        Draw the character "{randChar()}"
                    </Typography>
                    <Canvas
                        ref={canvasRef}
                        style={{
                            paddingLeft: "1em",
                            paddingRight: "1em",
                            marginRight: "1em",
                            marginLeft: "1em",
                            height: "800px",
                            border: '5px solid black',
                            background: "black",
                        }}

                        brushRadius={50}
                        brushColor="white"

                        onReady={canvas => {
                            canvas.setDimesions({ width: 800, height: 800 });
                            canvas.setBackgroundColor("black", canvas.renderAll.bind(canvas));
                        }}

                        onClick={() => {
                            console.log("clicking canvas");
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Drawing;
