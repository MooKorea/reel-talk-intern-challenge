import { configureStore } from "@reduxjs/toolkit";
import { OnboardingSlice } from "./onboardingSlice";

export const genreState = new OnboardingSlice("genre")
export const movieState = new OnboardingSlice("movie")
export const tvshowState = new OnboardingSlice("tvshow")

export const store = configureStore({
  reducer: {
    genre: genreState.reducer,
    movie: movieState.reducer,
    tvshow: tvshowState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch