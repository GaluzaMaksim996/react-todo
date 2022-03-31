import moment from "moment"
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './Header.scss'
import DialogModal from "../DialogModal/DialogModal";
import DisplayTodo from "../DisplayTodo/DisplayTodo";

const Header = ({
  isOpen,
  handleOpenDialog,
  formData,
  handleSetFieldValue,
  handleSetTodoOnSubmit,
  isOpenDisplayTodo,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
  totalCount
}) => {

  const weekDay = moment().format('dddd')
  const date = moment().date()

  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__count">
          <span className="header__count-finished">{totalCount.finished}</span>
          <div className="header__count-total">
            <span>Tasks</span>
            <span>{`/ ${totalCount.total}`}</span>
          </div>
        </div>
        <div>
          <span className="header__week-day">{weekDay}</span>
          <span className="header__date">{date}</span>
        </div>
      </div>
      <div className="header__add-todo" onClick={handleOpenDialog}>
        <AddCircleIcon color="primary" />
        <span></span>
      </div>
      <DialogModal
        isOpen={isOpen}
        handleOpenDialog={handleOpenDialog}
        formData={formData}
        handleSetFieldValue={handleSetFieldValue}
        handleSetTodoOnSubmit={handleSetTodoOnSubmit}
      />
      <DisplayTodo
        formData={formData}
        isOpen={isOpenDisplayTodo}
        handleCloseButton={handleCloseButton}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  )
}

export default Header