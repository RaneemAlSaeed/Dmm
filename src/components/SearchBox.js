import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid } from "@mui/material";
import { mainColor, meatColor, whiteColor } from "../colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomizedMenus from "./DropDownMenu";
import { NavLink } from "react-router-dom";

export default function SearchBox(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: whiteColor,
      }}
    >
      <Box sx={{ width: "22%", height: "100%", backgroundColor: "red" }}>
        <CustomizedMenus />
      </Box>
      <Box className="search-text">
        <NavLink to="/search">
          <input type="text" width="100%" />
        </NavLink>
      </Box>
      <Box
        className="search-Icon"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SearchIcon
          sx={{
            cursor: "pointer",
            width: "1.458333333333vw",
            height: "1.458333333333vw",
            color: mainColor,
          }}
        />
      </Box>
    </Box>
  );
}
