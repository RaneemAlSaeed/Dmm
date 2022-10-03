import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { meatColor, whiteColor } from "../colors";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SidebarNav from "./SidebarNav";
import { useSelector, useDispatch } from 'react-redux'
import { openSideBar, closeSideBar } from '../store/sideBarSlice'
export default function Header(props) {
  // const [open, setOpen] = useState(false);

  // const toggleSlider = () => {
  //   setOpen(!open);
  //   console.log(open);
   
    
  // };
  const sideBarState = useSelector((state) => state.sideBarState.sideBarState)
  const dispatch = useDispatch()
  return (
    <Box className="header" sx={{ backgroundColor: props.data.bgColor }}>
      <NavLink to="/">
        <img src={props.data.logo} className="logo" />
      </NavLink>
      <Box className="header-box">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box className="header-icons">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  // backgroundColor:"red",
               
                }}
                onClick={()=>{dispatch(openSideBar());document.body.className = "cls"}}

              >
                <GridViewIcon
                  sx={{
                    width: "1.1458333333333vw",
                    height: " 1.3020833333333vw",
                    color: "white",
                  }}
                    
                />
              
                <span className="desc" style={{ color: whiteColor }}>
                  Category
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <PersonIcon
                  sx={{
                    width: "1.1458333333333vw",
                    height: " 1.3020833333333vw",
                    color: "white",
                  }}
                />

                <span className="desc" style={{ color: whiteColor }}>
                  Profile
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    width: "1.1458333333333vw",
                    height: " 1.3020833333333vw",
                    color: "white",
                  }}
                />

                <span className="desc" style={{ color: whiteColor }}>
                  Cart
                </span>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box className="search-box">
        <SearchBox />
      </Box>
      {sideBarState && <SidebarNav  />}
    </Box>
  );
}
