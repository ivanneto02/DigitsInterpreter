import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledHeroBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body1,
    alignContent: "center",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary, /*theme.palette.text.primary,*/
    backgroundImage: "none", // Otherwise background is lighter in dark mode
}));

/* Hero box */
const HeroBox = (props) => {
    return <StyledHeroBox> {props.children} </ StyledHeroBox>
}

export { HeroBox };
