import React from 'react'

import {
  Check,
  X,
  Reply,
} from '@primer/octicons-react'

import {
  CircleOcticon,
  Flex,
} from '@primer/components'

import styled, { css } from 'styled-components'

import TaskContext from './tasks'

const iconStyle = css`
  &:hover{
    background-color: dimgray;
    opacity: 0.4;
    cursor: pointer;
  }
`

const StyledIcon = styled(CircleOcticon)`
  ${iconStyle}
`



const Row = props => <Flex {...props} flexDirection={'row'} width={'100%'} />

const Column = props => <Flex {...props} flexDirection={'column'} flexBasis={'100%'} />


const TaskListIcons = ({task}) =>{
  const {
    toggleComplete,
    removeTask,
  } = React.useContext(TaskContext)
  return (
    <Row>
      <Column>
        {!task.complete ?
         <StyledIcon onClick={()=> toggleComplete(task.id)} icon={Check} size={20} bg={'gray.3'} color={'green.3'}/> :
         <StyledIcon onClick={()=> toggleComplete(task.id)} icon={Reply} size={20} bg={'gray.3'} color={'orange.3'}/>
        }
      </Column>
      <Column>
        <StyledIcon onClick={()=> removeTask(task.id)} icon={X} bg={'gray.3'} size={20} color={'red.3'}/>
      </Column>
    </Row>
  )
}

export default TaskListIcons