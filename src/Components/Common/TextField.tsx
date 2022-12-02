import * as React from "react";
import { TextField as TextFieldComp } from "@mui/material";
import styled from "@emotion/styled";


const StyledTextField = styled(TextFieldComp)(({ theme }) => ({
  boxSizing: "border-box",
  width: "418px",
  height: "56px",
  borderRadius: "10px",
}));
type props = {
  children? :  string|JSX.Element|JSX.Element[],
  props?:any
  variant: "filled"|"outlined"|"standard"
  label:string
  type?: string
  value:{}
  name: string
  onChange:any
  required:boolean
  select?:boolean
}
const TextField = ({variant="filled",children,...props }:props) => {
  return <StyledTextField variant="filled" {...props}  />
};
TextField.defaultProps = {
  children: <> No children</>,
};
export { TextField };
