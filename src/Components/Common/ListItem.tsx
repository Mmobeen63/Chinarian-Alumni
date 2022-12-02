import * as React from "react";
import styled from "@emotion/styled";

const ListStyleItem = styled("li")(({ theme }) => ({
  fontFamily: "sans-serif",
  letterSpacing: "0.2em",
  color: "white",
}));
type props={
  children?: string|JSX.Element|JSX.Element[]
}
const ListItem = ({ children, ...Props }:props) => {
  return <ListStyleItem {...Props} > {children} </ListStyleItem>;
};
ListItem.defaultProps = {
  children: <>no children found</>,
};
export { ListItem };
