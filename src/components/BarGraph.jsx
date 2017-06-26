import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  console.log('bar');
  return (
    <Bar
      width={Number(`${100}%`)}
      height={300}
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'boob', 'shoob', 'noob', 'loob', 'toob', 'lodwjao'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 12, 25, 176, 23, 12],
          backgroundColor: [
            'red', 'green', 'yellow', 'blue', 'red', 'green', 'yellow', 'blue', 'red', 'green', 'yellow', 'blue', 'red', 'green', 'yellow', 'blue',
          ],
        }],
      }}
    />
  );
};

export default BarGraph;
