import { Box } from "@mui/material";
import React from "react";
import { Gray, whiteColor } from "../colors";
import MiniCategoryDropdownList from "./MiniDropDownLIst";

import { useState } from "react";
// import "./styles.css";
import {
  AppBar,
  Toolbar,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
} from "@material-ui/core";
import DropsdownList from "./DropsdownList";
import MiniDropsdownList from "./MiniDropDownLIst";

export default function OpenCategoryList() {
  const Arr = [1];
  const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
      width: "13.4375vw",
      background: "white",
      height: "100%",
      marginTop:1
    },

    listItem: {
      color: Gray,
    },
    listItemRed: {
      color: Gray,
      paddingLeft: "2.50833333333333vw",
      "&:hover": {
        width: "100%",
        // backgroundColor: "red",
        // boxShadow: "none",
      },
    },
  }));
  const classes = useStyles();
  const arr = Array.from(Array(6));
  console.log(arr.length);
  return (
    <Box
      sx={{
        width: "13.4375vw",
        height: "19.739583333333vw",
        overflow:"hidden"
      }}
      className="mini-dashboard"
    >
      <Box className={classes.menuSliderContainer} component="div">
        {arr.map((item, index) => (
          <>
            <MiniDropsdownList last={index == arr.length - 1 ? true : false} index={index}/>
          </>
        ))}
      </Box>
    </Box>
  );
}
