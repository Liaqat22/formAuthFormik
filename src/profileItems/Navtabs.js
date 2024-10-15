import React from 'react';
import BoxMrgPdgBgBrPaper from '../components/BoxMrgPdgBgBrPaper';
import { Box, Grid2, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logoTop from "../imgs/logo-top.png"

function Navtabs() {


  return (
    <>
      <BoxMrgPdgBgBrPaper>
        <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} display="flex" justifyContent="space-around" alignItems="center" >
          <Grid2 size={{ xs: 12, sm: 8, md: 4, }} >

            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <Box component='img' src={logoTop} alt='dashboard-logo' sx={{ height: "70px", width: "70px" }} />
              <Box className = "mx-2">
                <Typography variant="h6" fontWeight={700}> Liaqat Ali </Typography>
                <Typography variant="body2">liaqatali097306@gmail.com</Typography>
              </Box>
            </Box>

          </Grid2>

          <Grid2 size={{ xs: 12, sm: 8, md: 6, }} >

            <div className='profile-tabs d-flex justify-content-between align-items-center'>
              <NavLink className="profile-tab mt-3 text-center" to="/profile" end><i className='fa-solid fa-chart-bar mx-1' />Overview</NavLink>
              <NavLink className="profile-tab mt-3 text-center" to="/profile/team" ><i className='fa-solid fa-user-friends mx-1' />Team</NavLink>
              <NavLink className="profile-tab mt-3 text-center" to="/profile/projects"><i className='fa-solid fa-project-diagram  mx-1' /> Projects</NavLink>
            </div>
          </Grid2>

        </Grid2>
      </BoxMrgPdgBgBrPaper>
    </>
  );
}

export default Navtabs;
