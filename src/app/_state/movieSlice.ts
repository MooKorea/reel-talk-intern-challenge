import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MovieState {
  value: string[];
}

const initialState: MovieState = {
  value: [],
};

//reducer function for movie selection
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
    replaceMovie: (state, action: PayloadAction<string>) => {
      state.value = action.payload.split(",");
    },
  },
});

export const { addMovie, removeMovie, replaceMovie } = movieSlice.actions;

export default movieSlice.reducer;
