import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { WHITE } from "../../Config/Palette";
import { Typography } from "./Typography";

export const StyledLink = styled(NavLink)(({ theme }) => ({
  color: WHITE,
  textDecoration: "none",
}));
export const NavStyle = styled(Typography)(({ theme }) => ({
  color: WHITE,
}));
