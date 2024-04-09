import { React, useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

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
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  marginBottom: "15px",
}));

const TypographyTags = styled(Typography)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  borderRadius: "15px",
  padding: "5px 10px",
  marginRight: "5px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
}));

const talks = [
  {
    name: "Crafting a Dev-licious Online Presence - Personal Branding for Developers",
    description: `Unlock the secrets of an online presence for developers in
    this dynamic session! Deep dive into the foundations, steps,
    and challenges of building a personal brand with engaging
    analogies. Explore the hurdles of crafting your unique
    identity with grace and humor, leaving you armed with
    confidence and creativity.`,
    image: talk1,
    alt: "Branding talk",
    tags: ["Branding", "Social Media", "Career"],
    presentations: [
      "International Women's Day Scotland 2023",
      "International Women's Day Mt. Kenya Region 2023",
      "Devfest Alps 2023",
      "International Women's Day Barcelona 2024",
    ],
  },
  {
    name: "What is New and What is Next in Web UI",
    description: `A high level overview of what you can get excited about in the
    UI space and look out for on the web platform for CSS and
    HTML, as we take a look at some of the most exciting and
    impactful features that landed recently or are coming soon.`,
    image: talk2,
    alt: "UI talk",
    tags: ["UI", "CSS", "HTML"],
    presentations: [
      "DevFest London 2023",
      "DevFest Scotland 2023",
      "International Women's Day Barcelona 2024",
    ],
  },
  {
    name: "Shaping the Future of Women in Tech Through Effective Team Dynamics",
    description: `This talk delves into the crucial role of team dynamics in
    empowering women in the tech industry. As we strive to bridge
    the gender gap, understanding and fostering a positive team
    culture becomes essential. This session will explore key
    elements that contribute to successful team dynamics and how
    they can be leveraged to support and empower women in tech.`,
    image: talk3,
    alt: "Team Dynamics talk",
    tags: ["Communication", "Inclusion", "Diversity"],
    presentations: [
      "International Women's Day Scotland 2024",
      "International Women's Day Darmstadt 2024, Germany",
    ],
  },
  {
    name: "Don't let your website be a barrier to accessibility",
    description: `I cover foundations, the current state of Accessibility,
    addressing common accessibility mistakes and a few
    accessibility tools we could use to make websites more
    inclusive, from design documents, to plug-ins installed on
    developers IDE to browsing testing tools.`,
    image: talk4,
    alt: "Accessibility talk",
    tags: ["Accessibility", "Web", "Inclusion"],
    presentations: [
      "Neurodiversity as a Superpower in the Tech World, GDG Edinbugh 2023",
      "Google I/O Extended 2023, Glasgow",
    ],
  },
  {
    name: "Embrace the web's flexibility: Understanding RWD",
    description: `An essential primer for anyone looking to understand and
    implement Responsive Web Design. Discover why RWD matters, its
    fundamental elements, and how to ensure your site looks great
    on any device. Get ready to make your web pages adapt
    seamlessly across all screens with practical strategies and
    testing methods!`,
    image: talk5,
    alt: "RWD talk",
    tags: ["Web", "RWD", "Design"],
    presentations: ["DevFest Glasgow 2022"],
  },
];

const Talks = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [selectedTalk, setSelectedTalk] = useState(null);

  const handleClickOpen = (talk) => {
    setSelectedTalk(talk);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTalk(null);
  };

  return (
    <>
      <BoxDiv component="div">
        <Navbar />
        <Grid container justify="center">
          {talks.map((talk, index) => (
            <Grid item xs={12} sm={8} md={6}>
              <CardContainer>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={talk.alt}
                    heigh="140"
                    image={talk.image}
                  ></CardMedia>
                </CardActionArea>
                <CardContent>
                  <TypographyCardTitle gutterButton variant="h5">
                    {talk.name}
                  </TypographyCardTitle>
                  <TypographyCardText
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {talk.description}
                  </TypographyCardText>
                  {talk.tags.map((tag, index) => (
                    <TypographyTags
                      key={index}
                      variant="body2"
                      color="textPrimary"
                      component="span"
                    >
                      {tag}
                    </TypographyTags>
                  ))}
                </CardContent>
                <CardActions>
                  <StyledButton
                    size="small"
                    color="primary"
                    onClick={() => navigate("/contact")}
                  >
                    Request
                  </StyledButton>
                  <StyledButton
                    size="small"
                    color="primary"
                    onClick={() => handleClickOpen(talk)}
                  >
                    Find out more
                  </StyledButton>
                </CardActions>
              </CardContainer>
            </Grid>
          ))}
          ;
        </Grid>
      </BoxDiv>
      {selectedTalk && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="talk-title"
          aria-describedby="talk-description"
        >
          <DialogTitle id="talk-title">
            <Box sx={{ alignItems: "center", gap: 1 }}>
              <AutoFixHighIcon />
              {selectedTalk.name}
            </Box>
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ mb: 3 }}>
              {selectedTalk.tags.map((tag, index) => (
                <TypographyTags
                  key={index}
                  variant="body2"
                  color="textPrimary"
                  component="span"
                >
                  {tag}
                </TypographyTags>
              ))}
            </Typography>
            <DialogContentText id="talk-description">
              {selectedTalk.description}
            </DialogContentText>
            <Typography gutterBottom sx={{ mt: 3 }}>
              Presentations:
            </Typography>
            <DialogContentText component="div">
              <ul>
                {selectedTalk.presentations.map((presentation, index) => (
                  <li key={index}>{presentation}</li>
                ))}
              </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={handleClose}>Close</StyledButton>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Talks;
