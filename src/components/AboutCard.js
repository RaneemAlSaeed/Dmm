import { Box, Paper } from "@mui/material";
import React from "react";
import { Blue, Gray, whiteColor } from "../colors";
import PhoneIcon from "@mui/icons-material/Phone";

export default function AboutCard() {
  return (
    <Paper elevation={3} className="AboutCard">
      <Box className="AboutCard-circle" sx={{ backgroundColor: Blue }}>
        <PhoneIcon sx={{ color: whiteColor,fontSize:"2.34375vw" }} />
      </Box>
      <Box className="AboutCard-desc" sx={{color:Gray}}  >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim
      </Box>
    </Paper>
  );
}
