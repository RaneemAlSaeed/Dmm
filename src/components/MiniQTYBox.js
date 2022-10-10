import { Box, Button } from "@mui/material";
import React from "react";
import { Gray, mainColor } from "../colors";
import Popper from "./Popper";
import SlideFromContainer from "./Popper";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

export default function MiniQTYBox(props) {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box className="QTYBox">
      <ShoppingCartOutlinedIcon
        sx={{ width: "3.28125vw", height: "3.28125vw", color: mainColor }}
      />

      <Box
        className="qty-box-mini"
        sx={{
          border: " 0.052083333333333vw solid ",
          borderColor: Gray,
          display: "flex",
          marginTop: "2vw",
          justifyContent: "center",
        }}
      >
        <span className="Product-ID" style={{ color: Gray, fontWeight: 400 }}>
          Total order Price: 000,000
        </span>
      </Box>
      <Box
        className="qty-box-mini"
        sx={{
          border: " 0.052083333333333vw solid ",
          borderColor: Gray,
          display: "flex",
          marginTop: "1vw",
          justifyContent: "center",
        }}
      >
        <span className="Product-ID" style={{ color: Gray, fontWeight: 400 }}>
          Total order Price: 000,000
        </span>
      </Box>
      {props.back==true ? (
        <NavLink to="/orderHistory">
           <Button
            variant="contained"
            sx={{
              marginY: "2vw",
              width: " 11.875vw",
              height: "2.7604166666667vw",
              fontSize: "0.725vw",
              fontWeight: 900,
              textTransform: "capitalize",
              backgroundColor: props.bgColor,
              "&:hover": {
                backgroundColor: `${props.submit ? "#68da96" : ""}`,
                boxShadow: "none",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: `${props.submit ? "#68da96" : ""}`,
              },
            }}
            
          >
            {props.text }
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/orders">
          <Button
            variant="contained"
            sx={{
              marginY: "2vw",
              width: " 11.875vw",
              height: "2.7604166666667vw",
              fontSize: "0.725vw",
              fontWeight: 900,
              textTransform: "capitalize",
              backgroundColor: props.bgColor,
              "&:hover": {
                backgroundColor: `${props.submit ? "#68da96" : ""}`,
                boxShadow: "none",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: `${props.submit ? "#68da96" : ""}`,
              },
            }}
            onClick={handleChange}
          >
            {props.text || "Confirm Order"}
          </Button>
        </NavLink>
      )}

      {props.submit && checked && <Popper />}
    </Box>
  );
}
