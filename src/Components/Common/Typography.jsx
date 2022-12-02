 import React from 'react'
import { Typography as TypographyComp } from '@mui/material'

const Typography = ({children, ...props}) => {
  return (
    <TypographyComp {...props}>{children}</TypographyComp>
  )
}


Typography.defaultProps = {
  children: <>No children provided</>
}

export { Typography }