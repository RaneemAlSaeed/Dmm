import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { Gray, mainColor, secColor } from "../colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function SectionTowInProduct() {
  const [fav, setFav] = useState(false);
  function handleFav() {
    setFav(!fav);
  }
  return (
    <Box sx={{ marginTop: "-1vw" }}>
      <Box sx={{ display:"flex",justifyContent:"space-between" }}>

      <span
        className="NewProductsArrived"
        style={{ color: mainColor, textAlign: "start" }}
      >
        Smart Headphone
      </span>
      <Box sx={{marginTop:"1vw"}}>
      {fav == true ? (
            <FavoriteIcon
              sx={{
                color:mainColor,
                cursor: "pointer",
                fontSize: " 2.05020833333333vw",
              }}
              onClick={handleFav}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                color: Gray,
                cursor: "pointer",
                fontSize: " 2.05020833333333vw",
              }}
              onClick={handleFav}
            />
          )}
      </Box>
      </Box>
   
      <Box className="product-desc" style={{ color: Gray }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
      </Box>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ marginTop: "1.25vw" }}
      ></Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item md={3}>
            <span className="Product-ID" style={{ color: Gray }}>
              {" "}
              Product ID:
            </span>
          </Grid>
          <Grid item>
            <span className="Product-ID" style={{ fontWeight: 400 }}>
              Ky-986{" "}
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item md={3}>
            <span className="Product-ID" style={{ color: Gray }}>
              Category:
            </span>
          </Grid>
          <Grid item>
            <span className="Product-ID" style={{ color: Gray }}>
              {" "}
              Category group 1 > Category Name{" "}
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ width: "90%", marginTop: "2.2708333333333vw" }}>
        <span className="Product-ID" style={{ color: Gray }}>
          {" "}
          Price options:
        </span>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={3}>
            <span
              className="Product-ID"
              style={{ color: mainColor, fontWeight: 400 }}
            >
              100 - 500 Pc.
            </span>
            <p
              className="Product-ID"
              style={{ color: Gray, textAlign: "center" }}
            >
              3,500
            </p>
          </Grid>
          <Grid item md={3}>
            <span
              className="Product-ID"
              style={{ color: mainColor, fontWeight: 400 }}
            >
              100 - 500 Pc.
            </span>
            <p
              className="Product-ID"
              style={{ color: Gray, textAlign: "center" }}
            >
              3,500
            </p>
          </Grid>
          <Grid item md={3}>
            <span
              className="Product-ID"
              style={{ color: mainColor, fontWeight: 400 }}
            >
              100 - 500 Pc.
            </span>
            <p
              className="Product-ID"
              style={{ color: Gray, textAlign: "center" }}
            >
              3,500
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
