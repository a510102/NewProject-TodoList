import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../Pages/Home/slice';
import pageSlice from '../components/Pagination/slice';

const store = configureStore({
  reducer: {
    homeSlice,
    page: pageSlice,
  },
});

export default store;
