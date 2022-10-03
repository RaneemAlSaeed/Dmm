import { Box, Grid } from "@mui/material";
import React from "react";
import { Blue, whiteColor } from "../colors";
import StepperLogo from "./StepperLogo";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function Footer() {
  return (
    <Box className="footer" sx={{ backgroundColor: Blue }}>
      <Box className="footerContent">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Grid item md={3}>
            <Box className="footer-Stepper-photo">
              <StepperLogo
                logoWidth="60%"
                descOneFontSize="1vw"
                discTowfs="0.525vw"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              color: whiteColor,
              fontSize: "0.925vw",
              fontWeight: 700,
              fontFamily: "Montserrat",
              // backgroundColor: "red",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
            <Box sx={{ marginTop: ".5vw" }}>
              <FacebookIcon sx={{ fontSize: "2.54375vw", marginX: "1vw" }} />
              <WhatsAppIcon sx={{ fontSize: "2.54375vw" }} />
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              color: whiteColor,
              fontSize: "0.925vw",
              fontWeight: 700,
              fontFamily: "Montserrat",
              // backgroundColor: "red",
              
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim
            <Box sx={{ marginTop: ".5vw" }}>
            
            </Box>
          </Grid>{" "}
        </Grid>
      </Box>
    </Box>
  );
}
