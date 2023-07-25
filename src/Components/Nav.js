import SearchBar from "./SearchBar"
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Button from "./Button";
import Modal from "./Modal";
import "react-datepicker/dist/react-datepicker.css";

export default function Nav({stateChange , data , changeFilterData , setLoading , setLocation}) {
  const [startDate, setStartDate] = useState(new Date());
  const [datePickerIsOpen , setDatePicker] = useState(false);
  const [showButton , setShowButton] = useState(false);
  const [dropValue , setDropValue] = useState('restaurants');
  const [filter , setFilter] = useState("All");

  const dropDownItems = ['restaurants' , 'hotels' , 'attractions'];
  const dropDownRating = ['All' , '> 4' , '> 3' , '> 2'];

  const openDatePicker = () => {
    setDatePicker(!datePickerIsOpen);
    setShowButton(false);
  }

  useEffect(() => {
    if(dropValue === "hotels") setShowButton(true)
    else setShowButton(false);
  } , [dropValue])

  useEffect(() => {
    if(filter === 'All'){
      if(!("items" in data)) return;
      const filteredData = data.items.filter((el) => {return el !== undefined});
      changeFilterData({items : filteredData , changed : data.changed});
    }else if(filter === '> 4'){
      const filteredData = data.items.filter((el) => {return el !== undefined && Number(el.rating) >= 4});
      changeFilterData({items : filteredData , changed : data.changed});
    }else if(filter === '> 3'){
      const filteredData = data.items.filter((el) => {return el !== undefined && Number(el.rating) >= 3});
      changeFilterData({items : filteredData , changed : data.changed});
    }else{
      const filteredData = data.items.filter((el) => {return el !== undefined && Number(el.rating) >= 2});
      changeFilterData({items : filteredData , changed : data.changed});
    }
  } , [filter])

  return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-3 mx-5" style={{"width" : "15%"}}>
          {showButton && <Button classes="" onClick={openDatePicker} text="openDate"/>}
          {!showButton && dropValue === "hotels" && <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            onClickOutside={() => {setDatePicker(false)}}
            open={datePickerIsOpen}
            onSelect={() => setDatePicker(false)}
            onInputClick={() => setDatePicker(true)}
            minDate={new Date()}
          />}
          </div>
          <div className="col-5">
            <SearchBar setLocation = {setLocation} stateChange = {stateChange} userNeed = {dropValue} checkIn = {startDate} setLoading={setLoading}/>
          </div>
          <div className="col-4" style={{"width" : "30%" , "textAlign" : "center"}}>
            <Modal dropDownRating={dropDownRating} filter={filter} setFilter={setFilter}/>
            <DropDown dropValue={dropValue} setDropValue={setDropValue} dropDownItems={dropDownItems}/>
          </div>
        </div>
      </div>
  )
}
