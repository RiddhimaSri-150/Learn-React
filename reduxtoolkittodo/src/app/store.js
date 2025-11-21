import {configureStore} from '@reduxjs/toolkit';
import  todoReducer from '../Features/todo/todoSlice';

export const store = configureStore({
    reducer:  {
    todos: todoReducer,   // key name = slice name in store
  },
})