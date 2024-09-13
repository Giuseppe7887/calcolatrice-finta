import { createSlice } from "@reduxjs/toolkit";

export const listaAsync =createSlice({
    name:"listaAsync",
    initialState:{value:[]},
    reducers:{
        update: (state,action)=>{
            state.value = action.payload
        }
    }
});

export const {update} = listaAsync.actions;
export default listaAsync.reducer;