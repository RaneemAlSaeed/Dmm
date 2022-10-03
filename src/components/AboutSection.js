import { Box } from "@mui/material";
import React from "react";
import { Gray, mainColor, secColor } from "../colors";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  return (
    <Box>
      <Box
        className="about"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <span style={{ color: mainColor }}>About us</span>
        <span style={{ color: mainColor, fontSize: "1.0416666666667vw" }}>
          See More
        </span>
      </Box>
      <p className="about-desc" style={{ color: Gray }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea co Lorem ipsum dolor
        sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
        nisl ut aliquip ex ea co Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
        ea co{" "}
      </p>
      <Box
        sx={{
          marginTop: "2vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:"red",
        }}
      >
        {Array.from(Array(3)).map((item) => (
          <AboutCard />
        ))}
      </Box>
    </Box>
  );
}
