import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import genshin from "genshin-db";

const initialState = {
    elements: [
        ...new Set(
            genshin
                .elements("names", { matchCategories: true })
                .map((element) => element)
        ),
    ],
    weapontypes: [
        ...new Set(
            genshin
                .characters("names", { matchCategories: true })
                .map((char) => genshin.characters(char).weapontype)
        ),
    ],
};

export const generalSlice = createSlice({
    name: "general",
    initialState,
});

export const {} = generalSlice.actions;

export default generalSlice.reducer;
