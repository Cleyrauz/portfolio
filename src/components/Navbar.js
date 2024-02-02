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
  { listIcon: <Apps />, listText: "Talks" },
  { listIcon: <ContactMail />, listText: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = (slider) => (
    <MenuSliderContainer component="div" onClick={() => setOpen(false)}>
      <StyledAvatar src={avatar} alt="Cleyra Uzcategui" className="avatar" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} onClick={() => setOpen(false)}>
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
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon style={{ color: "#9416FF" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#ede7f6" }}>
              Portfolio
            </Typography>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
              {sideList("left")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
