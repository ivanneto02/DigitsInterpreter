import SurroundLayout from "@components/SurroundLayout";
import { Box } from "@mui/system";
import Footer from "./Footer";

const Page = (props) => {
    return (
        <>
            <SurroundLayout pageName={props.pageName} />
            <Box
            >
                <props.component />
            </Box>
            <Footer />
        </>
    );
}

export default Page;
