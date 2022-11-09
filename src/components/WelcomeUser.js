import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Gray, mainColor, secColor } from "../colors";
import Header from "../components/Header";
import Products from "../components/Products";
import { headerData } from "../data";

export default function WelcomeUser() {
  let profileInfo = localStorage.getItem("profile") && JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();
  const loginState = useSelector((state) => state.login.loginData);

  // console.log("ss", profileInfo);
  let navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    console.log("ll",loginState);
    // localStorage.removeItem("profile");
    let path = "/login";
    navigate(path);
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "2vw",
          alignItems: "center",
        }}
      >
        <span style={{ color: mainColor }} className="welcome">
          Welcome <span style={{ color: Gray }}>{localStorage.getItem("profile") && profileInfo.name} </span>{" "}
        </span>
        <span
          onClick={handleLogout}
          style={{ color: "gray", fontSize: "0.825vw", cursor: "pointer" }}
          className="welcome"
        >
          Logout
        </span>
      </Box>
      <hr />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "17.916666666667vw", margin: "0 auto" }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/favorites">
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
        <NavLink style={{ textDecoration: "none" }} to="/orderHistory">
          <span
            className="text"
            style={{
              color: location.pathname === "/orderHistory" ? mainColor : Gray,
            }}
          >
            Order History
          </span>
        </NavLink>
        <span className="vl" style={{ height: " 1.2088541666667vw" }}>
          {" "}
        </span>
        <NavLink style={{ textDecoration: "none" }} to="/notifications">
          <span
            className="text"
            style={{
              color: location.pathname === "/notifications" ? mainColor : Gray,
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
