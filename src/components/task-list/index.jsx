import React from 'react'
import uuid from 'uuid/v4'
import { Box, BorderBox, Heading, TextInput, Text, Flex } from '@primer/components'


const TaskList = props =>{
  const [tasks, setTasks] = React.useState([])
  const [inputValue, setValue] = React.useState('')
  
  const addTask = text =>{
    setTasks([...tasks, {task: text, id: uuid()}])
  }
  
  const onChangeText = props =>{
    console.log(props)
    setValue(props.target.value)
  }
  
  const submitChange = (e) =>{
    e.preventDefault()
    addTask(inputValue)
    
    setValue('')
  }
  
  const removeTask = taskId =>{
    const tasks = tasks.filter(({id})=>{})
  }
  
  return (
   <BorderBox borderColor={'red.3'} my={5}>
     <Heading textAlign='center' onClick={()=>addTask('test')}>Tasks</Heading>
     <form onSubmit={submitChange}>
     <TextInput placeholder={'Add New Task'} value={inputValue} onChange={onChangeText}/>
     </form>
     {tasks.map(task=>(
      <BorderBox mt={2} ml={2} maxHeight={35} key={task.id}>
        <Flex>
          <Flex.Item flex={1}>
        {task.task}
          </Flex.Item>
          <Flex.Item flex={30}>{' '}</Flex.Item>
          <Flex.Item flex={1}>
        <Text textAlign={'right'} onClick={()=> removeTask(task.id)}>X</Text>
          </Flex.Item>
        </Flex>
      </BorderBox>
     ))}
   </BorderBox>
  )
}

export default TaskList