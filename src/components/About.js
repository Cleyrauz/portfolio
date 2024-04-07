import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Container,
  styled,
  Link,
} from "@mui/material";
import Navbar from "./Navbar";
import avatar from "../images/avatar.png";
import SocialMediaBar from "./SocialMediaBar";
import SocialMedia from "./SocialMedia";

const StyledHeadingBox = styled(Box)(({ theme }) => ({
  background: "#233",
  //   background: "fff",
}));

const BoxNumbers = styled(Box)(({ theme }) => ({
  "& .funFacts": {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    paddingLeft: "0",
    color: "black",
  },

  "& .funFacts li:nth-child(1)": {
    background: "#69cbdc",
  },
  "& .funFacts li:nth-child(2)": {
    background: "#9416fe",
  },
  "& .funFacts li:nth-child(3)": {
    background: "#009d71",
  },
  "& .funFacts li:nth-child(4)": {
    background: "#fad40a",
  },
  "& .funFacts li span.number": {
    fontSize: "8rem",
    fontSize: "clamp(2.5rem, 10vw, 8rem)",
  },
  [theme.breakpoints.up("700")]: {
    "& .fun-facts li": {
      minWidth: "auto",
      height: "25vw",
    },
  },
  "& .funFacts li": {
    flex: "1",
    flexDirection: "column",
    // minWidth: "50%",
    height: "25vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0",
  },
}));

const TypographyBody = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway, Helvetica, Arial, sans-serif",
  fontSize: "18px",
  lineHeight: "31px",
  color: "#a4aaaa",
  textAlign: "left",
}));

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <SocialMediaBar></SocialMediaBar>
      <StyledHeadingBox component="div">
        <Grid container justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            maxWidth={"800px"}
          >
            <Avatar
              src={avatar}
              alt="Cleyra Uzcategui"
              sx={{ width: 120, height: 120 }}
              className="avatar"
            ></Avatar>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "#9416fe" }}
            >
              About me
            </Typography>
            <TypographyBody variant="body1">
              I was born in Venezuela, on the enchanting Caribbean island of
              Margarita, exactly one day after the fall of the Berlin Wall (do
              the math 😉).
            </TypographyBody>
            <TypographyBody variant="body1">
              In the capital, Caracas, I began my studies in Information Science
              at the Universidad Central de Venezuela. I also pursued a few
              semesters of Journalism at the same institution. After completing
              my studies, I decided to embrace the adventure of moving to Europe
              in 2015.
            </TypographyBody>
            <TypographyBody variant="body1">
              In 2017, I landed my first tech job as a video game localization
              tester (yes, that's a real job 👾), and it was then that I fell in
              love with technology.
            </TypographyBody>
            <TypographyBody variant="body1">
              Shortly thereafter, I decided to quit my job to become a full-time
              software student, exploring HTML, CSS, Java, and JavaScript, while
              being fascinated and challenged by all the possibilities they
              offered. It was only a matter of time until I turned these
              interests into my livelihood.
            </TypographyBody>
            <TypographyBody variant="body1">
              In my spare time, I enjoy taking care of my indoor plants,
              organising meet-ups and events with
              <Link
                href="https://www.womentechmakers.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 0.5, mr: 0.5 }}
              >
                Women Techmakers Scotland
              </Link>
              and{" "}
              <Link
                href="https://gdg.community.dev/gdg-glasgow/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 0.5 }}
              >
                Google Developers Group
              </Link>
              , running with my husband on a beautiful beach in Alicante, Spain,
              and occasionally, you might find me hiking Scottish Munros.
            </TypographyBody>
          </Box>
          <SocialMedia></SocialMedia>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ color: "#69cbdc", marginTop: "4%" }}
          >
            Cleyra's numbers
          </Typography>
        </Grid>
        <BoxNumbers>
          <ul className="funFacts">
            <li>
              <span class="number">11🎤</span>
              <span>Conferences as speaker</span>
            </li>
            <li>
              <span class="number">13🧳</span>
              <span>Countries visited</span>
            </li>
            <li>
              <span class="number">80🪴</span>
              <span>Indoor plants</span>
            </li>
            <li>
              <span class="number">∞☕</span>
              <span>Coffee cups drunk</span>
            </li>
          </ul>
        </BoxNumbers>
      </StyledHeadingBox>
    </>
  );
};

export default About;
