import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Gray, mainColor, secColor, whiteColor } from "../colors";
import { NavLink, useLocation } from "react-router-dom";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFavorites,
  getFavorites,
  postFavorites,
} from "../store/favoritesSlice";
import { useEffect } from "react";

export default function BigCartInDashboard(props) {
  const dispatch = useDispatch();
  const location=useLocation()
  // console.log("ne",props.newARR);
  // const useStyles = makeStyles(
  //   createStyles({
  //     num: {
  //       "font-size": "1px",
  //       " font-family": "Montserrat",
  //       "font-style": "normal",
  //       " font-weight": " 700",
  //     },
  //     // "font-size":" 0.725vw" },
  //   })
  // );
  const useStyles = makeStyles(
    createStyles({
      num: { "font-size": "100px" },
    })
  );
  const classes = useStyles(props);
  const FavoritesState = useSelector((state) => state.favorites.favorites);
  const [num, setNum] = React.useState(25);
  const [isnumFocused, setIsnumdFocused] = React.useState(false);
  const [fav, setFav] = useState(false);
  function handleFav() {
    setFav((prev) => !prev);

    console.log("hhhhhhhhhh", fav);
    if (location.pathname=="/favorites") {
      dispatch(deleteFavorites(props.id));
      dispatch(getFavorites());
    } else {
      const product_id = props.id;
      if (fav === false) {
        console.log("product_id", product_id);
        console.log("kkkkk");

        dispatch(postFavorites({ product_id }));
        dispatch(getFavorites());
        console.log("FavoritesStateinADD", FavoritesState);
        console.log("Favoriteeee", FavoritesState);
      } else {
        dispatch(deleteFavorites(product_id));
        dispatch(getFavorites());
        console.log("FavoritesStateinDelete", FavoritesState);
        console.log("Favoriteeee", FavoritesState);
      }
    }
  }
  const handleChangeInput = (e) => {
    const re = /^[0-9\b]+$/; //rules
    if (e.target.value === "" || re.test(e.target.value)) {
      setNum(e.target.value);
    }
  };
 
  return (
    <Paper elevation={3} className="BigCartInDashboard" sx={{position:"relative"}}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={5}>
          <NavLink
            to="/product"
            onClick={() => localStorage.setItem("id", JSON.stringify(props.id))}
          >
            <Box sx={{ width: "100%", height: "13.4375vw" }}>
              <img src={props.img} alt="" width="100%" height="100%" />
            </Box>
          </NavLink>
        </Grid>
        <Grid item md={7}>
          <Box className="BigCartInDashboard-details">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span className="SmallCart-details-title" style={{ color: Gray }}>
                {props.title}
                <br />

                <span
                  style={{
                    color: Gray,
                    marginTop: ".5vw",
                    marginBottom: "1.5vw",
                  }}
                >
                  {props.price}
                </span>
              </span>

              <FavoriteOutlinedIcon
                sx={{
                  fill: (fav == true || props.newARR && props.newARR.indexOf(props.id)!==-1||location.pathname=="/favorites")? mainColor : "#b1afaf",
                  cursor: "pointer",
                  fontSize: " 1.5020833333333vw",
                }}
                onClick={() => {
                  handleFav();
                }}
              />
            </Box>
            <Box
              className="SmallCart-details-desc"
              style={{ color: Gray, fontSize: "0.3vw" }}
            >
              {props.desc}{" "}
            </Box>
            {/* //////////////// */}

            {/* /////////////////// */}
            {props.delete ? (
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{position:"absolute",bottom:20,width:"17vw"}}
              >
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {!isnumFocused ? (
                    <span
                      className="Price-options"
                      style={{ fontSize: "0.925vw", color: mainColor }}
                    >
                      QTY: {num}
                    </span>
                  ) : (
                    // <input
                    //   type="number"
                    //   autoFocus
                    //   pattern="[0-9.]+"
                    //   // placeholder="QTY"
                    //   className="qtyInput"
                    //   value={num}
                    //   onChange={(event) => setNum(event.target.value)}
                    //   onBlur={(event) => setIsnumdFocused(false)}
                    // />
                    <input
                      className="qtyInput"
                      type="text"
                      autoFocus
                      placeholder="Qty"
                      value={num}
                      maxLength="10"
                      onChange={(event) => handleChangeInput(event)}
                      onBlur={(event) => setIsnumdFocused(false)}
                      required
                    />
                  )}
                  <RateReviewOutlinedIcon
                    sx={{
                      color: mainColor,
                      marginLeft: "1vw",
                      fontSize: "1.09375vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsnumdFocused(true);
                    }}
                  />
                </Grid>
                <Grid item>
                  <button
                    className="ask-about-button-del ask-about-button"
                    style={{
                      backgroundColor: "white",
                      borderColor: mainColor,
                      color: mainColor,
                    }}
                  >
                    <DeleteOutlineOutlinedIcon
                      sx={{
                        color: mainColor,
                        marginLeft: "0vw",
                        fontSize: "1.09375vw",
                      }}
                    />{" "}
                    Delete
                  </button>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{position:"absolute",bottom:20,width:"17vw"}}
              >
                <Grid item>
                  <span className="Price-options" style={{ color: mainColor }}>
                    Price options:
                  </span>{" "}
                  <span className="Price-options" style={{ color: Gray }}>
                    {props.PriceOptions}
                  </span>
                </Grid>
                <Grid item>
                  <button
                    className="ask-about-button"
                    style={{ backgroundColor: mainColor, color: whiteColor }}
                  >
                    Ask about
                  </button>
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
