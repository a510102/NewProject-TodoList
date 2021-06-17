import { createSelector } from '@reduxjs/toolkit';
import {initialState} from '.'

const slice = (state) => state.homePage || initialState;

export const todoListSelector = createSelector([slice], (state) => state.todoList);

export const todoListLengthSelector = createSelector([slice], (state) => state.todoList.length);