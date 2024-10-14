import { Box, Paper } from '@mui/material'
import React from 'react'

function BoxMrgPdgBgBrPaper({children}) {
  return (
    <Box margin="1rem 0rem" component={Paper} sx={{
        background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
        padding: "1rem", borderRadius: "2rem",
    }}>  
      {children}
</Box>
  )
}

export default BoxMrgPdgBgBrPaper