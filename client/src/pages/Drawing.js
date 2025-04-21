import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { TextBox, Title } from "../styles/TextStyles";
import ToggleButtonDrawing from "../misc/ToggleButtonDrawing";
import { FabricJSCanvas } from "fabricjs-react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { randChar } from "@utils/randChar";
import Canvas from "@components/Canvas";

function Drawing() {
    const [showInstructions, setShowInstructions] = useState(true);

    return (
        <Grid
            container
            alignItems="center"
            textAlign="center"
            justifyContent="center"
            spacing={4}
            columns={16}
        >
            <Grid item xs={16}>
                <Title component="h1">
                    Drawing
                </Title>
            </Grid>
            <Grid item xs={16}>
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
            <Grid item xs={16}>
                <ToggleButtonDrawing setShowParentInstructions={setShowInstructions} />
            </Grid>

        </Grid>
    );
}

export default Drawing;
