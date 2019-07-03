import React from 'react'
import { Flex, BorderBox, Text } from '@primer/components'

import TaskListIcons from './TaskListIcons'

const TaskListItem = ({task}) =>{
  
  return (
   <BorderBox px={2} pt={2} mt={2} border={0} borderBottom={1}>
     <Flex>
       <Flex.Item flex={2}>
     <Text>
       {task.text}
     </Text>
       </Flex.Item>
       <Flex.Item flex={15}>
       </Flex.Item>
       <Flex.Item flex={2}>
     <TaskListIcons task={task}/>
       </Flex.Item>
     </Flex>
   </BorderBox>
  )
}

export default TaskListItem