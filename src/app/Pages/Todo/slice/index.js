import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';

export const initialState = {
  todoList: [],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    addTodo: (state, { payload: todo }) => {
      const timeStamp = new Date().getTime();
      const newTodo = {
        id: timeStamp,
        content: todo,
        isComplete: false,
      }
      state.todoList = [newTodo, ...state.todoList];
    },
    deleteTodo: (state, { payload: id }) => {
      state.todoList = state.todoList
      .filter(todoItem => todoItem.id !== id);
    },
    toggleTodo: (state, { payload: id }) => {
      state.todoList = state.todoList
      .map(todoItem => todoItem.id === id ? (
        {...todoItem, isComplete: !todoItem.isComplete}
        ) : (todoItem));
    },
  },
});

export const { deleteTodo, toggleTodo, addTodo } = homePageSlice.actions;

export const homePageManager = () => {
  useInjectReducer({
    key: 'homePage',
    reducer: homePageSlice.reducer
  })

  return { actions: homePageSlice.actions }
};