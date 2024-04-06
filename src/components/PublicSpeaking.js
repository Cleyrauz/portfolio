import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import talk1 from "../images/talk1.jpeg";
import talk2 from "../images/talk2.jpeg";
import talk3 from "../images/talk3.jpeg";
import talk4 from "../images/talk4.jpeg";
import talk5 from "../images/talk5.jpeg";
import { useNavigate } from "react-router-dom";

const BoxDiv = styled(Box)(({ theme }) => ({
  background: "#233",
  height: "100%",
}));

const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "3rem auto",
}));

const TypographyCardTitle = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
}));

const TypographyCardText = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
  marginBottom: "15px",
}));

const TypographyTags = styled(Typography)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  borderRadius: "15px",
  padding: "5px 10px",
  marginRight: "5px",
}));

const StyledButton = styled(Button)({
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
});

const Talks = () => {
  const navigate = useNavigate();

  return (
    <>
      <BoxDiv component="div">
        <Navbar></Navbar>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Talk 1"
                  heigh="140"
                  image={talk1}
                ></CardMedia>
              </CardActionArea>
              <CardContent>
                <TypographyCardTitle gutterButton variant="h5">
                  Crafting a Dev-licious Online Presence - Personal Branding for
                  Developers
                </TypographyCardTitle>
                <TypographyCardText
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Unlock the secrets of an online presence for developers in
                  this dynamic session! Deep dive into the foundations, steps,
                  and challenges of building a personal brand with engaging
                  analogies. Explore the hurdles of crafting your unique
                  identity with grace and humor, leaving you armed with
                  confidence and creativity.
                </TypographyCardText>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Branding
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Social Media
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Career
                </TypographyTags>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Request
                </StyledButton>
                <StyledButton size="small" color="primary">
                  Find out more
                </StyledButton>
              </CardActions>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Talk 2"
                  heigh="140"
                  image={talk2}
                ></CardMedia>
              </CardActionArea>
              <CardContent>
                <TypographyCardTitle gutterButton variant="h5">
                  What is New and What is Next in Web UI
                </TypographyCardTitle>
                <TypographyCardText
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  A high level overview of what you can get excited about in the
                  UI space and look out for on the web platform for CSS and
                  HTML, as we take a look at some of the most exciting and
                  impactful features that landed recently or are coming soon.
                </TypographyCardText>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  UI
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  HTML
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  CSS
                </TypographyTags>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Request
                </StyledButton>
                <StyledButton size="small" color="primary">
                  Find out more
                </StyledButton>
              </CardActions>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Talk 3"
                  heigh="140"
                  image={talk3}
                ></CardMedia>
              </CardActionArea>
              <CardContent>
                <TypographyCardTitle gutterButton variant="h5">
                  Shaping the Future of Women in Tech Through Effective Team
                  Dynamics
                </TypographyCardTitle>
                <TypographyCardText
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  This talk delves into the crucial role of team dynamics in
                  empowering women in the tech industry. As we strive to bridge
                  the gender gap, understanding and fostering a positive team
                  culture becomes essential. This session will explore key
                  elements that contribute to successful team dynamics and how
                  they can be leveraged to support and empower women in tech.
                </TypographyCardText>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Communication
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Diversity
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Inclusion
                </TypographyTags>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Request
                </StyledButton>
                <StyledButton size="small" color="primary">
                  Find out more
                </StyledButton>
              </CardActions>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Talk 4"
                  heigh="140"
                  image={talk4}
                ></CardMedia>
              </CardActionArea>
              <CardContent>
                <TypographyCardTitle gutterButton variant="h5">
                  Don't let your website be a barrier to accessibility
                </TypographyCardTitle>
                <TypographyCardText
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I cover foundations, the current state of Accessibility,
                  addressing common accessibility mistakes and a few
                  accessibility tools we could use to make websites more
                  inclusive, from design documents, to plug-ins installed on
                  developers IDE to browsing testing tools.
                </TypographyCardText>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Accessibility
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Web
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Inclusion
                </TypographyTags>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Request
                </StyledButton>
                <StyledButton size="small" color="primary">
                  Find out more
                </StyledButton>
              </CardActions>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <CardContainer>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Talk 5"
                  heigh="140"
                  image={talk5}
                ></CardMedia>
              </CardActionArea>
              <CardContent>
                <TypographyCardTitle gutterButton variant="h5">
                  Embrace the web's flexibility: Understanding RWD
                </TypographyCardTitle>
                <TypographyCardText>
                  An essential primer for anyone looking to understand and
                  implement Responsive Web Design. Discover why RWD matters, its
                  fundamental elements, and how to ensure your site looks great
                  on any device. Get ready to make your web pages adapt
                  seamlessly across all screens with practical strategies and
                  testing methods!
                </TypographyCardText>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Web
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  RWD
                </TypographyTags>
                <TypographyTags
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  Design
                </TypographyTags>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  color="primary"
                  onClick={() => navigate("/contact")}
                >
                  Request
                </StyledButton>
                <StyledButton size="small" color="primary">
                  Find out more
                </StyledButton>
              </CardActions>
            </CardContainer>
          </Grid>
        </Grid>
      </BoxDiv>
    </>
  );
};

export default Talks;
