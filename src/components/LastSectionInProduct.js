import { Grid } from "@mui/material";
import React from "react";
import { Gray, mainColor, secColor } from "../colors";

export default function LastSectionInProduct() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: " 4.765625vw" }}
    >
      <Grid item md={5.9}>
        <span className="Product-ID" style={{ color: mainColor }}>
          Details
        </span>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {Array.from(Array(5)).map((item) => (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item md={3}>
                <span className="Product-ID" style={{ color: Gray }}>
                  {" "}
                  Feature 1:
                </span>
              </Grid>
              <Grid item>
                <span
                  className="Product-ID"
                  style={{ fontWeight: 400, color: Gray }}
                >
                  Lorem ipsum dolor sit amet, consectetuer
                </span>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={0.2} sx={{ backgroundColor: "red" }}>
        <span className="line"></span>
      </Grid>

      <Grid item md={5.9}>
        <span className="Product-ID" style={{ color: mainColor }}>
          Details
        </span>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {Array.from(Array(5)).map((item) => (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item md={3}>
                <span className="Product-ID" style={{ color: Gray }}>
                  {" "}
                  Feature 1:
                </span>
              </Grid>
              <Grid item>
                <span
                  className="Product-ID"
                  style={{ fontWeight: 400, color: Gray }}
                >
                  Lorem ipsum dolor sit amet, consectetuer
                </span>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
