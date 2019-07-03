import React from 'react'
import {
  Box,
  BorderBox,
} from '@primer/components'

import TaskList from './TaskList'
import { TaskContextProvider } from './tasks'

import TaskListHeader from './TaskListHeader'


const TaskListWrapper = props =>{
  return (
   <TaskContextProvider>
   <BorderBox px={2} pb={4} pt={3} mt={3} borderColor={'gray.3'}>
    <TaskListHeader />
    <TaskList/>
   </BorderBox>
   </TaskContextProvider>
  )
}


export default TaskListWrapper