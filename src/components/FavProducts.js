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
// import { useSelector, useDispatch } from "react-redux";
import { deleteFavorites, getFavorites } from "../store/favoritesSlice";
// Requiring the lodash library
const _ = require("lodash");
export default function FavProducts(props) {
  //  const [data,setData]=useState(smallCartData)
  // const FavoritesState = useSelector(
  //   (state) => state.favoriteState.FavoritesState
  // );
  // const dispatch = useDispatch();

  // console.log("ggg",FavoritesState);

 
  const dispatch = useDispatch();
  const FavoritesState = useSelector(
    (state) => state.favorites.favorites
  );
  function handleDelete(id){
    dispatch(deleteFavorites(id))
    dispatch(getFavorites())
  }
  useEffect(()=>{
    dispatch(getFavorites())
    console.log("FavoritesStateinFAV",FavoritesState);
  },[])

  return (
    <>
      {FavoritesState.length == 0 && (
        <Box sx={{ textAlign: "center",fontSize:"1.0925vw" }}>NO PRODUCT FOUND</Box>
      )}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {FavoritesState.map((item) => (
          <Grid item md={5.9}>
            <BigCartInDashboard
              id={item.product.id}
              fav={true}
              // img={item.product.image.preview_url}
              title={item.product.title}
              desc={item.product.description}
              price={item.product.price}
            
              PriceOptions={item.product.price_options}
              // delete={props.delete}
              handleDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
