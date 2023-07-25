import Map , {Marker} from 'react-map-gl';

const token = process.env.REACT_APP_Access_Token;

export default function App({data}) {
  const locationData = ("items" in data ? data.items.filter(el => {return el != undefined}) : []); 
  let markers = [];
  const el = <div data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"></div>
  for(let i=0 ; i<locationData.length ; i++){
    markers.push(<div onClick={() => console.log("hello")}><Marker key={i} longitude={locationData[i].longitude} latitude={locationData[i].latitude} color="red" /></div>);
  }

  return (
    <div>
       <Map
      mapboxAccessToken={token}
      initialViewState={{
        longitude: 75.86512,
        latitude: 22.71623,
        zoom: 10
      }}
      style={{width: "50vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
     >{markers}</Map>
    </div>
  );
}

