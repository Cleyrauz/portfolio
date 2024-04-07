import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material";

const BottomNavigationContainer = styled(BottomNavigation)(({ theme }) => ({
  background: "#222",
  height: "55px",
  overflow: "hidden",
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
];

const FooterNavbar = () => {
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
      ;
    </BottomNavigationContainer>
  );
};
export default FooterNavbar;
