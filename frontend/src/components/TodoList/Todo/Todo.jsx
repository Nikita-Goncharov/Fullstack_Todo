import styles from './Todo.module.scss'

export const Todo = ({checked, text}) => {
  const handleChecked = () => {

  }

  return <div className={styles.todo}>
    <input className={styles.checkbox} onChange={handleChecked} type="checkbox" checked={checked}/>
    <input className={styles.text} type="text" value={text}/>

  </div>
}
