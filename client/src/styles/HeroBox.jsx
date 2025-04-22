import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledHeroBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    ...theme.typography.body1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary, /*theme.palette.text.primary,*/
    height: '250px',
    paddingTop: '50px',
}));

/* Hero box */
const HeroBox = (props) => {

    return <StyledHeroBox> {props.children} </ StyledHeroBox>
}

export { HeroBox };
