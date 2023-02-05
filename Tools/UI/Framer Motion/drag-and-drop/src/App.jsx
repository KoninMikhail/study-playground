import { useState } from 'react'
import './App.css'
import {CreateTodo} from "./components/CreateTodo";
import {Todos} from "./components/Todos.jsx";


const defaultTodos = [
    {id: 1, title: 'Learn Framer Motion', completed: false},
    {id: 2, title: 'Create nice animations', completed: false},
    {id: 3, title: 'Use Re-oder component', completed: false},
]


function App() {
  const [todos, setTodos] = useState(defaultTodos)

    const onRemove = (id) => {
        setTodos(todos.filter(todos=> todos.id !== id));
    }

  return (
    <div className="App">
        <CreateTodo onCreate={setTodos}/>
        <Todos todos={todos} setTodos={setTodos} onRemove={onRemove}/>
    </div>
  )
}

export default App
