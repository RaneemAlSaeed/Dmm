import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home1 from "../pages/Home-1";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Product from "../pages/Product";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/home-1" element={<Home1/>} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/product" element={<Product />} exact />
        {/* <Route path="/our-services" element={<OurServices />} exact />
        <Route path="/projects" element={<Projects />} exact />{" "}
        <Route path="/projectsWeb" element={<ProjectsWebsites />} exact />
        <Route path="/about-us" element={<AboutUs />} exact />
        <Route path="/hire-us" element={<HireUs />} exact />
        <Route path="/OneMobile" element={<OneMobile />} exact /> */}
      </Routes>
    </AnimatePresence>
  );
}
