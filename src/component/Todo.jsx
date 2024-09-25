import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "./Todo.module.css"
const Todo = (props) => {
   const { title, description } =props.todo;
   const {id}=props

    const handleClick=(id)=>{
        props.onRemoveTodo(id)
    }

   return <article className={style.todo}>
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
    <div className={style.btn}>
        <span onClick={()=>{handleClick(id)}}><RiDeleteBin6Line/></span>
    </div>
   </article>;
};

export default Todo;
