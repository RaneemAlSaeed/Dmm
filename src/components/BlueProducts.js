import { Grid } from "@mui/material";
import React from "react";
import { smallCartData } from "../data";
import BigCartInDashboard from "./BigCartInDashboard";
import BlueCart from "./BlueCart";

export default function BlueProducts(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    
    >
      {smallCartData.map((item) => (
        <Grid item md={5.9}>
          <BlueCart
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            PriceOptions={item.PriceOptions}
            delete={props.delete}
          />
        </Grid>
      ))}
    </Grid>
  );
}
