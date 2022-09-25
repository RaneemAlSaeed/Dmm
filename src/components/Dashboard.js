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
import CheckBoxComp from "./CheckBoxComp";

export default function Dashboard() {
  
  return (
    <Box className="dashboard" sx={{ backgroundColor: whiteColor }}>
      <Box sx={{ padding: "2vw" }}>
        <p className="dashboard-title" style={{ color: mainColor }}>
          {" "}
          Order by Price :
        </p>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="Ascending"
            name="radio-buttons-group"
          >
            <RadioComp value="Ascending" />
            <RadioComp value="Descending" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className="Checkbox">
        <FormGroup>
          <CheckBoxComp value=" Most Ordered" />
          <CheckBoxComp value=" New Added" />
        </FormGroup>
      </Box>
      <Box sx={{ padding: "2vw", width: "100%" }}>
        <p className="dashboard-title" style={{ color: mainColor }}>
          {" "}
          Category :
        </p>

        {Array.from(Array(10)).map((item) => (
          <>
            <DropsdownList />
          </>
        ))}
      </Box>
    </Box>
  );
}
