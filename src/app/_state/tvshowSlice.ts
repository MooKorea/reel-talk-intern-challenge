import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TVshowState {
  value: string[];
}

const initialState: TVshowState = {
  value: [],
};

const tvshowSlice = createSlice({
  name: "tvshow",
  initialState,
  reducers: {
    addTVshow: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeTVshow: (state, action: PayloadAction<string>) => {
      const index = state.value.indexOf(action.payload);
      state.value.splice(index, 1);
    },
    replaceTVshow: (state, action: PayloadAction<string>) => {
      state.value = action.payload.split(",");
    },
  },
});

export const { addTVshow, removeTVshow, replaceTVshow } = tvshowSlice.actions;

export default tvshowSlice.reducer;
