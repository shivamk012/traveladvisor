import SearchBar from "./SearchBar"
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import Button from "./Button";
import Modal from "./Modal";
import "react-datepicker/dist/react-datepicker.css";

export default function Nav() {
  const [startDate, setStartDate] = useState(new Date());
  const [datePickerIsOpen , setDatePicker] = useState(false);
  const [showButton , setShowButton] = useState(false);
  const [dropValue , setDropValue] = useState('Restaurants');
  const [filter , setFilter] = useState("All");

  const dropDownItems = ['Restaurants' , 'Hotels' , 'Attractions'];
  const dropDownRating = ['All' , '< 4' , '< 3' , '< 2'];

  const openDatePicker = () => {
    setDatePicker(!datePickerIsOpen);
    setShowButton(false);
  }

  useEffect(() => {
    if(dropValue === "Hotels") setShowButton(true)
    else setShowButton(false);
  } , [dropValue])

  return (
      <div className="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-3 mx-5" style={{"width" : "15%"}}>
          {showButton && <Button classes="" onClick={openDatePicker} text="openDate"/>}
          {!showButton && dropValue === "Hotels" && <DatePicker
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
            <SearchBar/>
          </div>
          <div className="col-4" style={{"width" : "30%" , "textAlign" : "center"}}>
            <Modal dropDownRating={dropDownRating} filter={filter} setFilter={setFilter}/>
            <DropDown dropValue={dropValue} setDropValue={setDropValue} dropDownItems={dropDownItems}/>
          </div>
        </div>
      </div>
  )
}
