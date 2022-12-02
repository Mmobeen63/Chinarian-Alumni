import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BLACK } from "../../Config/Palette";
import { Typography } from "./Typography";

export const StyledLink = styled(NavLink)(({ theme }) => ({
  color: BLACK,
  textDecoration: "none",
}));
export const NavStyle = styled(Typography)(({ theme }) => ({
  color: BLACK,
}));
