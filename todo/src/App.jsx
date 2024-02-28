import { useState } from 'react'
import Todo from './components/todo';
import TodoForm from './components/todoform';
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionabilidaded X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir a Academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
  ])

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
        <TodoForm/>
  </div>
}

export default App;
