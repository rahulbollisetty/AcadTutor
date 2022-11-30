import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showHide : false,
}

export const showLoginSlice = createSlice({
    name:"showLogin",
    initialState,
    reducers:{
        showHide:(state,action)=>{
            console.log(action)
            state.showHide = action.payload
        }
    }
})

export const {showHide} = showLoginSlice.actions;
export default showLoginSlice.reducer

