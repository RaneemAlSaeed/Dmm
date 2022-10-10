import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { Gray, mainColor, secColor } from "../colors";
import BlueCart from "../components/BlueCart";
import BlueProducts from "../components/BlueProducts";
import Header from "../components/Header";
import Products from "../components/Products";
import RowRadioButtonsGroup from "../components/RadioRow";
import WelcomeUser from "../components/WelcomeUser";
import { headerData } from "../data";

export default function OrderHistory() {
  return (
    <div>
      <Box
        sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
      >
        <Box className="header">
          <Header data={headerData} />
        </Box>
        <Box className="containerr-tow" sx={{ backgroundColor: "white" }}>
          <span style={{ color: "white" }}>.</span>
          <WelcomeUser />
          <Box sx={{ marginTop: "1vw", padding: "0 8vw" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            //   sx={{backgroundColor:"pink"}}
            >
              <Grid item md={6}>
                <span className="allOrder" style={{ color: Gray }}>
                  Order ID :
                </span>
                <input
                  type="text"
                  style={{
                    width: "10.3125vw",
                    height: "1.5625vw",
                    marginLeft: "1vw",
                    fontSize:"0.825vw",
                    border:"0.05vw gray solid"
                  }}
                />
              </Grid>
              <Grid item md={6} sx={{display:"flex",justifyContent:"end"}}>
                <RowRadioButtonsGroup />
              </Grid>
            </Grid>
            <BlueProducts/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
