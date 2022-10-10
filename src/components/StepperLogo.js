import { Box } from '@mui/material';
import React from 'react'
import { secColor } from "../colors";
import Stepper from "../components/Stepper";
import logo from "../images/Logo.svg";
export default function StepperLogo(props) {
  return (
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center"}}>
        <Box sx={{ width: props.logoWidth, height: " 56.027849028948%" }}>
          <img src={props.img||logo} alt="logo" width="100%" height="100%" />
        </Box>
        <Box className="Stepper-desc-1" sx={{fontSize:props.descOneFontSize,color:props.color}}>
        DM Mobile
        </Box>
        <Box className="Stepper-desc-2 " sx={{fontSize:props.discTowfs,color:props.color,textAlign:"center",width:props.width}}>
        Bluetooth headset, TWS, Neckband
        </Box>
        {/* <span className="Stepper-desc-1"></span>
        <span className="Stepper-desc-2"></span> */}
      </Box>
  )
}
