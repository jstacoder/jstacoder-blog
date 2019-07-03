import React from 'react'
import { Box } from '@primer/components'

import TaskListItem from './TaskListItem'
import TasksContext from './tasks'


const TaskList = () =>{
  const {
    tasks
  } = React.useContext(TasksContext)
  return (
   <Box>
     {tasks.map(task=>(
      <TaskListItem task={task} key={task.id} />
     ))}
   </Box>
  )
}

export default TaskList