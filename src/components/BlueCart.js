import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Blue, Gray, mainColor, secColor, whiteColor } from "../colors";
import { NavLink } from "react-router-dom";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Circle from "./Circle";
import { smallCartData, smallCartDataImg } from "../data";
export default function BlueCart(props) {
  const [fav, setFav] = useState(false);
  function handleFav() {
    setFav(!fav);
  }

  return (
    <NavLink to="/orderHistoryPage">
      <Paper
        elevation={3}
        sx={{
          backgroundColor: Blue,
          padding: ".5vw",
          margin: "1vw 0vw",
          borderRadius: " 0.52083333333333vw",
          height: "12.552083333333vw",
          position: "relative",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="start"
        >
          <Grid item md={5}>
            <span className="Order">Order ID:</span>
            <p className="Order-num">698756</p>
            <span className="Order">Total Order Price:</span>
            <p className="Order-num">000,000</p>
          </Grid>
          <Grid item md={5}>
            {" "}
            <span className="Order">Date</span>
            <p className="Order-num">22/2/2022</p>
            <span className="Order">Total Order Price:</span>
            <p className="Order-num">000,000</p>
          </Grid>
          <Grid item md={2}>
            <AccessTimeFilledIcon
              sx={{ color: "white", width: "2.5875vw", height: "2.5875vw" }}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", position: "absolute", bottom: ".5vw" }}>
          {smallCartDataImg.map((item) => (
            <Circle img={item.img} />
          ))}
        </Box>
      </Paper>
    </NavLink>
  );
}
