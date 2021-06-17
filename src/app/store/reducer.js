import { combineReducers } from 'redux';
import paginationSlice from '../components/Pagination/slice'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    'page': paginationSlice,
    ...injectedReducers,
  })

  return rootReducer;
};
