import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { smallCartData } from "../data";
import BigCartInDashboard from "./BigCartInDashboard";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
  handleFav,
} from "../store/FavoriteSlice";
import { useEffect } from "react";
// Requiring the lodash library
const _ = require("lodash");
export default function FavProducts(props) {
  //  const [data,setData]=useState(smallCartData)
  const FavoritesArray = useSelector(
    (state) => state.favoriteState.FavoritesArray
  );
  const dispatch = useDispatch();

  // console.log("ggg",FavoritesArray);

  function handleFavClick(obj) {
    let trueObject = { ...obj, fav: true };
    dispatch(removeFromFavorite({ trueObject }));
  }
  useEffect(() => {
    console.log("bb", FavoritesArray);
  }, []);

  return (
    <>
      {FavoritesArray.length == 0 && (
        <Box sx={{ textAlign: "center",fontSize:"1.0925vw" }}>NO PRODUCT FOUND</Box>
      )}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {FavoritesArray.map((item) => (
          <Grid item md={5.9}>
            <BigCartInDashboard
              id={item.id}
              fav={item.fav}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              PriceOptions={item.PriceOptions}
              delete={props.delete}
              handleFavClick={() => handleFavClick(item)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
