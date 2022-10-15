import { Box, Button } from "@mui/material";
import React from "react";
import { Gray, mainColor } from "../colors";
import Popper from "./Popper";
import SlideFromContainer from "./Popper";

export default function QTYBox() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Box className="firstQTYBox">
      <span
        className="Product-ID"
        style={{ color: mainColor, marginBottom: "0.5vw" }}
      >
        Place your Qty:
      </span>
      <input
        type="text"
        className="qty-box"
        style={{
          border: " 0.052083333333333vw solid ",
          borderColor: mainColor,
        }}
      />
      <span
        className="Product-ID"
        style={{ color: Gray, margin: "0.5vw 0", fontWeight: 400 }}
      >
        {" "}
        unit Price: 00000
      </span>
      <Box
        className="qty-box"
        sx={{
          border: " 0.052083333333333vw solid ",
          borderColor: mainColor,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span className="Product-ID" style={{ color: Gray, fontWeight: 400 }}>
          {" "}
          Total Price: 00000
        </span>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginY: "1vw",
          width: "9.0625vw",
          height: "1.71875vw",
          fontSize: "0.625vw",
          fontWeight: 700,
          textTransform: "capitalize",
        }}
        onClick={handleChange}
      >
        Move to cart
      </Button>
      {checked && <Popper />}
    </Box>
  );
}
