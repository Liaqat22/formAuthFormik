import {  Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import ReactApexChart from 'react-apexcharts';

function CarInfoGrid() {
   // First chart
const series = [
    { data: [300, 600, 800, 300, 190] }
];

const options = {
    chart: {
        type: 'area',
        toolbar: {
            show: false // Ensures no toolbar is displayed
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Short-form months
        labels: {
            show: false
        },
        axisBorder: {
            show: false // Remove the bottom line
        },
        axisTicks: {
            show: false // Remove the ticks
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.2,
            stops: [0, 20]
        }
    },
    tooltip: {
        theme: 'dark'
    },
    colors: ['#0075FF'], // Color for the series
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        labels: {
            colors: '#FFFFFF' // White text for the legend
        }
    },
    grid: {
        borderColor: 'transparent'
    }
};

// Second chart
const series2 = [
    { data: [100, 70, 105, 120, 150] }
];

const options2 = {
    chart: {
        type: 'area',
        toolbar: {
            show: false // Ensures no toolbar is displayed
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Short-form months
        labels: {
            show: false
        },
        axisBorder: {
            show: false // Remove the bottom line
        },
        axisTicks: {
            show: false // Remove the ticks
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.2,
            stops: [0, 20]
        }
    },
    tooltip: {
        theme: 'dark'
    },
    colors: ['#01B574'], // Color for the series
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        labels: {
            colors: '#FFFFFF' // White text for the legend
        }
    },
    grid: {
        borderColor: 'transparent'
    }
};

    return (
        <>
            <Grid2 spacing={2} container columns={12} >
                <Grid2 size={{ xs: 12,sm:6, md: 6, xl: 5.8 }} component={Paper} sx={
                    {
                        padding: '1rem',
                        background: 'rgb(7 12 39)',
                        borderRadius: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                }>

                    <div className='text'>
                        <Typography variant='body2' fontSize=".7rem">Battery Health</Typography>
                        <Typography variant='body1' fontSize="large" fontWeight={700}>76%</Typography>
                    </div>
                    <div className='icon'style={{
                        padding: ".8rem",
                        background: 'rgb(0 117 255)',
                        borderRadius: '1rem'
                    }}>
                        <i className='fa-solid fa-battery-half ' style={{color:"white",fontSize:"1.2rem"}}/>
                    </div>

                </Grid2>

                <Grid2 size={{ xs: 12,sm:6, md: 6, xl: 5.8 }} component={Paper} sx={
                    {
                        padding: '1rem',
                        background: 'rgb(7 12 39)',
                        borderRadius: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <div className='text'>
                        <Typography variant='body2' fontSize=".7rem" whiteSpace="nowrap">Efficiency</Typography>
                        <Typography variant='body1' fontSize="large" fontWeight={700}>+20%</Typography>
                    </div>
                    <div className='apax-chart'>
                        <ReactApexChart options={options} series={series} type="area" height="75px" />

                    </div>
                </Grid2>

                {/* 3rd and 4th grid */}

                <Grid2 size={{ xs: 12,sm:6, md: 6, xl: 5.8 }} component={Paper} sx={
                    {
                        padding: '1rem',
                        background: 'rgb(7 12 39)',
                        borderRadius: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                }>

                    <div className='text'>
                        <Typography variant='body2' fontSize=".7rem">Consumption</Typography>
                        <Typography variant='body1' fontSize="large" fontWeight={700}>163W/km</Typography>
                    </div>
                    <div className='icon' style={{
                        padding: ".8rem",
                        background: 'rgb(0 117 255)',
                        borderRadius: '1rem'
                    }}>
                        <i className='fa-solid fa-chart-pie' style={{color:"white",fontSize:"1.2rem"}}/>
                    </div>

                </Grid2>

                <Grid2 size={{ xs: 12,sm:6, md: 6, xl: 5.8 }} component={Paper} sx={
                    {
                        padding: '1rem',
                        background: 'rgb(7 12 39)',
                        borderRadius: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <div className='text'>
                        <Typography variant='body2' fontSize=".7rem" whiteSpace="nowrap">This Week</Typography>
                        <Typography variant='body1' fontSize="large" fontWeight={700}>1.342km</Typography>
                    </div>
                    <div className='apax-chart'>
                        <ReactApexChart options={options2} series={series2} type="area" height="75px" />

                    </div>
                </Grid2>

            </Grid2>
        </>
    )
}

export default CarInfoGrid