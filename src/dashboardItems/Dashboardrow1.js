import React from 'react'
import { Box, Grid2, Typography } from '@mui/material';


function Dashboardrow1() {
    const col = [
        { text1: "today's money",text2 : "$53,000 ",  icon: 'fa-solid fa-user', res : "+55%"},
        { text1: "today's users", text2 : "2,300 ", icon: 'fa-solid fa-sign-in-alt', res :"+3%"},
        { text1: "new clients ", text2 : "+3,462 ", icon: 'fa-solid fa-user-plus',  res : "-2%"},
        { text1: "total sales ", text2 : "$103,430 ", icon: 'fa-solid fa-user-plus', res : "+5%"},
      ];
  return (
    <Box margin="1rem 0rem">
       <Grid2 container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }} display="flex" justifyContent="center">
    {col?.map((item, i) => (
      <Grid2 size ={{ xs: 12, sm: 4, md: 3 ,}}  key={i} sx={{ borderRadius:"1rem" , background:"linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
    }}>
        <div className="db-col-main d-flex justify-content-between align-items-center" >
          <div className="col-text">
            <Typography variant="body2">{item?.text1}</Typography>
            <Typography variant="h6">
              <b>{item?.text2}</b>
              <span style={{ fontSize: "small" }}>{item?.res}</span>
            </Typography>
          </div>
          <div className="col-icon">
            <i className={item?.icon} />
          </div>
        </div>
      </Grid2>
    ))}
  </Grid2>
    </Box>
  )
}

export default Dashboardrow1