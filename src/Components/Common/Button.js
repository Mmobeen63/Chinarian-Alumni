import * as React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  alignSelf: "center",
  color: "white",
  backgroundColor: "royalblue",
  borderRadius: "10px",
  padding: "10px 30px 10px 30px ",
  marginTop: "15px",
}));
const ButtonCom = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { ButtonCom };
