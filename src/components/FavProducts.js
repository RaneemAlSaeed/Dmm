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
 const [data,setData]=useState(smallCartData)
  const FavoritesArray = useSelector(
    (state) => state.favoriteState.FavoritesArray
  );
  const dispatch = useDispatch();
  
  // console.log("ggg",FavoritesArray);
  
  function handleFavClick(obj) {
  
    if (FavoritesArray.indexOf(obj) == -1) {
      dispatch(addToFavorite({ obj }));
      
    
    } else {
      dispatch(removeFromFavorite({ obj }));
      let newObj={...obj,fav:false}
      setData([newObj,...data])
      console.log("setdata",data);
    //  data[ data.indexOf(obj)].fav=false
     
    }
    
   
    
  }
  useEffect(() => {
    var newArr=[]
    console.log("fav",FavoritesArray);
    console.log("data",data);
    console.log("new",newArr);
    newArr= _.unionBy(FavoritesArray,data, 'id'); 
      setData(newArr)
      console.log("new2",newArr);
  }, [FavoritesArray]);

  return (
    <>
        {FavoritesArray.length==0 && <Box sx={{textAlign:"center"}}>
            NO PRODUCT FOUND
            </Box>}
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
