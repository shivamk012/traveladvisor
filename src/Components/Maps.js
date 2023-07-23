import Map from 'react-map-gl';

const token = process.env.REACT_APP_Access_Token;

export default function App() {
  return (
    <div className="App">
       <Map
      mapboxAccessToken={token}
      initialViewState={{
        longitude: 75.86512,
        latitude: 22.71623,
        zoom: 10
      }}
      style={{width: "50vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    />
    </div>
  );
}

