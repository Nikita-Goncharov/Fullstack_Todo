import {TodoList} from '../TodoList/TodoList'
import styles from './Content.module.scss'

export const Content = () => {
  return (
    <div className={styles.content}>
      <TodoList/>
    </div>
  );
};
