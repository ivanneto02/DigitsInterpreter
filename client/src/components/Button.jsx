import * as MuiMaterial from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiMaterial.Button)(() => ({
    width: "100%",
    height: "100%",
    fontSize: 40,
    display: "flex",
    flexDirection: "column",
}));

const StyledButtonLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'DodgerBlue',
}));

const LinkButton = (props) => {
    return (
        <StyledButtonLink to={props.to ? props.to : ""}>
            <StyledButton
                variant="contained"
            >
                <props.icon />
                <MuiMaterial.Typography>{props.text ? props.text : "NULL"}</MuiMaterial.Typography>
            </StyledButton>
        </StyledButtonLink >
    );
}

export { LinkButton };
