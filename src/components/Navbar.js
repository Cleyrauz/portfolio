import React, { useState } from "react";
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
  Drawer,
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
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import FooterNavbar from "./FooterNavbar";
import Face3Icon from "@mui/icons-material/Face3";

//styled(Box): This tells MUI to create a styled version of the Box component.
//The function passed to styled(Box) receives the theme as an argument, allowing you to access the theme values directly in your style definitions.
//The styles are defined in an object, where properties like width, background, and height are set directly.
const MenuSliderContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  background: "#69cbdc",
  height: "100%",

  "& .listItem": {
    color: "#594c60",
  },
}));
//The styled API's integration with the theme is particularly useful for responsive designs or when you want to apply consistent spacing, typography, and color schemes across your app. It's a powerful feature of MUI that encourages a more coherent styling approach across your project.
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  display: "block",
  margin: "0.5rem auto",
  width: theme.spacing(13),
  height: theme.spacing(13),
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <Face3Icon />, listText: "About", listPath: "/about" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  {
    listIcon: <RecordVoiceOverIcon />,
    listText: "Public Speaking",
    listPath: "/public-speaking",
  },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = (slider) => (
    <MenuSliderContainer component="div" onClick={() => setOpen(false)}>
      <StyledAvatar src={avatar} alt="Cleyra Uzcategui" className="avatar" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button component={Link} to={lsItem.listPath}>
            <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
            <ListItemText primary={lsItem.listText}></ListItemText>
          </ListItem>
        ))}
      </List>
    </MenuSliderContainer>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar
            style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h5" style={{ color: "#ede7f6" }}>
              Portfolio
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon style={{ color: "#69cbdc" }} />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              {sideList("right")}
              <FooterNavbar />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
