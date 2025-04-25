import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Title } from "../styles/TextStyles";
import { FaReact, FaNodeJs, FaMapMarkerAlt, FaCode, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiAwslambda, SiAmazondynamodb, SiAmazonapigateway, SiNetlify, SiAmazons3, SiMui, SiStyledcomponents } from "react-icons/si";
import { IoSchool } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GrCubes } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

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
    "@media screen and (max-width: 900px)": {
        gridTemplateColumns: "auto",
    }
}));

const FooterGridCol = styled(Grid)(({ theme }) => ({
    paddingLeft: "33%",
    container: true,
    alignContent: "center",
    columns: 1,
    "@media screen and (max-width: 900px)": {
        paddingLeft: "0",
        paddingBottom: theme.spacing(4),
        borderBottom: theme.palette.custom.footer.border,
    }
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

const FooterTitle = styled(Title)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: "left",
    paddingLeft: 0,
    marginLeft: 0,
    "@media screen and (max-width: 900px)": {
        textAlign: "center",
    }
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    transition: "color 0.2s ease-in-out",
    ":hover": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
    },
}));

const FooterGridItem = (props) => {
    return (
        <StyledLink href={props.href} target="_blank" rel="noreferrer">
            <StyledFooterGridItem>
                <props.icon />
                <Typography
                    style={{
                        display: "flex",
                        gap: 5,
                        alignItems: "center",
                        fontSize: 15,
                    }}
                >{props.text}</Typography>
            </StyledFooterGridItem>
        </StyledLink>
    );
}

const Footer = () => {
    return (
        <StyledFooter>
            <FooterGrid>
                <FooterGridCol>
                    <FooterTitle component="h3">Tech Stack</FooterTitle>
                    <FooterGridItem href="https://react.dev" icon={FaReact} text={"ReactJS"} />
                    <FooterGridItem href="https://styled-components.com/" icon={SiStyledcomponents} text={"Styled Components"} />
                    <FooterGridItem href="https://mui.com/material-ui/" icon={SiMui} text={"Material UI"} />
                    <FooterGridItem href="https://nodejs.org/" icon={FaNodeJs} text={"NodeJS"} />
                    <FooterGridItem href="https://www.netlify.com/" icon={SiNetlify} text={"Netlify"} />
                    <FooterGridItem href="https://aws.amazon.com/s3/" icon={SiAmazons3} text={"AWS S3"} />
                    <FooterGridItem href="https://aws.amazon.com/lambda/" icon={SiAwslambda} text={"AWS Lambda"} />
                    <FooterGridItem href="https://aws.amazon.com/cloudfront/" icon={GrCubes} text={"AWS CloudFront"} />
                    <FooterGridItem href="https://aws.amazon.com/dynamodb/" icon={SiAmazondynamodb} text={"AWS DynamoDB"} />
                    <FooterGridItem href="https://aws.amazon.com/api-gateway/" icon={SiAmazonapigateway} text={"AWS API Gateway"} />
                </FooterGridCol>
                <FooterGridCol>
                    <FooterTitle component="h3">Contact</FooterTitle>
                    <FooterGridItem href="mailto:ivan.a.neto@hotmail.com" icon={MdEmail} text={"ivan.a.neto@hotmail.com"} />
                    <FooterGridItem href="https://www.google.com/maps/place/Riverside,+CA" icon={FaMapMarkerAlt} text={"Riverside, CA"} />
                    <FooterGridItem href="https://www.ucr.edu/" icon={IoSchool} text={"UC Riverside"} />
                    <FooterGridItem href="https://www1.cs.ucr.edu/" icon={RiComputerFill} text={"Computer Science"} />
                </FooterGridCol>
                <FooterGridCol>
                    <FooterTitle component="h3">Other Work</FooterTitle>
                    <FooterGridItem href="https://ivanneto.dev" icon={FaComputer} text={"Personal Website"} />
                    <FooterGridItem href="https://portfolio.ivanneto.dev" icon={FaCode} text={"Portfolio"} />
                    <FooterGridItem href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing" icon={IoIosDocument} text={"Resume"} />
                    <FooterGridItem href="https://www.linkedin.com/in/ivan-neto/" icon={FaLinkedin} text={"Linkedin"} />
                    <FooterGridItem href="https://github.com/ivanneto02" icon={FaGithub} text={"Github"} />
                </FooterGridCol>
            </FooterGrid>
        </StyledFooter>
    );
};

export default Footer;
