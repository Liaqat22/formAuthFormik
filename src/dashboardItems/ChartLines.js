import React from 'react'
import ReactApexChart from 'react-apexcharts';

function ChartLines() {
    const series = [
        {
            name: "Previous Year",
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 7000, 6602, 2080, 1320, 8900]
        },
        {
            name: "Current Year",
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1190, 0, 3303, 1206, 4030]
        }
    ];
    const options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false  // Ensures no toolbar is displayed
              },
             
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  // Short-form months
            labels: {
                style: {
                  colors: '#FFFFFF',  // Change x-axis label color
                  fontSize: '10px',
                },
              },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '10px',
                  colors: '#FFFFFF',  // Change x-axis label color
                },
              },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 9,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            theme: 'dark',
        },
        
        colors: ['#2cd9ff', '#014ee0'], // Colors for each series
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#FFFFFF',  // Pink text for legend
              },
        },
      
        grid: {
            borderColor: '#f1f1f1'
        }
        
    };
  return (
<>
<ReactApexChart options={options} series={series} type="area"  />
</>
  )
}

export default ChartLines