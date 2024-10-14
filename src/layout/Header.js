import { Box, Breadcrumbs, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavRes from './NavRes'

function Header() {

    return (
        < >
            <Grid2 container spacing={2} columns={12} display="flex" justifyContent="space-between" alignItems="center" position="sticky" top=".5rem" sx={{
                padding: '1rem .5rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(2rem)',
                background: "#ffffff2e",
                zIndex: "2"
            }}>
                <Grid2 size={{ xs: 12, sm: 5, md: 5 }}  >
                    <Box>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white", mb: 1 }}>
                            <Typography variant='body2' fontSize="smaller" color='white' component={NavLink} to="/">
                                <i className='fa-solid fa-home' />
                            </Typography>
                            <Typography variant='body2' fontSize="smaller" color='white' fontWeight={700}>Profile</Typography>
                        </Breadcrumbs>
                        <Typography fontWeight={700}>Profile</Typography>
                    </Box>


                </Grid2>
                <Grid2 size={{ xs: 12, sm: 7, md: 5 }}  >

                    <Box display="flex" justifyContent="space-evenly" alignItems="center">
                        <TextField
                            label="Search"
                            variant="outlined"
                            size='small'
                            onChange={(e) => console.log(e.target.value)}
                            sx={{
                                borderColor: "red",
                                input: {
                                    color: "white"
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: ".5rem"
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'lightblue',
                                    },

                                },
                            }}
                        />
                        <Typography component={NavLink} to='/signin' sx={{ textDecoration: 'none', fontSize: ".8rem" }} className='mx-1'>
                            <i className='fa-solid fa-sign-in-alt mx-1' /> <span>SignIn</span></Typography>
                        <Typography><i className="fas fa-cog mx-1" /></Typography>
                        <Typography><i className="fas fa-bell mx-1" /></Typography>
                        <Box className="navRes-links mx-1"><NavRes /></Box>
                    </Box>
                </Grid2>
            </Grid2>


        </>
    )
}

export default Header