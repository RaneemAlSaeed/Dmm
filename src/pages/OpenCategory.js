import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mainColor, secColor, whiteColor } from "../colors";
import BigCartInDashboard from "../components/BigCartInDashboard";
import Header from "../components/Header";
import OpenCategoryList from "../components/OpenCategoryList";
import OpenCategoryPhoto from "../components/OpenCategoryPhoto";
import { headerData, smallCartData } from "../data";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { closeexpanded } from "../store/expanded";
import { motion } from "framer-motion";

export default function OpenCategory() {
  const expandedState = useSelector((state) => state.expanded.expandedState);
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(closeexpanded());
    document.body.style.overflow = "hidden";
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <Box
      sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
    >
      <Box className="header">
        <Header data={headerData} />
      </Box>
      <Box className="containerr-tow">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Grid item>
            <OpenCategoryList />
          </Grid>
          <Grid item>
            <OpenCategoryPhoto />
          </Grid>
        </Grid>
        {expandedState == false && (
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Box sx={{ marginTop: "1.5vw", width: "100%" }}>
              <Products />
            </Box>
          </motion.div>
        )}

        {expandedState && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Box sx={{ marginTop: "1.5vw", width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item md={2}>
                  <span className="Product-ID" style={{ color: mainColor }}>
                    {" "}
                    Sub Category Name :
                  </span>
                </Grid>

                <Grid item md={9.5}>
                  <hr />
                </Grid>
                <Grid
                  item
                  md={0.5}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <DisabledByDefaultOutlinedIcon
                    sx={{
                      color: mainColor,
                      cursor: "pointer",
                      width: " 1.5104166666667vw",
                      height: " 1.5104166666667vw",
                    }}
                    onClick={handleClose}
                  />
                </Grid>
              </Grid>
              <Box sx={{ marginTop: "1vw" }}>
                <Products />
              </Box>
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  );
}
