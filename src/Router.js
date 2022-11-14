import React from "react";
import { Route, Routes, redirect } from "react-router-dom";
//adding pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SingleAd from "./pages/SingleAd/SingleAd";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/advetise/:id" element={<SingleAd />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default Router;
