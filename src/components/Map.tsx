import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import necessary components from react-leaflet
import { useQuery } from 'react-query'; 
import { icon } from 'leaflet'; 

// Define Map component
const Map = () => {
  // Fetch data using useQuery hook
  const { data: countriesData, isLoading, isError } = useQuery('countriesData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries'); // Fetch data from API
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Throw error if response is not ok
    }
    return response.json(); 
  });

  // Define icon function to create custom marker icons
  const flagIcon = (url: string) =>
    icon({
      iconUrl: url,
      iconSize: [12, 12],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

  // Return loading message if data is loading
  if (isLoading) return <div className="text-center">Loading...</div>;
  // Return error message if there's an error fetching data
  if (isError) return <div className="text-center">Error fetching data</div>;

  // Render Map component
  return (
    <div className="mt-6 mx-auto w-full max-w-xl relative" style={{ zIndex: 10 }}>
      <h2 className="text-center text-xl font-semibold mb-4">Map</h2>
      <div className="shadow-md">
        {/* Render MapContainer */}
        <MapContainer
          center={[30, 45]} // Set initial center coordinates
          zoom={2} // Set initial zoom level
          style={{ // Apply inline style for MapContainer
            height: '300px', 
            width: '100%', 
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          }}
        >
          {/* Render TileLayer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Set attribution
          />
          {/* Iterate through countriesData to render Markers */}
          {countriesData.map((country: any) => (
            <Marker
              key={country.country} // Set unique key for each Marker
              position={[country.countryInfo.lat, country.countryInfo.long]} // Set position using country's latitude and longitude
              icon={flagIcon(country.countryInfo.flag)} // Set custom icon for Marker
            >
              {/* Render Popup for each Marker */}
              <Popup>
                <div>
                  <h3>{country.country}</h3> 
                  <p>Cases: {country.cases}</p> 
                  <p>Active: {country.active}</p> 
                  <p>Recovered: {country.recovered}</p> 
                  <p>Deaths: {country.deaths}</p> 
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map; 
