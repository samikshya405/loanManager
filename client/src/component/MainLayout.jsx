import { Box } from '@mui/material'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <Box height={"100vh"} bgcolor={"var(--secondary)"} >
        <Box  >
        {children}
        </Box>



    </Box>
  )
}

export default MainLayout