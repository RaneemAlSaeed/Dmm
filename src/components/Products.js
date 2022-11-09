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
import { InsertEmoticonTwoTone } from "@material-ui/icons";
import { getProducts } from "../store/productsSlice";
// Requiring the lodash library
import CircularProgress from "@mui/material/CircularProgress";
import { getFavorites } from "../store/favoritesSlice";

const _ = require("lodash");

export default function Products(props) {
  // const [isItemInFav, setIsItemInFav] = useState(false);

  const dispatch = useDispatch();
  // const products = useSelector(
  //   (state) => state.favoriteState.products
  // );
  const products = useSelector(
    (state) => state.products.products
  );
  const loading = useSelector((state) => state.products.loading);
  // const [products, setFavoritesArray] = useState([]);

  const FavoritesState = useSelector((state) => state.favorites.favorites);

const [arr,setArr]=useState([])
  // let newARR=[]
  useEffect(() => {
    console.log("hi Product");
    dispatch(getFavorites())
    dispatch(getProducts())

    for(let i=0;i<products.length;i++){
      for(let j=0;j<FavoritesState.length;j++){
        
        if(products[i].id===FavoritesState[j].product.id){

          console.log("hob",products[i].id);
          // setArr(arr.push(products[i].id));
          setArr((prevArr) => ([...prevArr,products[i].id]));
          //  newARR.push(products[i].id)
            console.log("newwwwwwwww",arr);
        }
        
        // console.log("hob",FavoritesState[0].product);
        // console.log("job",products[0]);
        
      
      } 
    }
    
  }, []);

  return (
    <>
      {loading == true && products.length==0 && (
          <Box sx={{ width:"100vw",height:"100vh" ,display: "flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0 }}>
            <CircularProgress />
          </Box>
        )}
        <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
     
      {products.map((item) => (
        <Grid item md={5.9}>
          <BigCartInDashboard
            id={item.id}
            newARR={arr}
            // fav={item.fav}
            img={item.image.preview_url}
            title={item.title}
            desc={item.description}
            price={item.price}
          
            PriceOptions={item.price_options}
            delete={props.delete}
            // handleFavClick={() => handleFavClick(item, item.id)}
          />
        </Grid>
      ))}
    </Grid>
    </>
    
  );
}
