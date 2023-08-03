import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : {data : [] , filteredData : []},
    reducers : {
        updateData(state , action){
            state.data = action.payload
        },
        filterByRating(state , action){
            //TODO
        },
        filterByDistance(state,action){
            //TODO
        }
    }
})

export default dataSlice.reducer;
export const {updateData , filterByDistance , filterByRating} = dataSlice.actions;