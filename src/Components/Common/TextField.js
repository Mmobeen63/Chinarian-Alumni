import React from "react";
import { TextField } from "@mui/material";

const TextFieldCom = ({ children, ...Props }) => {
  return <TextField {...Props}>{children}</TextField>;
};
TextFieldCom.defaultProps = {
  children: <> No children</>,
};
export { TextFieldCom };
