import React, { useState } from "react";

export default function Todo({todo}){
    const [todoItem, setTodoItem] = useState(todo);
    return(
        <div className="todoItem">
            <h1>{todoItem.task}</h1>
            <h2>ID: {todoItem.id}</h2>
            <h2>Completed: {todoItem.completed ? "true" : "false"}</h2>
        </div>
    )
}