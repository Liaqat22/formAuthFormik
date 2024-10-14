import React, { useState } from 'react'
import Chart from 'react-apexcharts';

function ChartColumn() {
    const [chartData] = useState({
        series: [
          {
            name: 'Series 1',
            data: [44, 55, 41, 64, 22, 43, 21] // Data for each column
          }
        ],
        options: {
          chart: {
            type: 'bar', // Type of chart
            toolbar: {
              show: false  // Ensures no toolbar is displayed
            },
          },
          plotOptions: {
            bar: {
              horizontal: false, // Makes it a column chart instead of a horizontal bar chart
              columnWidth: '55%', // Width of columns
              endingShape: 'rounded' // Shape of the bar's end
            }
          },
          dataLabels: {
            enabled: false // Disable data labels on the bars
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Categories (x-axis labels)
            labels: {
                style: {
                    fontSize: '10px',
                  colors: '#FFFFFF',  // Change x-axis label color
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
            opacity: 1
          },
          tooltip: {
            theme:"dark",

            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"; // Custom tooltip formatting
              }
            }
          }
        }
      });
  return (
<>
<Chart  options={chartData.options} series={chartData.series}      type="bar"/> 
</> 
 )
}

export default ChartColumn