import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

/* Hero box */
const HeroBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white', /*theme.palette.text.primary,*/
    height: '250px',
    paddingTop: '50px',
}));

export { HeroBox };
