import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleEnter = (e) => {
    if (e.code === 'Enter') {
      addTodo(task);
      setTask('');
    }
  }
  return (
    <>
      <div className='TodoInput' onKeyUp={handleEnter}>
        <input type="text" value={task} id="" className='todo-input' placeholder='Qué tarea desea realizar?'
          onChange={(e) => setTask(e.target.value)} />
      </div>
    </>
  )
}

export default TodoInput;