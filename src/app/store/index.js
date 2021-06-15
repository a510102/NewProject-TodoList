import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../Pages/Home/slice';
import pageSlice from '../components/Pagination/slice';


export const store = configureStore({
  reducer: {
    homeSlice,
    page: pageSlice,
  }
});