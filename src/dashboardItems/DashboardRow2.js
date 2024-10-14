import { Box, Button, Grid2, Paper, Typography } from '@mui/material'
import { Gauge, gaugeClasses } from '@mui/x-charts'
import React from 'react'
import img from '../imgs/jellyfish.png'

function DashboardRow2() {
  const style = {
    background: "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
    padding: "2rem .6rem",
    borderRadius: "1rem",
    marginBottom: ".5rem",
    textAlign: "center"
  }
  const grid2And3 = {
    padding: "1rem",
    borderRadius: "2rem",
    background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "315px"
  }
  return (
    <Box margin="1rem 0rem" >
      {/* ============== grid - 1  */}
      <Grid2 spacing={2} container columns={{ xs: 4, sm: 8, md: 12 }} display="flex" alignItems="center">
        {/*intro*/}
        <Grid2 size={{ xs: 12, sm: 12, md: 5, }} >
          <Paper sx={{
            // backgroundImage: `url("https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/cardimgfree.5771cbbb.png")`,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',  // Ensures the image covers the entire area
            backgroundPosition: 'center',
            padding: "1rem",
            borderRadius: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "315px"
          }}>

            <Box padding=".6rem">
              <Typography variant='body2'>Welcome back,</Typography>
              <Typography variant='h4' fontWeight={900}>Liaqat Ali</Typography> <br />
              <Typography>Glad to see you again!</Typography>
              <Typography>Ask me anything.</Typography>
            </Box>

            <Box>  <Button variant="text" sx={{ color: "white", textTransform: "unset" }}>Tap to record <i className='fa-solid fa-arrow-right mx-2' />
            </Button></Box>
          </Paper>
        </Grid2>

        {/* ============== grid - 2  */}
        <Grid2 size={{ xs: 12, sm: 12, md: 3, }} >
          <Box sx={grid2And3}>
            <Box  >
              <Typography variant='h6' fontWeight={700}>Satisfaction Rate</Typography>
              <Typography variant='body2'>From all projects</Typography>
            </Box>
            <Box >
             
              <Gauge
                value={75}
                height={200}
                cornerRadius="50%"
                innerRadius="80%"
                outerRadius="97%"
                text={""}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 30,

                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: 'rgb(16 78 169)',
                  },
                  // [`& .${gaugeClasses.referenceArc}`]: {
                  //   fill: "red",
                  // },
                  position: "relative",
                  top: "2rem"
                }}
              />
             
             

              <div className='circle-progress-outer d-flex justify-content-evenly'>
                <Typography variant='body2'>0%</Typography>
                <div className='text-center'>
                  <Typography variant='h5'>95%</Typography>
                  <Typography variant='body2'>based on likes</Typography>
                </div>
                <Typography variant='body2'>100%</Typography>
              </div>

            </Box>
          </Box>
        </Grid2>

        {/* ============== grid - 3  */}

        <Grid2 size={{ xs: 12, sm: 12, md: 4, }} >
          <Box sx={grid2And3}>

            <Box display="flex" justifyContent="space-between" alignItems="center" padding="0 1rem">
              <Typography variant='h6' fontWeight={700}>Referral Tracking</Typography>
              <Typography ><i className='fa-solid fa-bars' /></Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Box sx={style}>
                  <Typography variant='body2'>Invited</Typography>
                  <Typography variant='body1' fontWeight={700}>145 people</Typography>
                </Box>

                <Box sx={style}>
                  <Typography variant='body2'>Bonus</Typography>
                  <Typography variant='body1' fontWeight={700}>1,465</Typography>
                </Box>
              </Box>

              <Box position="relative">

                <Gauge width={170} height={170} value={50} valueMin={10} valueMax={60} text={""}
                  cornerRadius="50%"
                  innerRadius="80%"
                  outerRadius="97%"
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: { fontSize: 15, color: "red" },
                    [`& .${gaugeClasses.valueArc}`]: { fill: 'rgb(5 203 152)', },
                  }} />
                    
                    <Box  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                  <Typography variant='body2'>Saftey</Typography>
                  <Typography variant='h6' fontWeight={700}>9.3</Typography>
                  <Typography variant='body2'>Total score</Typography>
                </Box>
              </Box>
            </Box>


          </Box>

        </Grid2>

      </Grid2>
    </Box>
  )
}

export default DashboardRow2