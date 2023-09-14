import React from 'react'



export const Todos = ({todolist, handleDelete}) => {
  return (
    <div>
        {todolist.map((todo, index) =>
            <div key={index} className='Todo'>
               {todo}
               <button onClick={() => handleDelete(index)} className='todo-btn fa-trash'>Delete</button>
            </div>
        )}
    </div>
  )
}
export default Todos;