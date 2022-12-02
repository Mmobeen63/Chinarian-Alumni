import React from "react";
import styled from "@emotion/styled";

const StyledList = styled("ul")(({ theme }) => ({
  "list-style-type": "none",
  display: "flex",
  color: "white",
  margin: "20px",
}));

const List = ({ children, ...Props }) => {
  return <StyledList {...Props}>{children}</StyledList>;
};

List.defaultProps = {
  children: <>No children provided</>,
};
export { List };
