import React, { useState, useEffect } from "react";
import './Todo.css';

export default function Todo({todo}){
    const [todoItem, setTodoItem] = useState(todo);

    const handleClick = (event) => {
        todoItem.completed = true;
        console.log(todoItem)
    }

    return(
        <div className="todoItem" onClick={handleClick}>
            <h1 className={todoItem.completed ? "greenName" : "redName"}>{todoItem.task}</h1>
            <h2>ID: {todoItem.id}</h2>
            <h2>Completed: {todoItem.completed ? "true" : "false"}</h2>
        </div>
    )
}