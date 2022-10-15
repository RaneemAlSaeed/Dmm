import { Grid } from "@mui/material";
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
import { InsertEmoticonTwoTone } from "@material-ui/icons";
// Requiring the lodash library

const _ = require("lodash");

export default function Products(props) {
  // const [isItemInFav, setIsItemInFav] = useState(false);
  const [data, setData] = useState(smallCartData);
  const dispatch = useDispatch();
  const FavoritesArray = useSelector(
    (state) => state.favoriteState.FavoritesArray
  );
  // const [FavoritesArray, setFavoritesArray] = useState([]);

  function handleFavClick(obj, id) {
    let trueObject = { ...obj, fav: true };
    let falseObject = { ...obj, fav: false };
    console.log(trueObject);
    console.log(falseObject);
    if (FavoritesArray.length == 0) {
      dispatch(addToFavorite({ trueObject }));
      // setFavoritesArray([...FavoritesArray, ]);
      let index = data.indexOf(obj);
      data[index] = trueObject;
      setData(data);
    } else {
      if (
        JSON.stringify(FavoritesArray).indexOf(JSON.stringify(trueObject)) > -1
      ) {
        dispatch(removeFromFavorite({ trueObject }));
        let index = data.indexOf(obj);
        data[index] = falseObject;
        setData(data);
      } else {
        dispatch(addToFavorite({ trueObject }));
        let index = data.indexOf(obj);
        data[index] = trueObject;
        setData(data);
      }
    }
  }

  useEffect(() => {
    console.log("FavoritesArray", FavoritesArray);
    console.log("data", data);

    
  }, [FavoritesArray]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {data.map((item) => (
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
            handleFavClick={() => handleFavClick(item, item.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
