import { Box, Grid } from "@mui/material";
import React from "react";
import movie from "../video/pexels-mart-production-8026546.mp4";
import img from "../images/Apple AirPods with white charging case2.png"
export default function VideoComp() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: "25.175520833333vw" }}>
        <video
          src={movie}
          loop
          autoPlay={true}
          width="100%"
          height="100%"
          style={{ objectFit: "fill" }}
        ></video>
      </Box>

      <Box className="Product-images">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {Array.from(Array(5)).map((item) => (
            <Grid item>
              <Box
                sx={{
                  width: "6.25vw",
                  height: "5.5729166666667vw",
                //   backgroundColor: "blue",
                }}
              >
                <img src={img} alt="" width="100%" height="100%"/>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
