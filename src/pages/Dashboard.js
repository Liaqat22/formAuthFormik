import React from 'react'
import SidebarLinks from './SidebarLinks'
import Dashboardrow1 from '../dashboardItems/Dashboardrow1'
import DashboardRow2 from '../dashboardItems/DashboardRow2'
import DashCharts from '../dashboardItems/DashCharts'
import TableList from '../dashboardItems/TableList'
import { Grid2 } from '@mui/material'
import Layout from '../layout/Layout'

function Dashboard() {

  return (
    <>
      <div className='parent-grid'>
        <Grid2 container spacing={2} sx={{
          display: "flex", justifyContent: "space-evenly"
        }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid2 size={{ xs: 12, sm: 12, md: 2, }} className="sidebarlinks-grid">

            <SidebarLinks />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 12, md: 10, }} className="content-grid">

            <Layout>
              <Dashboardrow1 />
              <DashboardRow2 />
              <DashCharts />
              <TableList />
            </Layout>

          </Grid2>
        </Grid2>
      </div>
    </>
  )
}

export default Dashboard