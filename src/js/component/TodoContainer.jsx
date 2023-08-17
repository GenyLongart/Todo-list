import React, {useState} from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, {id: todo, task: todo, completed: false, editing: false }])
        console.log(todos)
    }
  return (
    <>
    <h1>Todos</h1>
    <div className='TodoWrapper'>
        <TodoInput addTodo={addTodo}/>
        <Todo />
    </div>
    </>
  )
}

export default TodoContainer