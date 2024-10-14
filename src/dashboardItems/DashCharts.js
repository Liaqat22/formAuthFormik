import React from 'react';
import { Box, Grid2, LinearProgress, Paper, Typography } from '@mui/material';
import ChartColumn from './ChartColumn';
import ChartLines from './ChartLines';



function DashCharts() {

    const activeUser = [
        { title: "Users", icon: "fa-solid fa-users", number: "32,984", progress: "", color: "#4CAF50" },
        { title: "Clicks", icon: "fa-solid fa-mouse-pointer", number: "2.42M", progress: "", color: "#FFC107" },
        { title: "Sales", icon: "fa-solid fa-dollar-sign", number: "2,400$", progress: "", color: "#F44336" },
        { title: "Items", icon: "fa-solid fa-box", number: "320", progress: "", color: "#2196F3" }
      ];
      

    // coumn chart

    return (
        <Box margin="1rem 0rem">
        <Grid2 spacing={2} container columns={{ xs: 4, sm: 8, md: 12 }} >
            {/* line chart */}
            <Grid2 size={{ xs: 12, sm: 12, md: 7 }} component={Paper} sx={{
                background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)", padding: "1rem", borderRadius: "2rem",
                display: "flex", flexDirection: "column", justifyContent: "space-evenly"
            }} >
                <Box>
                    <Typography fontWeight={700}>Sales Overview</Typography>
                    <Typography variant='body2' color='white'><span style={{ color: "lightgreen" }}>+5% more </span>in 2021</Typography>
                </Box>
                <ChartLines />
            </Grid2>

            {/* Column bar chart */}
            <Grid2 size={{ xs: 12, sm: 12, md: 5 }} component={Paper} sx={{
                background: "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
                padding: "1rem",
                borderRadius: "2rem",
                display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>

                <Box component={Paper} sx={{ background: "rgb(6 11 40)", padding: "1rem", borderRadius: "2rem", }}>
                    <ChartColumn />
                </Box>

                {/* Active users  */}
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }} marginTop={.5} paddingTop={1}>
                    <Box>
                        <Box>
                            <Typography fontWeight={700}>Active Users</Typography>
                            <Typography variant='body2' color='white'><span style={{ color: "lightgreen" }}>(+23)</span> than last week</Typography>
                        </Box>
                    </Box>

                    {/* Active users grid */}
                    <Box>
                        <Grid2 spacing={1} container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "1rem 0" }}>
                            {activeUser?.map((u) => (
                                <Grid2 size={{ xs: 2, sm: 4, md: 3, }} component={Paper} sx={{ background: "rgb(6 11 40)", borderRadius: "1rem", padding: ".7rem 0", textAlign: "center" }} >

                                    <Typography variant='body2' fontSize="small" className='m-1'> <span style={{
                                        padding: ".2rem .3rem",
                                        // background: "#0075ff",
                                        borderRadius: ".5rem",
                                    }}>
                                        <i className={`${u?.icon}`} style={{color:u?.color}}/></span> {u?.title} </Typography>

                                    <Typography fontSize="small" fontWeight={700}> {u?.number}</Typography>

                                    <Box p={1}>
                                        <LinearProgress variant="determinate" value={78}
                                            sx={{
                                                height: 5,
                                                borderRadius: 5,
                                                backgroundColor: '#e0e0e0',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#0075ff',
                                                }
                                            }} /> {/* Bar color */}

                                    </Box>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Box>
                </Box>

            </Grid2>
        </Grid2>
        </Box>
    );
}

export default DashCharts;
