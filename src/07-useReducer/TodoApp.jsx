import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
];

const init = () => {
  const todos = localStorage.getItem("todos");
  if (!todos || todos === undefined || todos === "undefined") return [];
  return JSON.parse(localStorage.getItem("todos"));
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState,init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    //console.log(todo);

    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteButton = (id) => {
    console.log(id)
    const action = {
      type: "Delete Todo",
      payload: id,
    }

    dispatch(action);
  }
  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleDeleteButton={handleDeleteButton} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
