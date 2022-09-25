import { Box, Grid } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from '@mui/icons-material/Search';
import {meatColor, whiteColor}from "../colors"
import { NavLink } from "react-router-dom";
export default function Header(props) {
  return (
    <Box className="header" sx={{backgroundColor:props.data.bgColor}}>
     <NavLink to="/">
     <img src={props.data.logo} className="logo" />
     </NavLink>
      <Box className="header-box" >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {props.data.icons.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor:"pointer"
              }}
            >
              <img src={item.icon} style={{width:"1.1458333333333vw",height:" 1.3020833333333vw"}}/>
              <span className="desc" style={{color:whiteColor}}>{item.desc}</span>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box className="search-box">
        <input type="text" className="search-text" />
        
        <SearchIcon  className="search-Icon" sx={{width:"1.1458333333333vw",height:"1.1458333333333vw",color:props.data.bgColor}}/>
        
      </Box>
      <Box className="category-name" sx={{backgroundColor:meatColor}}>
        <span className="span-category-name" style={{color:props.data.bgColor}}>{props.data.categoryName} </span>
        <ExpandMoreIcon sx={{ color: props.data.bgColor, cursor: "pointer",width:"1.1458333333333vw",height:"1.1458333333333vw"}} />
      </Box>
    </Box>
  );
}
