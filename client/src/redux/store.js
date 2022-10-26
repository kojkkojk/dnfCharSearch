import { configureStore } from '@reduxjs/toolkit';
import charSearch from './reducer/charSearch';

export default configureStore({
   reducer:{
      charSearch:charSearch
   }
})