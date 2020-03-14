import React, { useState } from 'react';


export default function TodoForm({ submitHandler }) {
    const [newTaskName, setNewTaskName] = useState("");

    const handleTextChange = (event) => {
        event.preventDefault();
        setNewTaskName(event.target.value);
    }

    return (
        <form onSubmit={event => {event.preventDefault()
        submitHandler(newTaskName)}}>
            <label>
                Input new task:
                <input onChange={handleTextChange} type="text" name="newTask"/>
            </label>
            <input type="submit" value="submit" />
        </form>
    )
}