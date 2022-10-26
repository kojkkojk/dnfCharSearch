import { createSlice } from '@reduxjs/toolkit';

export const charSearchSlice = createSlice({
   name: "charSearch",
   initialState: {
      charList: [],
      charInfos: {}
   },
   reducers: {
      setCharList: (state, action) => {
         state.charList = action.payload;
      },
      setCharInfos: (state, action) => {
         state.charInfos = action.payload;
      }
   }
})

export const { setCharList, setCharInfos } = charSearchSlice.actions;

export default charSearchSlice.reducer;