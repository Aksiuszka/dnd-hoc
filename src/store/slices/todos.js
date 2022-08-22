import { createSlice } from '@reduxjs/toolkit';
import tasks from '../../constants/tasks';

const initialState = tasks;
const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    addTodo(state, { payload }) {
      console.log(payload);
      state.push({ id: Math.random().toString(), isCompleted: false, name: payload });
    },
    removeTodo(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
    toggleTodo(state, { payload }) {
      const todo = state.find(({ id }) => id === payload);
      todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { reducer: todosReducer, actions: todosActions } = todosSlice;
