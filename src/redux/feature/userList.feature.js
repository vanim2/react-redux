import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  errorMessage: null,
  users: [],
};
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const responce = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return responce.data;
});
const userListSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = 'oops! something went wrong';
      });
  },
});
export default userListSlice.reducer;
