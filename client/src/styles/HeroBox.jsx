import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledHeroBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...theme.typography.body1,
    padding: theme.spacing(1),
    alignContent: "center",
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary, /*theme.palette.text.primary,*/
    height: '250px',
    paddingTop: '50px',
    backgroundImage: "none", // Otherwise background is lighter in dark mode
}));

/* Hero box */
const HeroBox = (props) => {
    return <StyledHeroBox> {props.children} </ StyledHeroBox>
}

export { HeroBox };
