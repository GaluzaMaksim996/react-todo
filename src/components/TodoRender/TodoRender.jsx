import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import Checkbox from '@material-ui/core/Checkbox'

import './TodoRender.scss'

const Todo = ({
  todo,
  index,
  handleMarkTodo,
  handleOpenTodo
}) => {
  const isFinishedTodo = todo.isFinished ? 'todo__item-finished' : ''
  return (
    <div className='todo__item'>
      <span>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon color="primary" />}
          onClick={(e) => handleMarkTodo(e.target.checked, index)}
          checked={todo.isFinished}
        />
      </span>
      <div className='todo__item-title' onClick={() => handleOpenTodo({ ...todo, index })}>
        <span className={isFinishedTodo}>{todo.todoName}</span>
        <ArrowForwardIosIcon fontSize='small' />
      </div>
    </div>
  )
}

const TodoRender = ({
  todos,
  handleMarkTodo,
  handleOpenTodo
}) => {

  return (
    <div className='todo__list'>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          index={index}
          handleMarkTodo={handleMarkTodo}
          handleOpenTodo={handleOpenTodo}
        />
      ))}
    </div>
  )
}

export default TodoRender