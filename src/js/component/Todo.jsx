import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs';
import {BsPencilSquare} from 'react-icons/bs';

const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <BsFillTrashFill onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo;