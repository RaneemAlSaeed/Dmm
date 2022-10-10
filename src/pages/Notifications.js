import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { Gray, mainColor, secColor } from "../colors";
import Header from "../components/Header";
import Products from "../components/Products";
import WelcomeUser from "../components/WelcomeUser";
import { headerData } from "../data";

export default function Notifications() {
  return (
    <div>
      <Box
        sx={{ backgroundColor: secColor, display: { xs: "none", md: "block" } }}
      >
        <Box className="header">
          <Header data={headerData} />
        </Box>
        <Box className="containerr-tow" sx={{ backgroundColor: "white" }}>
          <span style={{ color: "white" }}>.</span>
          <WelcomeUser />
          <Box sx={{ marginTop: "0vw", padding: "0 1vw" }}>
            <Box className="note">
              <span style={{width:"24.375vw",fontWeight:700}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>
            <Box className="note">
              <span style={{width:"24.375vw",fontWeight:700}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>
            <Box className="note">
              <span style={{width:"24.375vw",fontWeight:700}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>  <Box className="note">
              <span style={{width:"24.375vw",fontWeight:700}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>  <Box className="note">
              <span style={{width:"24.375vw",fontWeight:400}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>  <Box className="note">
              <span style={{width:"24.375vw",fontWeight:400}}>
                Your order is confirmed Our customer service willcontact you
                soon for details
              </span>
              <span>04:35pm</span>
            </Box>
            <Box className="note">
          
            </Box>
            <Box className="note">
          
          </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
