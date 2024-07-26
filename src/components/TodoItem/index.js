import './index.css'

const TodoItem = props => {
  const {listItems, deleteTodo} = props
  const {id, title} = listItems

  const deleteTodoList = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-list-container">
      <div className="heading-container">
        <p className="title">{title}</p>
      </div>
      <div className="button-container">
        <button onClick={deleteTodoList} type="button" className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
