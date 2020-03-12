import React, { useState } from 'react';
import Todo from "./Todo";

export default function TodoList({ todoList }){
    const [todos, setToDoList] = useState(todoList);

    return(
        <div>
            {todos.map(i => {
                return (<Todo todo={i}/>)
            })}
        </div>
    )
}