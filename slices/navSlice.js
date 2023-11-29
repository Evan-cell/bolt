import { createSlice } from "@reduxjs/toolkit";
const initial = {
    origin:null,
    destination:null,
    travelTimeInformation:null,
}
export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer: {
        setOrigin:(state,action) => {
            state.origin = action.payload;
        },
        setDestination:(state,action)=>{
            state.destination = action.payload;
        },
        setTravelInformation:(state,action)=>{
            state.travelTimeInformation = action.payload;
        },
    }
})
export const {setOrigin,setDestination,setTravelInformation} = navSlice.actions
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.Destination;
export const selectTravelInformation = (state) => state.nav.TravelInformation;

export default navSlice.reducer