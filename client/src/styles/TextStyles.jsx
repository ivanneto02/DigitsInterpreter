import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const TextBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
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
}));

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: "none",
    opacity: 1,
    backgroundImage: "none", // fixes lighter dark mode background
}));

export { TextBox, Title };
