import React, { useState } from 'react'

const Todo = () => {
  const [task, addTask] = useState('');
  const handleAdd = () =>{
      addTask = task+1
  }
  return (
    <div>
            Todo List

            <input placeholder='Enter your task'/>
            <button onClick={handleAdd}>Click Here</button>
            <table>
              <tr>{task}</tr>
            </table>
    </div>
  )
}

export default Todo
