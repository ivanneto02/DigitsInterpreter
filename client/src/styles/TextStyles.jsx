import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const TextBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
    ...theme.typography.body1,
    padding: '5%',
    paddingTop: '50px',
    paddingBottom: '50px',
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    boxShadow: "none",
}));

export { TextBox, Title };
