import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { Title } from "../styles/TextStyles";
import { FaReact, FaCss3, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiAwslambda, SiAmazondynamodb, SiAmazonapigateway, SiNetlify, SiAmazons3, SiMui, SiStyledcomponents } from "react-icons/si";
import { GrCubes } from "react-icons/gr";

const StyledFooter = styled(Box)(({ theme }) => ({
    borderTop: theme.palette.custom.footer.border,
    minHeight: "300px",
    marginTop: theme.spacing(10),
}));

const FooterGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: theme.spacing(5),
    alignItems: "start",
}));

const FooterGridCol = styled(Grid)(({ theme }) => ({
    paddingLeft: "33%",
    container: true,
    alignContent: "center",
    columns: 1,
}));

const StyledFooterGridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    size: { xs: 2 },
    columns: 1,
    gap: theme.spacing(1),
}))

const FooterTitle = styled(Title)(() => ({
    textAlign: "left",
    paddingLeft: 0,
    marginLeft: 0,
}));

const FooterGridItem = (props) => {
    return (
        <StyledFooterGridItem>
            <props.icon />
            <Typography
                style={{
                    display: "flex",
                    gap: 5,
                    alignItems: "center",
                }}
            >{props.text}</Typography>
        </StyledFooterGridItem>
    );
}

const Footer = () => {
    return (
        <StyledFooter>
            <FooterGrid>
                <FooterGridCol>
                    <FooterTitle component="h3">Tech Stack</FooterTitle>
                    <FooterGridItem icon={FaReact} text={"ReactJS"} />
                    <FooterGridItem icon={SiStyledcomponents} text={"Styled Components"} />
                    <FooterGridItem icon={SiMui} text={"Material UI"} />
                    <FooterGridItem icon={FaHtml5} text={"HTML"} />
                    <FooterGridItem icon={FaCss3} text={"CSS"} />
                    <FooterGridItem icon={FaNodeJs} text={"NodeJS"} />
                    <FooterTitle component="h3">Cloud</FooterTitle>
                    <FooterGridItem icon={SiNetlify} text={"Netlify"} />
                    <FooterGridItem icon={SiAmazons3} text={"AWS S3"} />
                    <FooterGridItem icon={SiAwslambda} text={"AWS Lambda"} />
                    <FooterGridItem icon={GrCubes} text={"AWS CloudFront"} />
                    <FooterGridItem icon={SiAmazondynamodb} text={"AWS DynamoDB"} />
                    <FooterGridItem icon={SiAmazonapigateway} text={"AWS API Gateway"} />
                </FooterGridCol>
                <FooterGridCol>
                    <FooterTitle component="h3">Contact</FooterTitle>
                    <FooterGridItem icon={FaReact} text={"ivan.a.neto@hotmail.com"} />
                    <FooterGridItem icon={FaReact} text={"Riverside, CA"} />
                    <FooterGridItem icon={FaReact} text={"UC Riverside"} />
                    <FooterGridItem icon={FaReact} text={"Computer Science"} />
                </FooterGridCol>
                <FooterGridCol>
                    <FooterTitle component="h3">Other Work</FooterTitle>
                    <FooterGridItem icon={FaReact} text={"Tailwind"} />
                </FooterGridCol>
            </FooterGrid>
        </StyledFooter>
    );
};

export default Footer;
