import { Box } from '@mui/material';
import React from 'react'
import { secColor } from "../colors";
import Stepper from "../components/Stepper";
import logo from "../images/Logo.svg";
export default function StepperLogo(props) {
  return (
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Box sx={{ width: props.logoWidth, height: " 56.027849028948%" }}>
          <img src={logo} alt="logo" width="100%" height="100%" />
        </Box>
        <Box className="Stepper-desc-1" sx={{fontSize:props.descOneFontSize}}>
        DM Mobile
        </Box>
        <Box className="Stepper-desc-2 " sx={{fontSize:props.discTowfs}}>
        Bluetooth headset, TWS, Neckband
        </Box>
        {/* <span className="Stepper-desc-1"></span>
        <span className="Stepper-desc-2"></span> */}
      </Box>
  )
}
