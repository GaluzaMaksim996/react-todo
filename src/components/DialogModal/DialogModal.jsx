import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

import './DialogModal.scss';

const DialogModal = ({
  isOpen,
  handleOpenDialog,
  formData,
  handleSetFieldValue,
  handleSetTodoOnSubmit
}) => {
  return (
    <Dialog open={isOpen} onClose={handleOpenDialog}>
      <MuiDialogTitle className='dialog-title'>{formData.isEdit ? 'Edit Todo' : 'Add new Todo'}</MuiDialogTitle>
      <MuiDialogContent>
        <form onSubmit={handleSetTodoOnSubmit}>
          <TextField
            label='Todo'
            variant='outlined'
            onChange={(e) => handleSetFieldValue('todoName', e.target.value)}
            value={formData.todoName}
          />
          <TextField
            label='Note'
            variant='outlined'
            onChange={(e) => handleSetFieldValue('todoNote', e.target.value)}
            value={formData.todoNote}
            multiline
            minRows={4}
          />
          <MuiDialogActions>
            <Button color='primary' onClick={handleOpenDialog}>
              Close
            </Button>
            <Button disabled={!formData.todoName} type='submit' color='primary'>
            {formData.isEdit ? 'Edit' : 'Add'}
            </Button>
          </MuiDialogActions>
        </form>
      </MuiDialogContent>
    </Dialog>
  )
}

export default DialogModal