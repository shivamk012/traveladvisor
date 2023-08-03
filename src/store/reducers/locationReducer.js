import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name : 'location',
    initialState : {latitude : '' , longitude : ''},
    reducers : {
        changeLocation(state,action){
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    }
})

console.log(locationSlice);

export default locationSlice.reducer;
export const {changeLocation} = locationSlice.actions;