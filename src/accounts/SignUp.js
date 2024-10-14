import React from 'react'
import SidebarLinks from '../pages/SidebarLinks'
import { Grid2, Typography } from '@mui/material'
import Layout from '../layout/Layout'

function SignUp() {
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
                            <Typography>SignUp</Typography>
                        </Layout>
                        
                    </Grid2>
                </Grid2>
            </div>

        </>
    )
}

export default SignUp