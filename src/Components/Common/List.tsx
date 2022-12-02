import * as React from "react";
import styled from "@emotion/styled";

const StyledList = styled("ul")(({ theme }) => ({
  "list-style-type": "none",
  display: "flex",
  color: "white",
  alignItems:"center",
}));
type props={
  children?: string|JSX.Element|JSX.Element[]
}
const List = ({ children, ...Props }:props) => {
  return <StyledList {...Props}>{children}</StyledList>;
};

List.defaultProps = {
  children: <>No children provided</>,
};
export { List };
