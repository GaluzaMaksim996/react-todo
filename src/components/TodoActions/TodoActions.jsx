import ListIcon from '@material-ui/icons/List'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckIcon from '@material-ui/icons/Check'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import './TodoActions.scss'

const TodoActions = ({
  tab,
  handleChangeTab
}) => {

  return(
    <div className='actions'>
      <Tabs
        value={tab}
        onChange={(e, tabValue) => handleChangeTab(tabValue)}
        indicatorColor='primary'
        textColor='primary'
      >    
        <Tab label={<ListIcon/>}></Tab>
        <Tab label={<RadioButtonUncheckedIcon/>}></Tab>
        <Tab label={<CheckIcon/>}></Tab>
      </Tabs>
    </div>
  )
}

export default TodoActions