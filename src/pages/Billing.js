import React from 'react'
import SidebarLinks from './SidebarLinks'
import { Grid2 } from '@mui/material'
import Layout from '../layout/Layout'
import PaymentDetails from '../billingItems/PaymentDetails'
import BillingInfo from '../billingItems/BillingInfo'


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
             <PaymentDetails/>
             <BillingInfo/>
            </Layout>
            
          </Grid2>
        </Grid2>
      </div>

    </>
  )
}

export default Billing