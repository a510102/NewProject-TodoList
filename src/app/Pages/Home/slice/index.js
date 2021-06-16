import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    addTodo: (state, { payload: todo }) => {
      const timeStamp = new Date().getTime();
      const newTodoList = [
        {
          id: timeStamp,
          content: todo,
          isComplate: false,
        }, ...state.todoList];
      state.todoList = newTodoList;
    },
    deleteTodo: (state, { payload: id }) => {
      state.todoList = state.todoList
        .filter((todoItem) => todoItem.id !== id);
    },
    toggleTodo: (state, { payload: id }) => {
      const newTodoList = state.todoList.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, isComplate: !todoItem.isComplate };
        }
        return todoItem;
      });
      state.todoList = newTodoList;
    },
  },
});

export const { deleteTodo, toggleTodo, addTodo } = homePageSlice.actions;

export const todoSelector = (state) => state.homeSlice.todoList;

export default homePageSlice.reducer;
