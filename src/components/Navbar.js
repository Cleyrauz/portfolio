import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@mui/icons-material";
import avatar from "../images/avatar.png";
import { styled } from "@mui/system";

const MenuSliderContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  background: "#69cbdc",
  height: "100%",

  "& .listItem": {
    color: "#594c60",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  display: "block",
  margin: "0.5rem auto",
  width: theme.spacing(13),
  height: theme.spacing(13),
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home" },
  { listIcon: <AssignmentInd />, listText: "Resume" },
  { listIcon: <Apps />, listText: "Portfolio" },
  { listIcon: <ContactMail />, listText: "Contact" },
];

const Navbar = () => {
  return (
    <>
      <MenuSliderContainer component="div">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "#9416FF" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#ede7f6" }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <StyledAvatar src={avatar} alt="Cleyra Uzcategui" className="avatar" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
              <ListItemText primary={lsItem.listText}></ListItemText>
            </ListItem>
          ))}
        </List>
      </MenuSliderContainer>
    </>
  );
};

export default Navbar;
