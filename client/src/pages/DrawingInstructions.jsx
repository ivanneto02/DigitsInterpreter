import React from "react";
import Grid from '@mui/material/Grid';
import { TextBox, Title } from "../styles/TextStyles";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HeroBox } from "@styles/HeroBox";

const DrawingInstructions = () => {
    return (
        <Grid container
            textAlign="center"
            direction="column"
            spacing={3}
            columns={4}
            alignItems="stretch"
        >
            <Grid size={4}>
                <HeroBox>
                    <Title component="h1">
                        Drawing
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={4}>
                <TextBox>
                    <Typography>
                        Draw a letter or digit. The game will prompt to you to write a letter (for example, "B").
                        Once you finish drawing the letter, you may press <b>"Next"</b> to move to the next letter.
                    </Typography>

                    <br></br>

                    <Typography>
                        The <b>"Undo"</b> button clears a stroke you have recently created.
                    </Typography>

                    <br></br>

                    <Typography>
                        The <b>"Clear"</b> button clears the current image you are drawing.
                    </Typography>

                    <br></br>

                    <Typography>
                        Feel free to use any of these utilities to make the characters as close as possible to what you think the character should look like.
                        You may be asked to draw the same character at different times. This is intentional.


                        The second aspect (2) focuses on the user’s experience of the application. Users need something tangible to connect with our application. By uploading their own images and having the application recognize the digits they have written, users have a use for the application besides data collection.
                    </Typography>

                    <br></br>

                    <Typography>Press <b>"Start"</b> to begin.</Typography>
                </TextBox>
            </Grid>
            <Grid size={4}>
                <Link
                    to="/drawing"
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

export default DrawingInstructions;
