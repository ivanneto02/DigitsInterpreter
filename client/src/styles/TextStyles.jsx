import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const TextBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body1,
    padding: '5%',
    paddingTop: '50px',
    paddingBottom: '50px',
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundImage: "none", // fixes lighter dark mode background
    boxShadow: theme.palette.custom.textbox.border,
    "@media screen and (max-width: 900px)": {
        padding: "5%",
        margin: 0,
        border: "none",
        boxShadow: "none",
    }
}));

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: "none",
    opacity: 1,
    backgroundImage: "none", // fixes lighter dark mode background
}));

export { TextBox, Title };
