import {Todo} from '../Todo/Todo.jsx'

export const TodoListContent = () => {
  const todos = [
    {checked: false, text: "Hello"},
    {checked: true, text: "Hello"},
    {checked: false, text: "Hello"},
    {checked: false, text: "Hello"}
  ]
  return <div>
    {todos.map(todo => <Todo {...todo}/>)}
  </div>
}
