import React from 'react'

import {
  Heading,
  TextInput,
} from '@primer/components'

import TasksContext from './tasks'

const TaskListHeader = () =>{
  const {
    tasks,
    addTask,
  } = React.useContext(TasksContext)
  
  const [inputValue, setInputValue] = React.useState('')
  
  const onChange = e =>{
    setInputValue(e.target.value)
  }
  
  const onSubmit = e =>{
    e.preventDefault()
    addTask({text: inputValue})
    setInputValue('')
  }
  
  return (
   <React.Fragment>
     <Heading>
       {tasks.length} Task{tasks.length !== 1 && 's'}
     </Heading>
     <form onSubmit={onSubmit}>
       <TextInput placeholder={'add task'} onChange={onChange} value={inputValue}/>
     </form>
   </React.Fragment>
  )
}

export default TaskListHeader
