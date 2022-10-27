import { createSlice } from '@reduxjs/toolkit';

export const charSearchSlice = createSlice({
   name: "charSearch",
   initialState: {
      charList: []
   },
   reducers: {
      setCharList: (state, action) => {
         state.charList = action.payload;
      }
   }
})

export const { setCharList } = charSearchSlice.actions;

export default charSearchSlice.reducer;