import React from "react";
import Grid from '@mui/material/Grid';
import { TextBox, Title } from "@styles/TextStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { HeroBox } from "@styles/HeroBox";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                <HeroBox>
                    <Title component="h1">
                        AlphaNumeric Detector
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={6}>
                <Box textAlign="center">
                    <Link to="/drawing-instructions" style={{ textDecoration: 'none', color: 'DodgerBlue' }} >
                        <Button
                            style={{ width: "50%", height: "150%", fontSize: 25 }}
                            variant="contained">
                            Drawing
                        </Button>
                    </Link>
                </Box>
            </Grid>
            <Grid size={6}>
                <Box textAlign="center">
                    <Link to="/detect" style={{ textDecoration: 'none', color: 'DodgerBlue' }}>
                        <Button
                            style={{ width: "50%", height: "150%", fontSize: 25 }}
                            variant="contained">
                            Detect
                        </Button>
                    </Link>
                </Box>
            </Grid>
            <Grid size={12}>
                <TextBox
                    style={
                        {
                            marginLeft: "5%",
                            marginRight: "5%"
                        }
                    }
                >
                    <Typography variant="h5">
                        Data scarcity is very real for certain applications. For instance, the MNIST dataset only has around 60 thousand samples to work with.
                        And while the EMNIST dataset has significantly more, there remains a need to gather character image data. This project proposes a fun
                        way to gather this data in an crowd sourcing manner. The more users utilize this website for its intended purpose, the more good quality
                        data we will have to carry out useful tasks.

                        <br /><br />

                        The <b>DRAWING</b> mode focuses on the data collection aspect of our project, whereas the <b>DETECT</b> mode focuses on the fun user application.
                        Specifically, users upload an image. Then, with the help of our internal Machine Learning model, we detect characters within their image to the
                        best of our ability.

                        <br /> <br />

                        Click on <b>"DRAWING"</b> or <b>"DETECT"</b> to continue.
                    </Typography>
                </TextBox>
            </Grid>
            <Grid size={12}>
                <Title component="h1">
                    Gallery
                </Title>
                <Box>
                    <Typography
                        align="left"
                        marginLeft="5%"
                        variant="h5">
                        Below are some samples of images taken from the emnist dataset. Eventually, when more user data becomes available,
                        we will be able to see drawings from other users:
                    </Typography>
                    <TextBox
                        style={
                            {
                                marginLeft: "5%",
                                marginRight: "5%",
                                marginTop: "1%"
                            }
                        }
                    >
                        <Grid
                            container
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            p={4}
                            spacing={{ xs: 1, md: 1 }}
                            columns={{ xs: 4, sm: 12, md: 16 }}>

                            {Array.from(Array(20)).map((_, index) => (
                                <Grid key={index}>
                                    <Box>
                                        <img
                                            src={""}
                                            alt=""
                                            loading="lazy"
                                            width="250"
                                            height="200"
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </TextBox>

                </Box>
            </Grid>
        </Grid >
    );
}

export default Home;
