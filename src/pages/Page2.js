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
import Dashboard from "../components/Dashboard";
import BigCartInDashboard from "../components/BigCartInDashboard";
export default function Page2() {
  return (
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box
        className="containerr"
        sx={{ marginTop: "2.2916666666667vw" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ }}
        >
          <Grid item sx={{ backgroundColor: "" }}>
            <Dashboard />
          </Grid>
          <Grid
            item
            md={10.1}
            sx={{
              // backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {smallCartData.map((item) => (
                <Grid item md={5.9}>
                  <BigCartInDashboard
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    PriceOptions={item.PriceOptions}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
