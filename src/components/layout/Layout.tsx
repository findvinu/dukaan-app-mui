import React, { FC } from "react";
import { Container, Box } from '@mui/material';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (

    <Box sx={ { my: 4 } }>
      { children }
    </Box>
  )
}