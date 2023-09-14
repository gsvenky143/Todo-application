import React, { useState } from 'react'
import Todos from './Todos'
export const TodoForm = () => {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos);
        setTask("");
    }

    const changeHandler = e => {
      setTask(e.target.value);
    }
    const handleDelete = (indexValue) => {
      const newTodos = todos.filter((todos, index) => index !== indexValue);
      setTodos(newTodos);
  }

  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter a task' className='todo-input' onChange={changeHandler} value={task}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
        <Todos todolist={todos} handleDelete={handleDelete}/>
    </div>
  )
}
