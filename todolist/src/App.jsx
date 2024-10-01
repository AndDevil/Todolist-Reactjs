import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
 
  const [todos, setTodos]= useState([ ])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo) {
    const newTodoList =[...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex!== index
    })
    setTodos(newTodoList)
  }

  function handeEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (    
    <>
     <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
     <TodoList handleEditTodo = {handeEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
