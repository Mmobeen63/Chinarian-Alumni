import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Components/Containers/Signup";
import Home from "../Components/Containers/Home";
import Register from "../Components/Containers/Register";
import Login from "../Components/Containers/Login";
import CheckLogin from "../Components/Containers/CheckLogin";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />}></Route>
      <Route element={<CheckLogin />}>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};
