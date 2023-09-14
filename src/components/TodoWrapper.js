import React, { useState } from 'react'
import { TodoForm } from './TodoForm'



export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, todo]);
        console.log(todos);
    }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
