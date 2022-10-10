import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { Gray, mainColor, secColor } from "../colors";
import FavProducts from "../components/FavProducts";
import Header from "../components/Header";
import Products from "../components/Products";
import WelcomeUser from "../components/WelcomeUser";
import { headerData } from "../data";

export default function Favorites() {
  return (
    <div>
      <Box
        sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
      >
        <Box className="header">
          <Header data={headerData} />
        </Box>
        <Box className="containerr-tow" sx={{ backgroundColor: "white" }}>
          <span style={{ color: "white" }}>.</span>
          <WelcomeUser />
          <Box sx={{ marginTop: "1vw", padding: "1vw" }}>
            <FavProducts />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
