import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
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
      const baseState = state.todoList;
      const newTodoList = produce(baseState, draftState => {
        draftState.unshift(newTodo)
      })
      state.todoList = newTodoList;
    },
    deleteTodo: (state, { payload: id }) => {
      const baseState = state.todoList;
      const newTodoList = produce(baseState, draftState => draftState.filter(draftStateItem => draftStateItem.id !== id))
      state.todoList = newTodoList;
    },
    toggleTodo: (state, { payload: id }) => {
      const baseState = state.todoList;
      const newTodoList = produce(baseState, draftState => {
        let toggleTodoIndex = draftState.find(draftStateItem => draftStateItem.id === id);
        toggleTodoIndex = draftState.indexOf(toggleTodoIndex);
        draftState[toggleTodoIndex].isComplete = !draftState[toggleTodoIndex].isComplete;
      })
      state.todoList = newTodoList;
    },
  },
});

export const { deleteTodo, toggleTodo, addTodo } = homePageSlice.actions;

export const todoSelector = (state) => state.homeSlice.todoList;

export default homePageSlice.reducer;
