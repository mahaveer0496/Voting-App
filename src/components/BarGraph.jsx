import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = ({ labels, data }) =>
  // console.log('bar');
  (
    <Bar
      data={{
        labels,
        datasets: [{
          label: '# of Votes',
          data,
        }],
      }}
      width={500}
      height={300}
      options={{
        responsive: true,
        tooltips: { mode: 'label' },
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          }],
        },
      }}
    />
  );

export default BarGraph;
