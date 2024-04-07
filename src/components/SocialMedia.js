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
  //   height: "calc(30vh - 100px)",
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

const SocialMedia = () => {
  return (
    <BottomNavigationContainer>
      <Tooltip title="Follow me on Twitter" placement="top">
        <StyledBottomNavigationAction
          icon={<Twitter fontSize="small" />}
          href="https://twitter.com/cleyrauc"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tooltip>
      <Tooltip title="Follow me on Instagram" placement="top">
        <StyledBottomNavigationAction
          icon={<Instagram fontSize="small" />}
          href="https://www.instagram.com/cleyrauc"
          target="_blank"
          rel="noopener noreferrer"
          label="Instagram"
        />
      </Tooltip>
      <Tooltip title="Follow me on LinkedIn" placement="top">
        <StyledBottomNavigationAction
          icon={<LinkedIn fontSize="small" />}
          href="https://www.linkedin.com/in/cleyrauzcategui/"
          target="_blank"
          rel="noopener noreferrer"
          label="LinkedIn"
          sx={{ padding: "0px" }}
        />
      </Tooltip>
      <Tooltip title="Check out my GitHub" placement="top">
        <StyledBottomNavigationAction
          icon={<GitHubIcon fontSize="small" />}
          href="https://github.com/Cleyrauz"
          target="_blank"
          rel="noopener noreferrer"
          label="GitHub"
        />
      </Tooltip>
      <Tooltip title="Check out my Medium" placement="top">
        <StyledBottomNavigationAction
          icon={<DriveFileRenameOutlineIcon fontSize="small" />}
          href="https://medium.com/@cleyrauzctegui"
          target="_blank"
          rel="noopener noreferrer"
          label="Medium Blog"
        />
      </Tooltip>
      <Tooltip title="Check out Hola Mundo Podcast" placement="top">
        <StyledBottomNavigationAction
          icon={<PodcastsIcon fontSize="small" />}
          href="https://open.spotify.com/show/6JR928XSX5GiPLwDdN6HQs"
          target="_blank"
          rel="noopener noreferrer"
          label="Hola Mundo Podcast"
        />
      </Tooltip>
      <Tooltip title="Check out Google Developers Group" placement="top">
        <StyledBottomNavigationAction
          icon={<GoogleIcon fontSize="small" />}
          href="https://gdg.community.dev/gdg-glasgow/"
          target="_blank"
          rel="noopener noreferrer"
          label="Google Developers Group"
        />
      </Tooltip>
      <Tooltip title="Check out Women Techmakers Scotland" placement="top">
        <StyledBottomNavigationAction
          icon={<DataObjectIcon fontSize="small" />}
          href="https://www.womentechmakers.com/"
          target="_blank"
          rel="noopener noreferrer"
          label="Women Techmakers Scotland"
        />
      </Tooltip>
    </BottomNavigationContainer>
  );
};
export default SocialMedia;
