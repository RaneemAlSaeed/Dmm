import { Box, Grid } from "@mui/material";
import React from "react";
import { Blue, Gray } from "../colors";
export default function DownloadFileButton(props) {
  return (
    <Box className="DownloadFileButton" sx={{marginTop:"1vw",cursor:"pointer"}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={7.5}>
          <span className="text" style={{ color: Gray }}>
           {props.text}
          </span>
        </Grid>
        <Grid item md={2}>
        <props.icon sx={{color:props.color,fontSize:"1.5625vw"}}/>
        </Grid>
      </Grid>
    </Box>
  );
}
