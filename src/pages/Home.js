import { Box, Grid } from "@mui/material";
import React from "react";
import { secColor } from "../colors";
import FirstShapeInHomePage from "../components/FirstShapeInHomePage";
import Header from "../components/Header";
import SmallCart from "../components/SmallCart";
import { headerData, smallCartData } from "../data";
export default function Home() {
  return (
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
      className="home"
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box className="containerr" sx={{ marginTop: "2.2916666666667vw" }}>
        <FirstShapeInHomePage />

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {smallCartData.map((item) => (
            <Grid item md={1.9} sx={{ marginTop: "2.2916666666667vw" }}>
              <SmallCart
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
