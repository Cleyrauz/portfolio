import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "./Navbar";

//styled(Box): This tells MUI to create a styled version of the Box component.
//The function passed to styled(Box) receives the theme as an argument, allowing you to access the theme values directly in your style definitions.
//The styles are defined in an object, where properties like width, background, and height are set directly.
const StyledHeadingBox = styled(Box)(({ theme }) => ({
  background: "#233",
}));

const TypographyHeading = styled(Typography)(({ theme }) => ({
  color: "#9416fe",
  padding: "3rem 0",
  textTransform: "uppercase",
}));

const BoxTimeLine = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "1rem",
  margin: "o auto",
  "&:before": {
    content: "\"''\"",
    position: "absolute",
    height: "100%",
    border: "1px solid gray",
    right: "40px",
    top: 0,
  },
  "&:after": {
    content: "\"''\"",
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    "&:before": {
      left: "calc(50% - 1px)",
      right: "auto",
    },
  },
}));

const BoxTimeLimeItem = styled(Box)(({ theme }) => ({
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid gray",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "\"''\"",
      position: "absolute",
    },
    "&:before": {
      content: "\"''\"",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#9416fe #9416fe transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "gray",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #9416fe #9416fe",
      },
    },
  },
}));

const TypographySubHeading = styled(Typography)(({ theme }) => ({
  color: "#fff",
  padding: 0,
  textTransform: "uppercase",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "#233",
  padding: "1rem",
  margin: "0 auto",
  "&:before": {
    content: "\"''\"",
    position: "absolute",
    height: "100%",
    border: "1px solid gray",
    right: "40px", // Default position to the right
    top: 0,
  },
  "&:after": {
    content: "\"''\"",
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    "&:before": {
      left: "calc(50% - 1px)", // Move to the middle for md breakpoint and up
      right: "auto", // Reset right to auto to allow left to take precedence
    },
  },
}));

const TypographyTimeLineYearAndItem = styled(Typography)(({ theme }) => ({
  padding: "1rem",
  borderBottom: "2px solid gray",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  "&:after": {
    content: "''",
    position: "absolute",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    right: "-0.625rem",
    top: "calc(50% - 5px)",
    borderStyle: "solid",
    borderColor: "#9416fe #9416fe transparent transparent",
    borderWidth: "0.625rem",
    transform: "rotate(45deg)",
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    margin: "1rem",
    "&:nth-of-type(2n)": {
      float: "right",
      margin: "1rem",
      borderColor: "gray",
    },
    "&:nth-of-type(2n):before": {
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent #9416fe #9416fe",
    },
  },
  textAlign: "center",
  maxWidth: "9.375rem",
  margin: "0 3rem 0 auto",
  fontSize: "1.8rem",
  color: "#fff",
  background: "#9416fe",
  lineHeight: 1,
  padding: "0.5rem 1rem",
  "&:before": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    margin: "0 auto",
    "&:nth-of-type(2n)": {
      float: "none",
      margin: "0 auto",
    },
    "&:nth-of-type(2n):before": {
      display: "none",
    },
  },
}));

const BoxTimeLineItem = styled(Box)(({ theme }) => ({
  padding: "1rem",
  borderBottom: "2px solid gray",
  position: "relative",
  margin: "1rem 3rem 1rem 1rem",
  clear: "both",
  "&:after": {
    content: "''",
    position: "absolute",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    right: "-0.625rem",
    top: "calc(50% - 5px)",
    borderStyle: "solid",
    borderColor: "#9416fe #9416fe transparent transparent",
    borderWidth: "0.625rem",
    transform: "rotate(45deg)",
  },
  [theme.breakpoints.up("md")]: {
    width: "44%",
    margin: "1rem",
    "&:nth-of-type(2n)": {
      float: "right",
      margin: "1rem",
      borderColor: "gray",
    },
    "&:nth-of-type(2n):before": {
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent #9416fe #9416fe",
    },
  },
}));

const Resume = () => {
  return (
    <>
      <Navbar />
      <StyledHeadingBox component="header">
        <TypographyHeading variant="h4" align="center">
          Experience
        </TypographyHeading>
        <BoxTimeLine component="div">
          <TypographyTimeLineYearAndItem variant="h2">
            2022 - present
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Associate Software Engineer
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              JP Morgan & Chase
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Currently, I hold a position in Public Cloud Development at JP
              Morgan & Chase, where I focus on leveraging cloud technologies to
              enhance the bank's digital infrastructure and solutions. I
              collaborate closely with cross-functional teams to ensure seamless
              integration of cloud solutions, emphasizing security, scalability,
              and efficiency.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2024
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Mentor
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              GDG Academy
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              GDG Academy is a global community for Computer Science university
              students that offers mentorship and guidance. I offered mentorship
              and support to Computer Science students from University of
              Glasgow and University of Strathclyde during the Spring cohort
              2024.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2023 - present
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Affiliate Professor
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              University of Glasgow - Computer Science School
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Delivering seminars and lessons as part of the Coaching Software
              Teams program, which aims to equip aspiring software engineers
              with the skills and knowledge to work effectively in teams. The
              program is facilitated by JPMorgan Chase & Co. employees, who
              share their insights and experiences from the industry.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2023
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Mentor
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              UK STEMAspire - Dell Technologies
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Mentoring program connecting UK students with industry mentors led
              by Dell Technologies and Partners.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2023
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Mentor
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Women Developer Academy
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Women Developer Academy, powered by Women Techmakers, is a program
              led by Google to equip participants with the skills, resources and
              support they need to become leaders in the industry through public
              speaking and other community contributions.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2022 - present
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Ambassador
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Women Techmakers
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Women Techmakers Ambassadors are leaders around the world who are
              passionate about empowering their communities through organizing
              events, public speaking, creating content, and mentoring.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2022 - present
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Google Developer Group Organiser
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Google
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Organizers of Google Developer Groups are passionate community
              leaders dedicated to facilitating learning and networking through
              volunteer-driven meetup events.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2019
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Frontend Developer
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Firefish Software
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Working remotely within the current development team creating
              great looking websites for Firefish clients while also maintaining
              and developing new features and requests that are released each
              week to the current version.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2017
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Quality Assurance Tester
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Pole To Win International
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Logging bugs/issues and providing improvement suggestions,
              tracking reported issues with regression testing, and conducting
              ad hoc translations from English to European Spanish and Mexican
              Spanish.
            </Typography>
          </BoxTimeLineItem>
          <TypographyTimeLineYearAndItem variant="h2">
            2011
          </TypographyTimeLineYearAndItem>
          <BoxTimeLineItem component="div">
            <TypographySubHeading variant="h5" align="center">
              Community Manager
            </TypographySubHeading>
            <Typography variant="body1" align="center" color="#69cbdb">
              Editora El Nacional
            </Typography>
            <Typography variant="subtitle1" align="center" color="gray">
              Leading digital marketing initiatives and web development for El
              Nacional's editorial archive, I oversee the online reference
              service, craft digital strategies, and shape the online business
              model. I am also the architect behind the Manual of Good Practices
              in Social Media, establishing guidelines for excellence in digital
              engagement.
            </Typography>
          </BoxTimeLineItem>
        </BoxTimeLine>
      </StyledHeadingBox>
    </>
  );
};

export default Resume;
