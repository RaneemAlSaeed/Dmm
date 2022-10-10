import { Box, Paper } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { whiteColor } from "../colors";

export default function BigCart(props) {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${props.img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };
  function handleClick (){
    localStorage.setItem("productImg",JSON.stringify(props.img))
    localStorage.setItem("title",JSON.stringify(props.title))
  }
  return (
    <NavLink to="/open-category">
      <Box
        onClick={handleClick}
        className="BigCart"
        style={styles.paperContainer}
        sx={{
          width: "100%",
          height: props.height,
          objectFit: "cover",
          borderRadius: "0.52083333333333vw",
        }}
      >
        <Box
          className="BigCart-text"
          sx={{ fontSize: props.fontSize, color: whiteColor }}
        >
          {props.title}
        </Box>
      </Box>
    </NavLink>
  );
}
