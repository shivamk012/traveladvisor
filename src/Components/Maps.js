import Map , {Marker , useMap} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { useEffect , useState} from 'react';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const token = process.env.REACT_APP_Access_Token;


export default function App({data , location}) {
  const locationData = ("items" in data ? data.items.filter(el => {return el != undefined}) : []); 
  let markers = [];
  const el = <div data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"></div>
  for(let i=0 ; i<locationData.length ; i++){
    markers.push(<Marker key={i} longitude={locationData[i].longitude} latitude={locationData[i].latitude} color="red" />);
  }




  return (
    <div>
       <Map
      mapboxAccessToken={token}
      style={{width: "50vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
     >{markers}</Map>
    </div>
  );
}

