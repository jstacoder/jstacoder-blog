import React, { useReducer } from 'react'
import uuid from 'uuid/v4'

const initialState = [{text: 'fitrst', complete: false, id: uuid()}]

// action types
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

// reducer function
const reducer = (state = initialState, {type, value} = {}) =>{
  return {
    [ADD_TASK]: task => [...state, {...task, id: uuid(), complete: false}],
    [REMOVE_TASK]: taskId => state.filter(task=> task.id !== taskId),
    [TOGGLE_COMPLETE]: taskId => state.map(task=> task.id !== taskId ? task : {...task, complete: !task.complete})
  }[type](value)
}

// actionCreators
const _addTask = task => ({
  type: ADD_TASK,
  value: task,
})

const _removeTask = taskId =>({
  type: REMOVE_TASK,
  value: taskId,
})

const _toggleComplete = taskId =>({
  type: TOGGLE_COMPLETE,
  value: taskId,
})

const useTasks = () =>{
  const [tasks, dispatch] = useReducer(reducer, initialState)
  
  const addTask = task => dispatch(_addTask(task))
  
  const removeTask = taskId => dispatch(_removeTask(taskId))
  
  const toggleComplete = taskId => dispatch(_toggleComplete(taskId))
  
  return {
    tasks,
    removeTask,
    addTask,
    toggleComplete,
  }
}


const TasksContext = React.createContext({tasks: [], addTask: ()=>{}, removeTask: ()=>{}, toggleComplete:()=>{}})

export const TaskContextProvider = ({children}) =>{
  
  return (
   <TasksContext.Provider value={useTasks()}>
     {children}
    </TasksContext.Provider>
  )
}

export default TasksContext

