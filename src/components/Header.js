import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import avatar from "../images/avatar.png";
import { ReactTyped } from "react-typed";
import { styled } from "@mui/system";
import FlightComponent from "./FlightComponent";

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
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Avatar src={avatar} alt="Cleyra Uzcategui" className="avatar"></Avatar>
      <Typography variant="h4" className="title">
        <ReactTyped strings={["Cleyra Uzcategui"]} typeSpeed={40}></ReactTyped>
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
        <p style={{ color: "#fff" }}>Slide the flight and follow me!</p>
      </Typography>
      <FlightComponent />
    </HeaderContainer>
  );
};

export default Header;
