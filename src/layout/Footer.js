import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box marginTop="1rem" >
    <Grid2 container spacing={2} columns={12} sx={{
      display : "flex",justifyContent : 'space-between' , alignItems : "center"
    }}>
      <Grid2 size = {{xs : 12 , sm:12 , md : 6}}>
        <Typography color='white' variant='body2'> @ 2024, Made with ❤️    by Liaqat Ali for a better web
</Typography>
      </Grid2>
      <Grid2 size = {{xs : 12 , sm:12 , md : 5}}   display="flex" justifyContent="space-around" alignItems="center" sx={{
              borderRadius: "2rem",
              padding: ".5rem",
              fontSize:"1.5rem"
            }}>
         {/* SOCIAL */}
        

              {/* Email Icon with mailto link */}
              <a href="https://liaqatali097306@gmail.com/"> <i className="fas fa-envelope " /> </a>


              {/* LinkedIn Icon with link */}
              <a href="https://www.linkedin.com/in/liaqat-ali-bb086522a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin " /></a>

              {/* Facebook Icon with link */}
              <a href="https://github.com/Liaqat22" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
              {/* Facebook Icon with link */}
              <a href="https://wa.me/qr/FTMDCAW2J6XEP1" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>


      </Grid2>
    </Grid2>
    </Box>
  )
}

export default Footer