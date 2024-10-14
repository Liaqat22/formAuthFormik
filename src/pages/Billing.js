import React from 'react'
import SidebarLinks from './SidebarLinks'
import { Grid2, Typography } from '@mui/material'
import Layout from '../layout/Layout'


function Billing() {
  return (
    <>
      <div className='parent-grid'>
        <Grid2 container spacing={2} sx={{
          display: "flex", justifyContent: "space-evenly"
        }} >
          <Grid2 size={{ xs: 12, sm: 12, md: 2, }} className="sidebarlinks-grid">

            <SidebarLinks />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 10, }} className="content-grid">

            <Layout>
              <Typography>Billing</Typography>
            </Layout>
            
          </Grid2>
        </Grid2>
      </div>

    </>
  )
}

export default Billing