import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Gray, mainColor, secColor, whiteColor } from "../colors";
import { NavLink } from "react-router-dom";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function BigCartInDashboard(props) {
  // console.log("id",props.id);
  const [fav, setFav] = useState(false);
  function handleFav(){
    setFav(!fav)
  }
  return (
    <Paper elevation={3} className="BigCartInDashboard">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={5}>
          <NavLink to="/product">
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

                <p
                  style={{
                    color: Gray,
                    marginTop: ".5vw",
                    marginBottom: "1.5vw",
                  }}
                >
                  {props.price}
                </p>
              </span>

              <FavoriteOutlinedIcon
                sx={{
                  fill: props.fav == true ? mainColor : "#b1afaf",
                  cursor: "pointer",
                  fontSize: " 1.5020833333333vw",
                }}
                onClick={() => {props.handleFavClick()}}
              />
            </Box>
            <Box className="SmallCart-details-desc" style={{ color: Gray }}>
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
              >
                <Grid item>
                  <span
                    className="Price-options"
                    style={{ fontSize: "0.925vw", color: mainColor }}
                  >
                    QTY: 25
                  </span>{" "}
                  <RateReviewOutlinedIcon
                    sx={{
                      color: mainColor,
                      marginLeft: "1vw",
                      fontSize: "1.09375vw",
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
