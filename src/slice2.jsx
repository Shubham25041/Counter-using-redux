import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputValue : ""
}

const inputSlice = createSlice({
    name : "getInput",
    initialState,
    reducers : {
        updateValue : (state, action) => {
            state.inputValue = action.payload;
        }
    }
})

export const {updateValue} = inputSlice.actions;

export default inputSlice.reducer;
