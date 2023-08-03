import { configureStore } from "@reduxjs/toolkit";
import locationReducer , { changeLocation } from "./reducers/locationReducer";
import dataReducer , {updateData , filterByRating , filterByDistance} from './reducers/dataSlice';

console.log(locationReducer);

const store = configureStore({
    reducer : {
        location : locationReducer,
        list : dataReducer
    }
});

export {store};
export {changeLocation , updateData , filterByDistance , filterByRating};    