import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LightSwitchButton from "@components/LightSwitchButton";

const drawerWidth = 240;

const StyledMuiAppbar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: theme.palette.custom.appbar.background,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
    backgroundImage: "none", // Otherwise background is lighter in dark mode
    color: theme.palette.text.primary,
    borderBottom: theme.palette.custom.appbar.border,
    boxShadow: "none",
}));

const Appbar = (props) => {
    const handleAppbarOpenButton = () => {
        props.setOpen(true);
    }

    return (
        <StyledMuiAppbar position="relative" open={props.open}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                    {props.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                </Box>
                <LightSwitchButton />
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleAppbarOpenButton}
                    sx={{ ...(props.open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </StyledMuiAppbar>
    );
}

export default Appbar;
