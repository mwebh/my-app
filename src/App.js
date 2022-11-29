import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const LOCAL_STORAGE_KEY = 'todoapp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <div className='page'>
      <div className='input-section'>
        <input ref={todoNameRef} type="text" className='input-text' placeholder='What do you have todo?' />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Todos</button>
        <div className='numer-of-todos'>{todos.filter(todo => !todo.complete).length} left to do</div>
      </div>
      <br />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
