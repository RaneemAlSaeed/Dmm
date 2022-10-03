import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mainColor } from "../colors";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Popper() {
  return (
    <Box className="poper-parent">
  <motion.div
    className="handle"
    initial={{    y: 200, }}
    animate={{     y: -100, }}

    transition={{
     duration:.2
    }}
    >
      <Box
        sx={{
          padding: "2vw 3.8541666666667vw",
        }}
        className="centerlize-box"
      >
        <ShoppingCartIcon
          sx={{
            color: mainColor,
            width: "3.1619791666667vw",
            height: " 2.796875vw",
          }}
        />
        <span className="popup-text">
          The Product you ordered is moved To Cartwhen you finish orderingPlease
          go to cart to confirm your orders
        </span>
        <NavLink to="/home-1">
          <Button
            variant="contained"
            sx={{ width: "8.9583333333333vw", marginTop: "1.8vw" }}
          >
            ok
          </Button>
        </NavLink>
      </Box>
    </motion.div>
    </Box>
  
  );
}
