import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { secColor, mainColor, whiteColor, Gray } from "../colors";
import FirstShapeInHomePage from "../components/FirstShapeInHomePage";
import Header from "../components/Header";
import SmallCart from "../components/SmallCart";
import { headerData, smallCartData } from "../data";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import DropsdownList from "../components/DropsdownList";
import RecipeReviewCard from "../components/DropsdownList";
import Divider from "@mui/material/Divider";
import RadioComp from "./Radio";
export default function CheckBoxComp(props) {
    const useStyles = makeStyles((theme) => ({
        label: {
          fontSize: "0.725vw",
          color: Gray,
          fontWeight: 700,
          fontFamily: "Montserrat",
        },
      }));
      const classes = useStyles();
  return (
    <FormControlLabel
    classes={classes}
    control={
      <Checkbox
        sx={{
          color: mainColor,
          "&.Mui-checked": {
            color: mainColor,
          },
          "& .MuiSvgIcon-root": {
            fontSize: " 1.2vw",
          },
        }}
      />
    }
    label={
      <Box
        sx={{
          fontSize: "0.725vw",
          color: Gray,
          fontWeight: 700,
          fontFamily: "Montserrat",
        }}
      >
       {props.value}
      </Box>
    }
  />
  )
}
