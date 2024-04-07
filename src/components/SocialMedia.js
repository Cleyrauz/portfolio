import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Tooltip,
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
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    "& .MuiSvgIcon-root": {
      fill: "#69cbdc",
      "&:hover": {
        fill: "#e0e0e0",
        fontSize: "1.8rem",
      },
    },
  })
);

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
    label: "Medium Blog",
  },
  {
    icon: <PodcastsIcon fontSize="small" />,
    href: "https://open.spotify.com/show/6JR928XSX5GiPLwDdN6HQs",
    TooltipTitle: "Check out Hola Mundo Podcast",
    label: "Hola Mundo Podcast",
  },
  {
    icon: <GoogleIcon fontSize="small" />,
    href: "https://gdg.community.dev/gdg-glasgow/",
    TooltipTitle: "Check out Google Developers Group",
    label: "Google Developers Group",
  },
  {
    icon: <DataObjectIcon fontSize="small" />,
    href: "https://www.womentechmakers.com/",
    TooltipTitle: "Check out Women Techmakers Scotland",
    label: "Women Techmakers Scotland",
  },
];

const SocialMedia = () => {
  return (
    <BottomNavigationContainer>
      {icons.map((icon, index) => (
        <Tooltip title={icon.TooltipTitle} placement="top">
          <StyledBottomNavigationAction
            icon={icon.icon}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            label={icon.label}
          />
        </Tooltip>
      ))}
    </BottomNavigationContainer>
  );
};
export default SocialMedia;
