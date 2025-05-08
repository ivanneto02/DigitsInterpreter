import React, { useContext } from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ModeIcon from "@mui/icons-material/Mode";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InfoIcon from "@mui/icons-material/Info";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "./AuthContext";

const Menu = () => {

    const { handleAppLogout } = useContext(AuthContext);

    const topElements = [
        { text: "Home", icon: HomeIcon, linkto: "/home" },
        { text: "Drawing", icon: ModeIcon, linkto: "/drawing" },
        { text: "Uploading", icon: CameraAltIcon, linkto: "/uploading" },
    ];

    const middleElements = [
        { text: "About", icon: InfoIcon, linkto: "/about" },
        { text: "Drawing Instructions", icon: HelpCenterIcon, linkto: "/drawing-instructions" },
        { text: "Upload Instructions", icon: HelpCenterIcon, linkto: "/uploading-instructions" },
    ];

    const bottomElements = [
        { text: "Sign out", icon: LogoutIcon, linkto: "/" },
    ];

    return (
        <div>
            <List
                style={{
                    "marginBottom": "3em",
                }}
            >
                {
                    topElements.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                        >
                            <ListItemButton href={item.linkto}>
                                <ListItemIcon><item.icon /></ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
            <List>
                {
                    middleElements.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                        >
                            <ListItemButton href={item.linkto}>
                                <ListItemIcon><item.icon /></ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />

            {/* Sign out button */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton href={"/"} onClick={handleAppLogout}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary={"Sign out"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
}

export default Menu;
