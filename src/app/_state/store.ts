import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice"

export const store = configureStore({
  reducer: {
    genre: genreReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch