import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Product from "../pages/Product";
import OpenCategory from "../pages/OpenCategory";
import CartPage from "../pages/CartPage";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Favorites from "../pages/Favorites";
import OrderHistory from "../pages/OrderHistory";
import Notifications from "../pages/Notifications";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import HomeTow from "../pages/HomeTow";
import Login from "../pages/Login";
import VerifyPage from "../pages/VerifyPage";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} exact />
        <Route path="/homeTow" element={<HomeTow/>} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/product" element={<Product />} exact />
        <Route path="/open-category" element={<OpenCategory />} exact />
        <Route path="/cart-page" element={<CartPage />} exact />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/favorites" element={<Favorites />} exact />
        <Route path="/orderHistory" element={<OrderHistory />} exact />
        <Route path="/notifications" element={<Notifications />} exact />
        <Route path="/orderHistoryPage" element={<OrderHistoryPage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/verify" element={<VerifyPage />} exact />

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
