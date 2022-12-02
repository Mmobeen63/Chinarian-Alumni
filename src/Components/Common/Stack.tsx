import * as React from "react";
import { Stack as StackComp } from "@mui/system";
type props={
  direction:"column" | "row" | "row-reverse" | "column-reverse" | undefined,
   children?:JSX.Element|JSX.Element[],  
}
const Stack = ({ direction, children, ...Props }:props) => {
  return (
    <StackComp direction={direction} {...Props}>
      {children}
    </StackComp>
  );
};
Stack.defaultProps = {
  direction: "column",
  children: <>no children found</>,
};
export { Stack };
