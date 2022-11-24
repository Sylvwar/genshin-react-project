import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import genshin from "genshin-db";

export const fetchCharacters = () => {
    let names = genshin.characters("names", { matchCategories: true });
    return names.map((name) => {
        let character = genshin.characters(name);
        let element = genshin.elements(character.element);
        return { ...character, element: { ...element }, stats: null };
    });
};

const initialState = {
    characters: [],
    filters: {
        elements: [],
        weapontypes: [],
    },
};

export const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        getCharacters: (state) => {
            state.characters = fetchCharacters();
        },
        filterElement: (state, action) => {
            if (state.filters.elements.includes(action.payload)) {
                let idx = state.filters.elements.indexOf(action.payload);
                state.filters.elements.splice(idx, 1);
            } else {
                state.filters.elements.push(action.payload);
            }
        },
        filterWeaponType: (state, action) => {
            if (state.filters.weapontypes.includes(action.payload)) {
                let idx = state.filters.weapontypes.indexOf(action.payload);
                state.filters.weapontypes.splice(idx, 1);
            } else {
                state.filters.weapontypes.push(action.payload);
            }
        },
        filterCharacters: (state) => {
            let characters = fetchCharacters();
            let filtered = characters.filter((char) => {
                if (state.filters.weapontypes.length > 0)
                    return state.filters.weapontypes.includes(char.weapontype);
                else return char;
            });
            filtered = filtered.filter((char) => {
                if (state.filters.elements.length > 0)
                    return state.filters.elements.includes(char.element.name);
                else return char;
            });
            state.characters = filtered;
        },
    },
});

export const {
    getCharacters,
    filterElement,
    filterWeaponType,
    filterCharacters,
} = characterSlice.actions;

export default characterSlice.reducer;
