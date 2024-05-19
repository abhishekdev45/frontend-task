import React from 'react';
import LineGraph from '../components/LineGraph'; // Import LineGraph component
import Map from '../components/Map'; // Import Map component

// Define ChartsMapsPage component
const ChartsMapsPage = () => {
  return (
    <div className="container mx-auto p-6"> 
      <h1 className="text-3xl font-semibold text-center mb-8">Charts and Maps</h1> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <LineGraph /> {/* Render LineGraph component */}
        <Map /> {/* Render Map component */}
      </div>
    </div>
  );
};

export default ChartsMapsPage;
