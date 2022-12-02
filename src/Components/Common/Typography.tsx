import * as React from "react";
import { Typography as TypographyComp } from '@mui/material'

type props = {
  children? : string|JSX.Element|JSX.Element[]
}
const Typography = ({children, ...props}:props) => {
  return (
    <TypographyComp {...props}>{children}</TypographyComp>
  )
}


Typography.defaultProps = {
  children: <>No children provided</>
}

export { Typography }