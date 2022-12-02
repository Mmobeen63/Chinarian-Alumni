import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "../Components/Containers/Signup";
import Home from "../Components/Containers/Home";
import Register from "../Components/Containers/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
