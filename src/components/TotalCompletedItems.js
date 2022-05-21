import React from "react";
import { useSelector } from "react-redux";

//State value passes will be total state tree, so filer by todo array
const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  //show array length
  return <h4 className="mt-3">Total complete items: {todos.length}</h4>;
};

export default TotalCompleteItems;
