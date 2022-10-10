import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Gray, mainColor, secColor } from "../colors";
import Header from "../components/Header";
import Products from "../components/Products";
import { headerData } from "../data";

export default function WelcomeUser() {
  let profileInfo = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();
  console.log("ss", profileInfo);
  return (
    <Box>
      <span style={{ color: mainColor }} className="welcome">
        Welcome <span style={{ color: Gray }}>{profileInfo.name} </span>{" "}
      </span>
      <hr />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "17.916666666667vw", margin: "0 auto" }}
      >
        <NavLink  style={{textDecoration:"none"}} to="/favorites" >
          <span
            style={{
              color: location.pathname === "/favorites" ? mainColor : Gray,
            }}
            className="text"
          >
            Favorites
          </span>
        </NavLink>

        <span className="vl" style={{ height: " 1.2088541666667vw" }}>
          {" "}
        </span>
        <NavLink  style={{textDecoration:"none"}} to="/orderHistory">
          <span
            className="text"
            style={{
              color:
                location.pathname === "/orderHistory" ? mainColor : Gray,
            }}
          >
            Order History
          </span>
        </NavLink>
        <span className="vl" style={{ height: " 1.2088541666667vw" }}>
          {" "}
        </span>
        <NavLink  style={{textDecoration:"none"}} to="/notifications">
          <span
            className="text"
            style={{
              color:
                location.pathname === "/notifications" ? mainColor : Gray,
            }}
          >
            Notifications
          </span>
        </NavLink>
      </Grid>
      <hr />
    </Box>
  );
}
