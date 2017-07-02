import React from 'react';
import { Bar } from 'react-chartjs-2';

const generateColors = (length) => {
  const colorArr = [];
  const color = '01bcdaf284e';
  const arr = color.split('');
  for (let i = 0; i < length; i++) {
    const colorString = [];
    for (let j = 0; j < 6; j++) {
      colorString.push(arr[parseInt((Math.random() * 6), 10)]);
    }
    colorArr.push(`#${colorString.join('')}`);
  }
  return colorArr;
};


const BarGraph = ({ labels, data }) => {
  const dataObj = {
    labels,
    datasets: [{
      label: '# of Votes',
      data,
      backgroundColor: 'rgb(40, 216, 178)',
    }],
  };
  return (
    <Bar
      data={dataObj}
      width={100}
      height={50}
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
};


export default BarGraph;

// data={{
//         labels,
//         datasets: [{
//           label: '# of Votes',
//           data,
//           backgroundColor: ['rgba(75,192,192,1)', 'blue'],
//           borderColor: ['rgba(75,192,192,1)', 'blue'],
//         }],
//       }}

