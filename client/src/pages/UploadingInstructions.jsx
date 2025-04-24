import React from "react";
import Grid from '@mui/material/Grid';
import { TextBox, Title } from "@styles/TextStyles";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HeroBox } from "@styles/HeroBox";

const UploadingInstructions = () => {
    return (
        <Grid
            container
            textAlign="center"
            direction="column"
            spacing={3}
            columns={3}
            alignItems="stretch"
        >
            <Grid size={3}>
                <HeroBox>
                    <Title component="h1">
                        Uploading Instructions
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={3}>
                <TextBox>
                    <Typography>
                        Detect your own drawings! This mode is for your own enjoyment, we do not collect any of your drawing data.
                    </Typography>

                    <br></br>

                    <Typography>
                        Upon starting, you will be asked to upload an image containing alphanumeric characters.
                        You may choose anything from handdrawn digits, letters, to a typed equivalent. <b>Please ensure your image is in PNG format.</b>
                    </Typography>

                    <br></br>

                    <Typography>Press <b>"Start"</b> to begin.</Typography>
                </TextBox>
            </Grid>
            <Grid size={3}>
                <Link
                    to="/uploading"
                    style={
                        {
                            textDecoration: "none",
                            color: "DodgerBlue",
                        }
                    }
                >
                    <Button
                        style={{ width: "25%", height: "150%", fontSize: 25 }}
                        variant="contained"
                    >
                        Start
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
}

export default UploadingInstructions;
