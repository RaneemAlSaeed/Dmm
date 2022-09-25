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

export default function RadioComp(props) {
  return (
    <FormControlLabel
      //   classes={classes}
      className="text"
      value={props.value}
      control={
        <Radio
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
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
          {props.value}
        </Box>
      }
      size="large"
      sx={{ color: Gray, fontSize: " 1vw" }}
    />
  );
}
