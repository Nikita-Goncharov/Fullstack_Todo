import {TodoListHeader} from "./TodoListHeader/TodoListHeader.jsx";
import {TodoListContent} from "./TodoListContent/TodoListContent.jsx";
import styles from './TodoList.module.scss'

export const TodoList = () => {
  return <div className={styles.todoList}>
    <TodoListHeader>
      <h2>Your todo list</h2>
    </TodoListHeader>

    <TodoListContent/>
  </div>
}
