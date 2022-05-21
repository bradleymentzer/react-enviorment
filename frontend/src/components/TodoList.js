import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  //accepts a function and returns data based on that function
  //state is passed in by redux
  //goes to store, picks todo state, and reassigns to todo varible
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
