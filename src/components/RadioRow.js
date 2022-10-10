import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Gray, mainColor } from "../colors";
import { Box } from "@mui/material";

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="All Orders"
          control={
            <Radio
              sx={{
                color: mainColor,
                "&.Mui-checked": {
                  color: mainColor,
                },
                "& .MuiSvgIcon-root": {
                  fontSize: " 1.2vw",
                },
              }}
            />
          }
          label={
            <Box
              sx={{
                fontSize: "0.725vw",
                color: Gray,
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              All Orders
            </Box>
          }
          
        />
        <FormControlLabel
          value="Pending"
          control={
            <Radio
              sx={{
                color: mainColor,
                "&.Mui-checked": {
                  color: mainColor,
                },
                "& .MuiSvgIcon-root": {
                  fontSize: " 1.2vw",
                },
              }}
            />
          }
          label={
            <Box
              sx={{
                fontSize: "0.725vw",
                color: Gray,
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Pending
            </Box>
          }
          
        />
        <FormControlLabel
          value="Confirmed"
          control={
            <Radio
              sx={{
                color: mainColor,
                "&.Mui-checked": {
                  color: mainColor,
                },
                "& .MuiSvgIcon-root": {
                  fontSize: " 1.2vw",
                },
              }}
            />
          }
          label={
            <Box
              sx={{
                fontSize: "0.725vw",
                color: Gray,
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
             Confirmed
            </Box>
          }
        
        />
      </RadioGroup>
    </FormControl>
  );
}
