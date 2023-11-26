import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice"
import movieReducer from "./movieSlice"
import tvshowReducer from "./tvshowSlice"

export const store = configureStore({
  reducer: {
    genre: genreReducer,
    movie: movieReducer,
    tvshow: tvshowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch