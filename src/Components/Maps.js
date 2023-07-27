import Map , {Marker  } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { useEffect ,  createRef} from 'react';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const token = process.env.REACT_APP_Access_Token;


export default function App({data , location}) {
  const locationData = ("items" in data ? data.items.filter(el => {return el !== undefined}) : []); 
  let markers = [];
  for(let i=0 ; i<locationData.length ; i++){
    markers.push(<Marker key={i} longitude={locationData[i].longitude} latitude={locationData[i].latitude} color="green" />);
  }

  let mapRef = createRef();

  useEffect(() => {
    mapRef.current?.flyTo({center: [location.longitude, location.latitude], duration: 2000 , zoom : 10});
  }, [location]);


  return (
    <div>
       <Map
          mapboxAccessToken={token}
          style={{width: "50vw", height: "100vh"}}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          ref={mapRef}
       >{markers}</Map>
    </div>
  );
}

