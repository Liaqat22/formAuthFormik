import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box margin="1rem 0" >
    <Grid2 container spacing={2} columns={12} sx={{
      display : "flex",justifyContent : 'space-between' , alignItems : "center"
    }}>
      <Grid2 size = {{xs : 12 , sm:12 , md : 6}}>
        <Typography color='white' variant='body2'> @ 2024, Made with ❤️    by Liaqat Ali for a better web
</Typography>
      </Grid2>
      <Grid2 size = {{xs : 12 , sm:12 , md : 5}} sx={{display : "flex",justifyContent : 'space-evenly' , alignItems : "center"}} >
        <Button variant="text" color='white'>linkedin</Button>
        <Button variant="text" color='white'>github</Button>
        <Button variant="text" color='white'>whatsapp</Button>
        <Button variant="text" color='white'>email</Button>
      </Grid2>
    </Grid2>
    </Box>
  )
}

export default Footer