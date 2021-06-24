import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const slice = (state) => state.covid || initialState;

export const covidSelector = createSelector([slice], (state) => state);