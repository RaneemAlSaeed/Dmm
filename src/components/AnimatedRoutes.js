import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/page2" element={<Page2 />} exact />
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
