import { configureStore } from '@reduxjs/toolkit';
import charSearch from './reducer/charSearch';
import itemSiseSlice from './reducer/itemSiseSlice';

export default configureStore({
   reducer:{
      charSearch:charSearch,
      itemSiseSlice:itemSiseSlice
   }
})