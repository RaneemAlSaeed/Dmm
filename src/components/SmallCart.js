import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Gray, mainColor } from "../colors";
export default function SmallCart(props) {
  const [fav, setFav] = useState(false);
  function handleFav() {
    setFav(!fav);
  }
  return (
    <Paper elevation={3} className="SmallCart">
      <img src={props.img} alt="" className="SmallCart-img" />
      <Box className="SmallCart-details">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <span className="SmallCart-details-title" style={{ color: Gray}}>
            {props.title}
            <br />
            <span style={{ color: Gray}}>{props.price}</span>
          </span>

          {fav == true ? (
            <FavoriteIcon
              sx={{
                color:mainColor,
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
        <p className="SmallCart-details-desc" style={{ color: Gray}}>{props.desc} </p>
      </Box>
    </Paper>
  );
}
