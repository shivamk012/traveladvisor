import { useEffect, useState } from "react"
import Listitems from "./Listitems";

export default function List({data , changeFilterData}) {
  const [sliderValue , setsliderValue] = useState(5);

  const handleChange = (value) => {
    setsliderValue(value);
  }

  useEffect(() => {
    if(!("items" in data)) return;
    const filteredData = data.items.filter((el) => {return el !== undefined && Number(el.distance.slice(0,3)) <= sliderValue});
    console.log(data);
    changeFilterData({items : filteredData , changed : data.changed});
  } , [sliderValue])

  

  return (
    <div className="px-4">
      <div className="px-2 mb-1" style={{"backgroundColor" : "#e9ecef" , "width" : "40%"}}>
        <div className="mb-1 d-flex justify-content-around">
          <label htmlFor="range-slider" className="form-label">Distance</label>
          <p>{sliderValue}km</p>
        </div>
        <input id="range-slider"type="range" className="form-range text-dark" style={{"height" : "0"}} min={1} max={5} defaultValue={sliderValue} step={1} onChange={(e) => handleChange(e.target.value)}/>
      </div>
      <div className="overflow-scroll" style={{"maxHeight" : "100vh"}}>
        <Listitems data={data}/>
      </div>
    </div>
  )
}
