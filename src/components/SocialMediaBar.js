import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import GitHubIcon from "@mui/icons-material/GitHub";

const BottomNavigationContainer = styled(BottomNavigation)(({ theme }) => ({
  background: "transparent",
  height: "65px",
  overflow: "hidden",
  position: "absolute",
  top: "0",
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
  },
  {
    icon: <Instagram fontSize="small" />,
    href: "https://www.instagram.com/cleyrauc",
  },
  {
    icon: <LinkedIn fontSize="small" />,
    href: "https://www.linkedin.com/in/cleyrauzcategui/",
  },
  {
    icon: <GitHubIcon fontSize="small" />,
    href: "https://github.com/Cleyrauz",
  },
];

const SocialMediaBar = () => {
  return (
    <BottomNavigationContainer>
      {icons.map((icon, index) => (
        <StyledBottomNavigationAction
          icon={icon.icon}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </BottomNavigationContainer>
  );
};
export default SocialMediaBar;
