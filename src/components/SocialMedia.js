import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Tooltip,
  ButtonGroup,
  Button,
} from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import GoogleIcon from "@mui/icons-material/Google";
import DataObjectIcon from "@mui/icons-material/DataObject";

const BottomNavigationContainer = styled(BottomNavigation)(({ theme }) => ({
  background: "transparent",
  height: "calc(30vh - 100px)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  background: "transparent",
  minHeight: "auto", // Change from a fixed height to auto to accommodate wrapping
  width: "100%",
  "& .MuiBottomNavigation-root": {
    width: "auto", // Allow navigation width to adjust to its content
  },
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  color: "#69cbdc",
  "& .MuiButton-root": {
    margin: theme.spacing(1),
    width: "calc(50% - 16px)", // Adjust for mobile view
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: "auto", // Adjust width for larger screens
    },
  },
}));

const icons = [
  {
    icon: <Twitter fontSize="small" />,
    href: "https://twitter.com/cleyrauc",
    TooltipTitle: "Follow me on Twitter",
    label: "Twitter",
  },
  {
    icon: <Instagram fontSize="small" />,
    href: "https://www.instagram.com/cleyrauc",
    TooltipTitle: "Follow me on Instagram",
    label: "Instagram",
  },
  {
    icon: <LinkedIn fontSize="small" />,
    href: "https://www.linkedin.com/in/cleyrauzcategui/",
    TooltipTitle: "Follow me on LinkedIn",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon fontSize="small" />,
    href: "https://github.com/Cleyrauz",
    TooltipTitle: "Check out my GitHub",
    label: "GitHub",
  },
  {
    icon: <DriveFileRenameOutlineIcon fontSize="small" />,
    href: "https://medium.com/@cleyrauzctegui",
    TooltipTitle: "Check out my Medium",
    label: "Blog",
  },
  {
    icon: <PodcastsIcon fontSize="small" />,
    href: "https://open.spotify.com/show/6JR928XSX5GiPLwDdN6HQs",
    TooltipTitle: "Check out Hola Mundo Podcast",
    label: "Podcast",
  },
  {
    icon: <GoogleIcon fontSize="small" />,
    href: "https://gdg.community.dev/gdg-glasgow/",
    TooltipTitle: "Check out Google Developers Group",
    label: "GDG",
  },
  {
    icon: <DataObjectIcon fontSize="small" />,
    href: "https://www.womentechmakers.com/",
    TooltipTitle: "Check out Women Techmakers Scotland",
    label: "Women Techmakers",
  },
];

const SocialMedia = () => {
  return (
    <BottomNavigationContainer>
      <StyledButtonGroup variant="outlined" aria-label="social media buttons">
        {icons.map((icon, index) => (
          <Tooltip title={icon.TooltipTitle} key={index}>
            <Button
              startIcon={icon.icon}
              component="a"
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                border: "1px solid rgba(25, 118, 210, 0.5) !important",
                color: "#69cbdc",
              }}
            >
              {icon.label}
            </Button>
          </Tooltip>
        ))}
      </StyledButtonGroup>
    </BottomNavigationContainer>
  );
};

export default SocialMedia;
