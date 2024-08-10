import {TodoListHeader} from "./TodoListHeader/TodoListHeader.jsx";
import {TodoListContent} from "./TodoListContent/TodoListContent.jsx";

export const TodoList = () => {
  return <div>
    <TodoListHeader>
      <h2>Your todo list</h2>
    </TodoListHeader>
    
    <TodoListContent/>
  </div>
}
