import './SearchBar.css'
import { useEffect, useState } from 'react';
import { getPlaces } from './Services/Places';
import {extractRestaurant} from './Services/extractRestaurant';
import { extractAttraction } from './Services/extractAttractions';
import { getHotels } from './Services/Hotels';
import { extractHotel } from './Services/extractHotel';
import { useSelector } from 'react-redux';
import InputField from './InputField';

export default function SearchBar({stateChange , userNeed , checkIn , setLoading , setLocation , locations}) {
  const location = useSelector(state => state.location);
  const [searchTerm , setSearchTerm] = useState('');

  const filterUndefined = (arr) => {
    arr = arr.filter((el) => {return el !== undefined && el.imgLink !== undefined && el.imgLink.images !== undefined});
    return arr;
  }

  const useeffecthotel = async() => {
    setLoading(true);
    if(searchTerm !== "") {
      const result = {latitude : location.latitude , longitude : location.longitude};
      const userInterest = await getHotels(result , checkIn);
      stateChange({
        items : filterUndefined(extractHotel(userInterest)),
        changed : 'hotels'
      });
    }
    setLoading(false);
  }

  useEffect(() =>{ 
    useeffecthotel();
  } , [checkIn])

  const handleSubmit = async(e) => {
    // e.preventDefault();
    setLoading(true);
    if(searchTerm !== "") {
      const result = {latitude : location.latitude , longitude : location.longitude};
      if(userNeed === "restaurants" || userNeed === "attractions"){
        const userInterest = await getPlaces(result , userNeed);
        if(userNeed === "restaurants") {
          stateChange({
            items : filterUndefined(extractRestaurant(userInterest)),
            changed : 'restaurants'
          })} 
        else {
          const extractedAttraction = filterUndefined(extractAttraction(userInterest));
          stateChange({
            items : extractedAttraction,
            changed : 'attractions'
          });
        }
      }else{
        const userInterest = await getHotels(result , checkIn);
        stateChange({
          items : filterUndefined(extractHotel(userInterest)),
          changed : 'hotels'
        });
      }
    }
    setLoading(false);
    return false;
  }

  useEffect(() => {
    handleSubmit();
  },[userNeed]);

  useEffect(() => {
    handleSubmit();
  } , [searchTerm])

  return (
    <div>
      <InputField setLocation={setLocation} setSearchTerm={setSearchTerm}/>
    </div>
  )
}
