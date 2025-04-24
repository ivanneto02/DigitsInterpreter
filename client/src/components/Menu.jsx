import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ModeIcon from "@mui/icons-material/Mode";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InfoIcon from "@mui/icons-material/Info";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const Menu = () => {

    const topElements = [
        { text: "Home", icon: HomeIcon, linkto: "/home" },
        { text: "Drawing", icon: ModeIcon, linkto: "/drawing" },
        { text: "Uploading", icon: CameraAltIcon, linkto: "/uploading" },
    ];

    const bottomElements = [
        { text: "About", icon: InfoIcon, linkto: "/about" },
        { text: "Drawing Instructions", icon: HelpCenterIcon, linkto: "/drawing-instructions" },
        { text: "Upload Instructions", icon: HelpCenterIcon, linkto: "/uploading-instructions" },
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
                    bottomElements.map((item, index) => (
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
        </div>
    );
}

export default Menu;
