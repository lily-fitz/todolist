import { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'groceries' },
    { id: '2', text: 'laundry' },
    { id: '3', text: 'homework' },
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='App'>
      <Header />
      <TodoList todos={todos} handleDelete={deleteTodo} />
    </div>
  )
}

export default App
