import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";
import generalReducer from "./generalSlice";

export const store = configureStore({
    reducer: {
        general: generalReducer,
        character: characterReducer,
    },
});
