import { createSlice } from '@reduxjs/toolkit';
const intialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: intialState,
  reducers: {
    increment: function (state, action) {
      state.count = state.count + 1;
    },
    decrement: function (state, action) {
      state.count = state.count - 1;
    },
    incrementBy: function (state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
