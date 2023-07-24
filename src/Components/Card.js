import './Card.css'
import { renderRestaurant } from './Services/renderRestaurant';
import { renderAttractions } from './Services/renderAttractions';
import { renderHotels } from './Services/renderHotels';

export default function Card({data}) {
  let renderItems = [];
  let items = data.items;
  let changed = data.changed;
  if(changed === "restaurants"){
      renderItems = renderRestaurant(items);
  }else if(changed === "attractions"){
    renderItems = renderAttractions(items);
  }else if(changed === "hotels"){
    renderItems = renderHotels(items);
  }

  return (
    <div>{renderItems}</div>
  )
}
