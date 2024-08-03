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
import profile from "../images/profile-pic.png";
import SocialMedia from "./SocialMedia";

const StyledHeadingBox = styled(Box)(({ theme }) => ({
  background: "#233",
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1), // Adjust padding on smaller screens
  },
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
    minWidth: "50%",
    height: "50vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0",
  },
  "& .funFacts": {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    paddingLeft: "0",
    color: "black",
  },
  "& .funFacts li": {
    flex: "1 1 200px", // Make sure items can grow and shrink but start at 200px wide
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // margin: theme.spacing(1), // Use theme spacing for consistent spacing
    height: "auto", // Make height auto to accommodate content
  },
  "& .funFacts li span.number": {
    fontSize: "clamp(1.25rem, 4vw, 4rem)", // Responsive font size
  },
}));

const TypographyBody = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway, Helvetica, Arial, sans-serif",
  fontSize: "clamp(1rem, 2vw, 18px)", // Responsive font size
  lineHeight: "1.75",
  color: "#a4aaaa",
  textAlign: "left",
  padding: theme.spacing(1), // Add padding
}));

const list = [
  {
    number: "13",
    emoji: "🎤",
    funFact: "Conferences as speaker",
  },
  {
    number: "15",
    emoji: "🧳",
    funFact: "Countries visited",
  },
  {
    number: "80",
    emoji: "🪴",
    funFact: "Indoor plants",
  },
  {
    number: "∞",
    emoji: "☕",
    funFact: "Coffee cups drunk",
  },
];

const About = () => {
  return (
    <>
      <Navbar></Navbar>
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
              src={profile}
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
              I was born in the 1980s, in a Caribbean Island called Margarita,
              just one month before the decade ended.
            </TypographyBody>
            <TypographyBody variant="body1">
              In the capital of Venezuela, Caracas, I began my studies in
              Information Science at the Universidad Central de Venezuela. I
              also pursued a few semesters of Journalism at the same
              institution. After completing my studies, I decided to embrace the
              adventure of moving to Europe in 2015.
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
              Skilled in cloud technologies, nowdays I apply my skills at JP
              Morgan & Chase to enhance digital infrastructure and solutions.
            </TypographyBody>
            <TypographyBody variant="body1">
              In my spare time, I enjoy taking care of my indoor plants,
              mentoring and organising meet-ups with
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
              , running with my husband on a beautiful beach in Spain, and
              occasionally, you might find me hiking Scottish Munros.
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
            {list.map((item, index) => (
              <li key={index}>
                <span className="number">
                  {item.number}
                  <span sx={{ fontSize: "0.75em" }}>{item.emoji}</span>
                </span>
                <span>{item.funFact}</span>
              </li>
            ))}
          </ul>
        </BoxNumbers>
      </StyledHeadingBox>
    </>
  );
};

export default About;
