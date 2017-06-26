import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = ({ labels, data }) => {
  // console.log('bar');
  return (
    <Bar
      data={{
        labels,
        datasets: [{
          label: '# of Votes',
          data,
        }],
      }}
      width={Number(`${100}%`)}
      height={300}
      options={{
        responsive: true,
        tooltips: { mode: 'label' },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            gridLines: {
              display: false,
            },
          }],
        },
      }}
    />
  );
};

export default BarGraph;
