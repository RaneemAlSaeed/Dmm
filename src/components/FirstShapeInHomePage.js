import { Grid } from '@mui/material'
import React from 'react'
import BigCart from './BigCart'
import img1 from "../images/wallpaperflare-cropped.png";
import img2 from "../images/bruce-mars-DBGwy7s3QY0-unsplash.png";
import img3 from "../images/phone.png";
import img4 from "../images/pexels-ron-lach-7849520.png";
export default function FirstShapeInHomePage() {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Grid item md={3.9}>
      <BigCart
        img={img1}
        height="19.53125vw"
        title="Most Ordered Products"
        fontSize="1.8229166666667vw"
      />
    </Grid>
    <Grid
      item
      md={3.9}
      sx={{
        height: "19.53125vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <BigCart
        img={img3}
        height="9.21875vw"
        title="EarPhones"
        fontSize="1.1458333333333vw"
      />
      <BigCart
        img={img2}
        height="9.21875vw"
        title="Wireless Headphones"
        fontSize="1.1458333333333vw"
      />
    </Grid>
    <Grid item md={3.9}>
      <BigCart
        img={img4}
        height="19.53125vw"
        title="Gaming Headphones"
        fontSize=" 1.8229166666667vw"
      />
    </Grid>
  </Grid>
  )
}
