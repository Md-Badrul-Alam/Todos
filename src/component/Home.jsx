import React, { useState } from "react";
import Todos from "./Todos";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";

import { v4 as uuidv4 } from "uuid";

const dummyTodos = [
   {
      id: 1,
      title: "Miah",
      description: "I am vary",
   },
   {
      id: 2,
      title: "Badal",
      description: "I am vary good",
   },
];

const Home = () => {
   const [todos, setTodos] = useState([]);

   const handleAddNewTodos = (newTodos) => {
      setTodos((oldTodos) => {
         return [...oldTodos, { id: uuidv4(), newTodos }];
      });
   };

   const handleRemoveTodo = (id) => {
      // const filteredTodos = todos.filter((todo)=>todo.id !== id)
      // setTodos(filteredTodos)
      setTodos((oldTodos) => {
         const filteredTodos = oldTodos.filter((todo) => todo.id !== id);
         return filteredTodos;
      });
   };
   return (
      <div className={style.container}>
         <h1 style={{ color: "white" }}>Todo App</h1>
         <NewTodo onTodos={handleAddNewTodos} />
         <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
   );
};

export default Home;
