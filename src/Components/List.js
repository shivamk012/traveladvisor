import { useEffect, useState } from "react"
import Listitems from "./Listitems";
import '../List.css';
export default function List({data , changeFilterData , isLoading}) {
  const [sliderValue , setsliderValue] = useState(5);

  const handleChange = (value) => {
    setsliderValue(value);
  }

  useEffect(() => {
    if(!("items" in data)) return;
    // console.log(parseFloat(sliderValue) , data.items);
    const arr = data.items.filter((el) => {return el !== undefined && el.distance !== undefined});
    const filteredData = arr.filter((el) => {return parseFloat(el.distance.slice(0,3)) <= parseFloat(sliderValue)});
    //console.log(filteredData);
    changeFilterData({items : filteredData , changed : data.changed});
  } , [sliderValue])

  

  return (
    <div className="px-4">
      <div className="px-2 mb-1" style={{"backgroundColor" : "#e9ecef" , "width" : "40%"}}>
        <div className="mb-1 d-flex justify-content-around">
          <label htmlFor="range-slider" className="form-label">Distance</label>
          <p>{sliderValue}km</p>
        </div>
        <input id="range-slider"type="range" className="form-range text-dark slider-input" style={{"height" : "0"}} min={1} max={5} defaultValue={sliderValue} step={1} onChange={(e) => handleChange(e.target.value)}/>
      </div>
      {"items" in data ? <div>{data.items.length} places sorted by traveler favorites. {data.items.length === 0 ? 'Sorry we dont have enough data currently' : ''}</div> : null}
      {isLoading ? <div className="spinner-border text-dark" role="status">
            </div> : <div className="list" >
        <Listitems data={data}/>
      </div>}
    </div>
  )
}
