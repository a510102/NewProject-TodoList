import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageList: [],
  currentPage: 1,
  total: 10
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageList: (state, {payload: total}) => {
      let newPageList = [];
      let maxPageLength = Math.ceil(total / state.total);
      if (maxPageLength > 1) {
        for (let i=1;i<=maxPageLength;i++) {
          newPageList.push(i);
        }
      } else {
        newPageList.push(1);
      }

      state.pageList = newPageList;
    },
    changePage: (state, {payload: page}) => {
      if (page !== state.currentPage) {
        state.currentPage = page;
      }
    },
    resetPage: (state, {payload}) => {
      state.pageList = [];
      state.currentPage = 1;
    }
  }
});

export const { setPageList, changePage, resetPage } = pageSlice.actions;

export const pageListSelector = (state) => state.page.pageList;

export const currentPageSelector = (state) => state.page.currentPage;
export const pageIndexSelector = (state) => {
  const { total, currentPage } = state.page;
  return { 
    start: (total * currentPage) - total,
    end: total * currentPage
  }
};

export default pageSlice.reducer;