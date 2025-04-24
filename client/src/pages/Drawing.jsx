import React from "react";
import Grid from '@mui/material/Grid';
import { Title } from "@styles/TextStyles";
import { Box } from "@mui/material";
import { randChar } from "@utils/randChar";
import Canvas from "@components/Canvas";
import { HeroBox } from "@styles/HeroBox";

const Drawing = () => {

    return (
        <Grid container>
            <Grid size={12}>
                <HeroBox>
                    <Title component="h1">
                        Drawing
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={12}>
                <Title component="h2">
                    Draw the character "{randChar()}"
                </Title>
            </Grid>
            <Grid size={12}>
                <Box display="flex" justifyContent="center">
                    <Canvas
                        height={800}
                        width={800}

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
