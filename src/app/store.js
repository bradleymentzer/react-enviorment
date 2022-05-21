//creates Store with holds state, combines reducers, and contains middleware
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
//Links store to app
//Holds reducers
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
