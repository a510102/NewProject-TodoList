import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../Pages/Home/slice';


export const store = configureStore({
  reducer: {
    homeSlice
  }
});