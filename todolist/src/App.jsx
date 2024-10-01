import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  let todos =[
    'Do projects',
    'Complete React Course',
    'Go Walking'

  ]

  return (    
    <>
     <TodoInput/>
     <TodoList todos={todos}/>
    </>
  )
}

export default App
