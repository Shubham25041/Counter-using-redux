import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice1";
import getInputReducer from "./slice2";

const Store = configureStore({
    reducer: {
        counter : counterReducer,
        getInput : getInputReducer,
    }
});

export default Store;
