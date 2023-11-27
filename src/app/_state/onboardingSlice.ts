import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OnboardingType {
  value: string[];
}

const initialState: OnboardingType = { value: [] };

export class OnboardingSlice {
  add
  remove
  replace
  reducer

  constructor(name: string) {
    const slice = createSlice({
      name: name,
      initialState,
      //reducer functions for genre/movie/TVshow selection.
      //These are used for handling complex state
      reducers: {
        add: (state: OnboardingType, action: PayloadAction<string>) => {
          state.value.push(action.payload);
        },
        remove: (state: OnboardingType, action: PayloadAction<string>) => {
          const index = state.value.indexOf(action.payload);
          state.value.splice(index, 1);
        },
        replace: (state: OnboardingType, action: PayloadAction<string>) => {
          state.value = action.payload.split(",");
        },
      },
    });

    this.add = slice.actions.add
    this.remove = slice.actions.remove
    this.replace = slice.actions.replace
    this.reducer = slice.reducer
  }
}
