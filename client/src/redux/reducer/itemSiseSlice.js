import { createSlice } from '@reduxjs/toolkit';

export const itemSiseSlice = createSlice({
  name:"itemSise",
  initialState:{
   itemSiseList:[]
  } ,
  reducers:{
   setSiseList:(state, action) => {
      state.itemSiseList = action.payload;
   }
  }
})

export const { setSiseList } = itemSiseSlice.actions;

export default itemSiseSlice.reducer;