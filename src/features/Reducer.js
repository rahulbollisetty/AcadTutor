import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showhide : false,
}

export const showLoginSlice = createSlice({
    name:"showLogin",
    initialState,
    reducers:{
        showHide:(state)=>{
            console.log(state)
        }
    }
})
