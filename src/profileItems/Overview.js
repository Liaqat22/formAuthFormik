import React from 'react'
import Navtabs from './Navtabs'
import { Box, Button, Grid2, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import Chart from 'react-apexcharts';
import CarInfoGrid from './CarInfoGrid';
import ProfileSettings from './ProfileSettings';


function Overview() {
  const chartOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          show: false, // Hide labels
        },
        track: {
          show: false, // Hide the track (background ring)
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.5, // Shadow effect
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#00FFCB', '#FDD835', '#FF5733'], // Multiple gradient colors
        stops: [0, 50, 100], // Stops at different percentages
      },
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],

    colors: ['rgb(5, 193, 145)'], // Primary color (RGB format)
  };

  const chartSeries = [75]; // Percentage value

  const profileInfo = [
    { value: "Liaqat Ali", property: "Name" },
    { value: "(92)3211961948", property: "Mobile" },
    { value: "liaqatali097306@gmail.com", property: "email" },
    { value: "Pakistan", property: "location" },

  ]
  return (
    <>
      <Navtabs />
      <Grid2 container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }} >
        {/* WELCOME */}
        <Grid2 size={{ xs: 12, sm: 12, md: 3.5 }} component={Paper} sx={{
          backgroundImage: "url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/welcome-profile.309ed05e.png )",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", padding: "1rem",
          borderRadius: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight:"430px"
        }}>

          <Box padding=".6rem">
            <Typography variant='h5' fontWeight={900}>Welcome back!</Typography>
            <Typography variant='body2' color='white'> Nice to see you, Liaqat Ali!</Typography>
          </Box>

          <Box>
            <Button variant="text" sx={{ color: "white", textTransform: "unset" }}>Tap to record <i className='fa-solid fa-arrow-right mx-2' />
            </Button>
          </Box>
        </Grid2>




        {/* CAR INFO */}
        <Grid2 size={{ xs: 12, sm: 12, md: 5 }} component={Paper} sx={{
          background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
          padding: "1rem",
          borderRadius: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight:"430px"

        }}>
          <Box >
            <Box padding=".6rem">
              <Typography gutterBottom variant='body1' fontWeight="700" >Car information</Typography>
              <Typography variant='body2'> Hello, Mark Johnson! Your Car is ready.  </Typography>
            </Box>

            <div style={{ position: 'relative' }}>
              <Chart options={chartOptions} series={chartSeries} type="radialBar" height={200} />

              {/* Overlay Content */}
              <div className='apax-circle-progress' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <Typography variant='h6' color='rgb(9, 173, 143)' gutterBottom>
                  <i className='fas fa-bolt' />
                </Typography>
                <Typography variant='h5' fontWeight={600}>75%</Typography>
                <Typography variant='body2'fontSize="smaller">Current Load</Typography>
              </div>

            </div>
            <Box textAlign="center">
              <Typography variant='body1' fontWeight={700} >0h 58 min</Typography>
              <Typography variant='body2'>Time to full charge</Typography>
            </Box>
            
            <Box mt={2}>
  <CarInfoGrid/>
</Box>
          </Box>

        </Grid2>

        {/* PROFILE INFO */}
        <Grid2 size={{ xs: 12, sm: 12, md: 3.5 }} component={Paper} sx={{
          background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
          padding: "1rem",
          borderRadius: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minHeight:"430px"
        }}>

          <Box mb={2} >
            <Typography gutterBottom variant='body1' fontWeight="700" padding=".6rem">profile information</Typography>
            <Typography variant='body2'>
              Hi, I’m Liaqat ALi, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
            </Typography>
          </Box>

          <Box>
    <List>
        {profileInfo.map((info, i) => (
            <ListItem key={i}>
                <ListItemText 
                    primary={
                        <Typography variant='body2'>
                            {info?.property}: 
                            <span className='text-white mx-1'> {info?.value}</span>
                        </Typography>
                    } 
                />
            </ListItem>
        ))}
    </List>
            {/* SOCIAL */}
            <Typography variant="h6" display="flex" justifyContent="space-around" alignItems="center" sx={{
              borderRadius: "2rem",
              padding: ".5rem",
              background: "linear-gradient(177deg, rgb(2 2 6 / 73%) 19.41%, rgb(14 20 50) 76.65%);", mt: 2,
              fontSize:"1.5rem"
            }}>

              {/* Email Icon with mailto link */}
              <a href="https://liaqatali097306@gmail.com/"> <i className="fas fa-envelope " /> </a>


              {/* LinkedIn Icon with link */}
              <a href="https://www.linkedin.com/in/liaqat-ali-bb086522a/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin " /></a>

              {/* Facebook Icon with link */}
              <a href="https://github.com/Liaqat22" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a>
              {/* Facebook Icon with link */}
              <a href="https://wa.me/qr/FTMDCAW2J6XEP1" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>


            </Typography>
          </Box>
        </Grid2>
      </Grid2>
      <ProfileSettings/>
    </>
  )
}

export default Overview