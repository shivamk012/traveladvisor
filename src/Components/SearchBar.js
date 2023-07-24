import './SearchBar.css'
import {ImSearch} from 'react-icons/im';
import { getLocation } from './Services/Location';
import { useEffect, useState } from 'react';
import { getPlaces } from './Services/Places';
import {extractRestaurant} from './Services/extractRestaurant';
import { extractAttraction } from './Services/extractAttractions';
import { getHotels } from './Services/Hotels';
import { extractHotel } from './Services/extractHotel';

export default function SearchBar({stateChange , userNeed , checkIn}) {
  console.log(userNeed);
  const [searchTerm , setSearchTerm] = useState('');
  const [isLoading , setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleSubmit = async() => {
    setLoading(true);
    if(searchTerm != "") {
      const result = await getLocation(searchTerm);
      if(userNeed === "restaurants" || userNeed === "attractions"){
        const userInterest = await getPlaces(result , userNeed);
        if(userNeed === "restaurants") {
          stateChange({
            items : extractRestaurant(userInterest),
            changed : 'restaurants'
          })} 
        else {
          const extractedAttraction = extractAttraction(userInterest);
          stateChange({
            items : extractedAttraction,
            changed : 'attractions'
          });
        }
      }else{
        const userInterest = await getHotels(result , checkIn);
        stateChange({
          items : extractHotel(userInterest),
          changed : 'hotels'
        });
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    handleSubmit();
  },[userNeed]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className="icon-btn" type="submit"><ImSearch/></button>   
        <input type="search" placeholder="Where to?" value={searchTerm} onChange={(e) => handleChange(e)} />
        {/* <button>Press Enter</button> */}
      </form>
    </div>
  )
}
