import { Box, Grid } from "@mui/material";
import React from "react";
import { mainColor, Gray } from "../colors";
import googlePlay from "../images/Google Play.png";
import playStore from "../images/APP Store.png";
import Huawe from "../images/Huawe store.png";
import phone from "../images/Phone Image.png";
export default function EasyContent() {
  return (
    <Box className="easy-box-content">
      <Grid container direction="row" justifyContent="start" alignItems="start">
        <Grid item md={7}>
          <span className="easy-box-content-title" style={{ color: mainColor }}>
            For Easy access check out our Application
          </span>
          <p className="about-desc" style={{ color: Gray }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: " 2.2916666666667vw",
            }}
          >
            <Box className="googlePlay-box">
              <img src={googlePlay} alt="" width="100%" height="100%" />
            </Box>
            <Box className="googlePlay-box">
              <img src={playStore} alt="" width="100%" height="100%" />
            </Box>
            <Box className="googlePlay-box">
              <img src={googlePlay} alt="" width="100%" height="100%" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "23.4375vw",
              height: "22.8125vw",
              // backgroundColor: "red",
              marginTop:"-3vw"
            }}
          >
            <img
              src={phone}
              alt=""
              width="100%"
              height="100%"
              // style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
