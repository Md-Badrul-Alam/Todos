import React, { useState } from "react";

import style from "./NewTodo.module.css";

const NewTodo = ({ onTodos }) => {
   const [todo, setTodo] = useState({ title: "", description: "" });
   const { title, description } = todo;

   const handleChange = (e) => {
      const name = e.target.name;
      setTodo((oldTodo) => {
         return { ...oldTodo, [name]: e.target.value };
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      onTodos(todo);
      setTodo({ title: "", description: "" });
   };

   return (
      <form className={style.form} onSubmit={handleSubmit}>
         <div className={style["form-field"]}>
            <label htmlFor="title">Title:</label>
            <input
               type="text"
               name="title"
               id="title"
               value={title}
               onChange={handleChange}
            />
         </div>
         <div className={style["form-field"]}>
            <label htmlFor="description">Description:</label>
            <textarea
               type="text"
               name="description"
               id="description"
               value={description}
               onChange={handleChange}
            />
         </div>
         <button type="submit">Add Todo</button>
      </form>
   );
};

export default NewTodo;
