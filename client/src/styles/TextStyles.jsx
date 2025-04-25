import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const TextBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body1,
    padding: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'left',
    color: theme.palette.text.primary,
    "@media screen and (max-width: 900px)": {
        padding: 0,
        margin: "2%",
        border: "none",
        boxShadow: "none",
    }
}));

const PaperTextBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body1,
    padding: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'left',
    color: theme.palette.text.primary,
    backgroundImage: "none", // fixes lighter dark mode background
    boxShadow: theme.palette.custom.textbox.border,
    "@media screen and (max-width: 900px)": {
        padding: 0,
        margin: "2%",
        border: "none",
        boxShadow: "none",
    }
}));

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: "none",
    opacity: 1,
    backgroundImage: "none", // fixes lighter dark mode background
}));

export { TextBox, Title, PaperTextBox };
