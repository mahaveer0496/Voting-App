import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  console.log('bar');
  return (
    <Bar
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
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
