import React, { useState } from "react";
import Button from "@mui/material/Button";

function FlightComponent() {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleArrivalClick = () => {
    window.open("https://www.linkedin.com/in/cleyrauzcategui/", "_blank");
  };

  return (
    <div className="flight-component">
      <span>From Portfolio</span>
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
          onClick={handleArrivalClick}
        >
          To LinkedIn
        </Button>
      ) : (
        <span>To LinkedIn</span>
      )}
    </div>
  );
}

export default FlightComponent;
