import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { Title } from "@styles/TextStyles";
import { Box, Button, Typography } from "@mui/material";
import { randChar } from "@utils/randChar";
import Canvas from "@components/Canvas";
import { HeroBox } from "@styles/HeroBox";
import { styled } from "@mui/material/styles";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const CanvasButtonsBox = styled(Box)(() => ({
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "1fr 1fr",
    gap: "1em",
    marginBottom: "1em",
    marginLeft: "40%",
    marginRight: "40%",
    "@media screen and (max-width:900px)": {
        marginLeft: "10%",
        marginRight: "10%",
    },
}));

const StyledCanvasControlButton = styled(Button)(({ theme }) => ({
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width:900px)": {

    },
}));

const CanvasControlButton = (props) => {
    return (
        <StyledCanvasControlButton
            variant="contained"
            onClick={props.onClick}
        >
            <props.icon
                style={{
                    fontSize: 40,
                }}
            />
            <Typography variant="p">{props.text}</Typography>
        </StyledCanvasControlButton>
    );
}

const Drawing = () => {
    const [ref, setRef] = useState();

    const handleCanvasClearClick = () => {
        ref.current.clear();
    };

    const handleCanvasUploadClick = () => {
        ref.current.clear();
    };

    return (
        <Grid container>
            <Grid size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
                <HeroBox>
                    <Title component="h1">
                        Drawing
                    </Title>
                </HeroBox>
                <Title component="h2">
                    Draw the character "{randChar()}"
                </Title>
                <Box display="flex" justifyContent="center">
                    <Canvas height={500} width={500} ref={ref} setRef={setRef} />
                </Box>
                <CanvasButtonsBox>
                    <CanvasControlButton icon={FaCloudUploadAlt} text={"Upload"} onClick={handleCanvasUploadClick} />
                    <CanvasControlButton icon={MdClear} text={"Clear"} onClick={handleCanvasClearClick} />
                </CanvasButtonsBox>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 2, lg: 2, xl: 2 }}>
                <HeroBox>
                    <Title component="h1">
                        Reference
                    </Title>
                </HeroBox>
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 5, lg: 5, xl: 5 }}>
                <HeroBox>
                    <Title component="h1">
                        Live Predictions
                    </Title>
                </HeroBox>
            </Grid>
        </Grid>
    );
}

export default Drawing;
