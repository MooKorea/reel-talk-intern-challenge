import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GenreState {
  value: string[];
}

const initialState: GenreState = {
  value: [],
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload.split(",");
    },
  },
});

export const { add, remove, set } = genreSlice.actions;

export default genreSlice.reducer;
