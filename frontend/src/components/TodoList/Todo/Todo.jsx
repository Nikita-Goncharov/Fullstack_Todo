export const Todo = ({checked, text}) => {
  return <div>
    <input type="checkbox" checked={checked}/>
    <p>{text}</p>
  </div>
}
