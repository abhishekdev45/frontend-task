import React from 'react';
import Chart from 'chart.js/auto'; 
import { Line } from 'react-chartjs-2'; 
import { registerables } from 'chart.js'; 
import { useQuery } from 'react-query'; 

// Define LineGraph component
const LineGraph: React.FC = () => {
  // Fetch data using useQuery hook
  const { data: graphData, isLoading, isError } = useQuery('graphData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all'); // Fetch data from API
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Throw error if response is not ok
    }
    const data = await response.json(); 
    return data.cases; 
  });

  // Return loading message if data is loading
  if (isLoading) return <div className="text-center">Loading...</div>;
  // Return error message if there's an error fetching data
  if (isError) return <div className="text-center">Error fetching data</div>;

  // Extract graph labels and values from fetched data
  const graphLabels = Object.keys(graphData);
  const graphValues = Object.values(graphData);

  // Define data object for Line chart
  const data = {
    labels: graphLabels, // Graph labels
    datasets: [
      {
        label: 'Cases Fluctuations', // Dataset label
        data: graphValues, // Dataset values
        fill: false, // Do not fill area under the line
        borderColor: 'rgb(75, 192, 192)', // Line color
        tension: 0.1, // Line tension
      },
    ],
  };

  // Register chart.js plugins
  Chart.register(...registerables);

  // Render LineGraph component
  return (
    <div className="mt-6 mx-auto w-full max-w-xl relative">
      <h2 className="text-center text-xl font-semibold mb-4">Line Graph</h2>
      <div className="h-[300px] w-full rounded-10 shadow-md">
        <div className="overflow-x-auto w-full h-[300px]">
          {/* Render Line chart */}
          <Line
            data={data} 
            height={'null'} 
            width={'null'} 
            options={{ 
              maintainAspectRatio: false, 
              responsive: true 
            }}
            style={{ width: '100%', maxHeight: '300px' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default LineGraph; 
