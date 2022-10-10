import { Box, Grid } from "@mui/material";
import React from "react";
import { secColor, whiteColor } from "../colors";
import Header from "../components/Header";

import { headerData } from "../data";

export default function OpenCategoryPhoto() {
  let img = JSON.parse(localStorage.getItem("productImg"));
  let title = JSON.parse(localStorage.getItem("title"));
  const styles = {
    paperContainer: {
      backgroundImage: `url(${img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <Box
      width=" 56.666666666667vw"
      height="19.739583333333vw"
      style={styles.paperContainer}
      sx={{ position: "relative" }}
    >
      <Box className="BigCart-text-Open" sx={{ color: whiteColor }}>
        {title}
      </Box>
    </Box>
  );
}
