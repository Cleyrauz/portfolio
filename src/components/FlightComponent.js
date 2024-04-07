import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

function FlightComponent() {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="flight-component">
      <Box sx={{ alignItems: "center", gap: 1 }}>
        <Typography>From</Typography>
        <Home className="largeIcon" />
      </Box>
      <input
        type="range"
        className="flight"
        style={{ "--val": value }}
        value={value}
        min="0"
        max="100"
        onInput={handleInputChange}
        aria-label="percentage flown"
      />
      {value >= 100 ? (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            animation: `${"move"} 1s infinite, ${"box"} 1s infinite`,
            backgroundColor: "#9416fe",
          }}
          onClick={() => navigate("/public-speaking")}
        >
          <span>To Talks</span>
          <FlightTakeoffIcon />
        </Button>
      ) : (
        <Box sx={{ alignItems: "center", gap: 1 }}>
          <Typography>To Talks</Typography>
          <RecordVoiceOverIcon />
        </Box>
      )}
    </div>
  );
}

export default FlightComponent;
