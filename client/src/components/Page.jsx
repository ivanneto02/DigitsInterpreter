import SurroundLayout from "@components/SurroundLayout";
import { Box } from "@mui/system";

const Page = (props) => {
    return (
        <>
            <SurroundLayout pageName={props.pageName} />
            <Box
            >
                <props.component />
            </Box>
        </>
    );
}

export default Page;
