import React from "react";
import { Stack } from "@mui/system";

const StackComp = ({ direction, children, ...Props }) => {
  return (
    <Stack direction={direction} {...Props}>
      {children}
    </Stack>
  );
};
Stack.defaultProps = {
  direction: "column",
  children: <>no children found</>,
};
export { StackComp };
