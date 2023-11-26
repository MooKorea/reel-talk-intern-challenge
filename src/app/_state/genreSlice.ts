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
    addGenre: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
    replaceGenre: (state, action: PayloadAction<string>) => {
      state.value = action.payload.split(",");
    },
  },
});

export const { addGenre, removeGenre, replaceGenre } = genreSlice.actions;

export default genreSlice.reducer;
