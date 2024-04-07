import React from "react";
import { Typography, Avatar, Box, Button } from "@mui/material";
import avatar from "../images/avatar.png";
import { ReactTyped } from "react-typed";
import { styled } from "@mui/system";
import FlightComponent from "./FlightComponent";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100vw",
  textAlign: "center",
  zIndex: 1,

  "& .avatar": {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
  },

  "& .title": {
    color: "#9316fd",
  },
  "& .subtitle": {
    color: "#53c3d8",
    textTransform: "uppercase",
  },
  "& .button": {
    position: "relative",
    background: "#444",
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "none",
    letterSpacing: "0.1rem",
    fontSize: "1rem",
    padding: "1rem 3rem",
    transition: "0.2s",
  },

  "& .button:hover": {
    letterSpacing: "0.2rem",
    padding: "1.1rem 3.1rem",
    background: "69cbdc",
    color: "#69cbdc",
    animation: "box 3s infinite",
  },

  "& .button::before": {
    content: "''",
    position: "absolute",
    inset: "2px",
    background: "#9416fe",
  },

  "& .button span": {
    position: "relative",
    zIndex: "1",
  },
  "& .button i": {
    position: "absolute",
    inset: "0",
    display: "block",
  },

  "& .button i::before": {
    content: "''",
    position: "absolute",
    width: "10px",
    height: "2px",
    left: "80%",
    top: "-2px",
    border: "2px solid #69cbdc",
    background: "#69cbdc",
    transition: "0.2s",
  },

  "& .button:hover i::before": {
    width: "15px",
    left: "20%",
    animation: "move 3s infinite",
  },

  "& .button i::after": {
    content: "''",
    position: "absolute",
    width: "10px",
    height: "2px",
    left: "20%",
    bottom: "-2px",
    border: "2px solid #69cbdc",
    background: "#69cbdc",
    transition: "0.2s",
  },

  "& .button:hover i::after": {
    width: "15px",
    left: "80%",
    animation: "move 3s infinite",
  },
}));

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Avatar src={avatar} alt="Cleyra Uzcategui" className="avatar"></Avatar>
      <Typography variant="h4" className="title">
        <ReactTyped
          strings={[" Hi, I'm Cleyra Uzcategui!"]}
          typeSpeed={40}
        ></ReactTyped>
      </Typography>
      <br></br>
      <Typography variant="h5" className="subtitle">
        <ReactTyped
          strings={["Software Engineer", "Public Speaker", "Community Builder"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></ReactTyped>
      </Typography>
      <Typography variant="h6" className="body1">
        <p style={{ color: "#fff" }}>
          Slide the flight and find out about my talks!
        </p>
      </Typography>
      <FlightComponent />
      <Button className="button" onClick={() => navigate("/resume")}>
        <span>My Resume</span>
        <i></i>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
