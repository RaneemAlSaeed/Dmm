import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Gray, mainColor, secColor } from "../colors";
import AboutCard from "../components/AboutCard";
import AboutSection from "../components/AboutSection";

import FirstShapeInHomePage from "../components/FirstShapeInHomePage";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import SidebarNav from "../components/SidebarNav";
import Stepper from "../components/Stepper";
import StepperLogo from "../components/StepperLogo";
import logo from "../images/Logo.svg";
import EasyContent from "../components/EasyContent";
// import Product from "../components/Product";
import ProductsSwiper from "../components/ProductsSlider";
import TransitionsPopper from "../components/Popper";
import SlideFromContainer from "../components/Popper";

export default function Home() {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Stepper />
      <Box className="Stepper-photo">
        <StepperLogo
          logoWidth="78.742840571304%"
          descOneFontSize="1.725vw"
          discTowfs="0.725vw"
        />
      </Box>
      <Box
        className="home-search-box-parent"
        sx={{ backgroundColor: secColor }}
      >
        <Box className="home-search-box">
          <SearchBox />
        </Box>
      </Box>

      <Box className=" NewProductsArrivedBox">
        <span className="NewProductsArrived" style={{ color: mainColor }}>
          New Products Arrived
        </span>
        <Box className="NewProducts">
          <ProductsSwiper />
        </Box>
        <NavLink to="home-1" style={{ textDecoration: "none" }}>
          <button
            className="see-more-btn"
            style={{ backgroundColor: mainColor }}
          >
            See More
          </button>
        </NavLink>
        <Box className="containerr" sx={{ marginTop: "2.4791666666667vw" }}>
          <FirstShapeInHomePage />
        </Box>
        <Box className="home-landing-cover"></Box>
        <Box className="containerr">
          <AboutSection />
        </Box>
      </Box>
      <Box className=" easy-box" sx={{ backgroundColor: secColor }}>
        <EasyContent />
      </Box>
      <Footer />
    
    </Box>
  );
}
