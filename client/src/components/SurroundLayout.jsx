import Appbar from "./Appbar";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useState } from "react";

const SurroundLayout = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Appbar name={props.pageName} open={open} setOpen={setOpen} />
            <Main open={open} />
            <Sidebar open={open} setOpen={setOpen} />
        </>
    );
}

export default SurroundLayout;
