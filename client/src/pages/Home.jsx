import React from "react";
import Grid from '@mui/material/Grid';
import { TextBox, Title, PaperTextBox } from "@styles/TextStyles";
import Box from "@mui/material/Box";
import { LinkButton } from "@components/Button";
import { MdDraw } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

import { HeroBox } from "@styles/HeroBox";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const HomeButtonsBox = styled(Box)(() => ({
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "1fr",
    gap: "1em",
    marginBottom: "1em",
    marginLeft: "40%",
    marginRight: "40%",
    "@media screen and (max-width:900px)": {
        marginLeft: "10%",
        marginRight: "10%",
    },
}));

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
            <Grid size={12}>
                <HomeButtonsBox>
                    <LinkButton to="/drawing-instructions" icon={MdDraw} text={"Drawing"} />
                    <LinkButton to="/uploading-instructions" icon={FaCloudUploadAlt} text={"Uploading"} />
                </HomeButtonsBox>
            </Grid>
            <Grid size={12}>
                <PaperTextBox>
                    <Typography variant="p">
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
                </PaperTextBox>
            </Grid>
            <Grid size={12}>
                <Title component="h1">
                    Gallery
                </Title>
                <Box>
                    <TextBox>
                        <Typography variant="p">
                            Below are some samples of images taken from the emnist dataset. Eventually, when more user data becomes available,
                            we will be able to see drawings from other users:
                        </Typography>
                    </TextBox>
                    <PaperTextBox
                        style={
                            {
                                "@media screen and (max-width: 900px)": {
                                    marginLeft: "0%",
                                    marginRight: "0%",
                                    marginTop: "1%",
                                }
                            }
                        }
                    >
                        <Grid
                            container
                            style={{
                                justifyContent: "left",
                                alignContent: "left",
                                marginLeft: "auto",
                                marginRight: "auto",
                                "@media screen and (max-width: 900px)": {
                                    marginLeft: "0",
                                    marginRight: "0",
                                    paddingLeft: "0",
                                    paddingRight: "0",
                                }
                            }}
                        >

                            {Array.from(Array(50)).map((_, index) => (
                                <Grid key={index}>
                                    <Box>
                                        <img
                                            src={""}
                                            alt=""
                                            loading="lazy"
                                            width="100%"
                                            height="100%"
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </PaperTextBox>
                </Box>
            </Grid>
        </Grid >
    );
}

export default Home;
