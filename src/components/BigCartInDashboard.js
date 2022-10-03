import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Gray, mainColor, secColor, whiteColor } from "../colors";
import { NavLink } from "react-router-dom";

export default function BigCartInDashboard(props) {
  const [fav, setFav] = useState(false);
  function handleFav() {
    setFav(!fav);
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

              {fav == true ? (
                <FavoriteIcon
                  sx={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: " 1.5020833333333vw",
                  }}
                  onClick={handleFav}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    color: Gray,
                    cursor: "pointer",
                    fontSize: " 1.5020833333333vw",
                  }}
                  onClick={handleFav}
                />
              )}
            </Box>
            <Box className="SmallCart-details-desc" style={{ color: Gray }}>
              {props.desc}{" "}
            </Box>

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
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
