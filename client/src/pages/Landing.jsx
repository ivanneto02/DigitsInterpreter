import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { HeroBox } from "../styles/HeroBox";
import { Title } from "../styles/TextStyles";
import { GoogleLogin } from "@react-oauth/google";
import AuthContext from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const { handleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/home");
        handleLogin();
    }

    const handleError = () => {
        console.log("Error logging in");
    }

    return (
        <Grid container spacing={2} columns={4}>
            <Grid size={4}>
                <HeroBox>
                    <Title component="h1">
                        Welcome to Alphanumeric Detector!
                    </Title>
                    <Typography variant="p">
                        Sign in to continue
                    </Typography>
                </HeroBox>
            </Grid>
            <Grid size={4} container alignItems="center" justifyContent="center">
                <Box>
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleError}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Landing;
