import * as React from "react";
import { Button as ButtonComp } from "@mui/material";
import styled from "@emotion/styled";
import { GREEN, WHITE } from "../../Config/Palette";

const StyledButton = styled(ButtonComp)(({ theme }) => ({
  backgroundColor: GREEN,
  borderRadius: "29.5px",
  color: WHITE,
  padding: "13px",
  margin: "10px",
  width: "30%",
  fontSize: "13px",
  "&:hover": {
    backgroundColor: GREEN,
  },
}))as typeof Button;
type props = {
  children? : string|JSX.Element|JSX.Element[]
  onClick:any
  style:{}
}
const Button = ({ children, ...props }:props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { Button };
