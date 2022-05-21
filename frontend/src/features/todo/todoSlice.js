import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, title: "todo1", completed: false }],

  //Called after action is called.
  //Function that takes state and action as arguments
  //Returns updated state and sets new state
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now,
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id); //filer function returns a new array
    },
  },
});

//To change something in the state, you need to dispatch an action
//An action is a plain JavaScript object containing type and payload
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

//to add to store
export default todoSlice.reducer;
