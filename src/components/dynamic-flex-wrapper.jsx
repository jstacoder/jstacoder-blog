import React, { useState, useReducer } from 'react'
import { Flex, BorderBox, ButtonOutline } from '@primer/components'

const SET_SELECTED_COMPONENT = 'set_selected_component'
const SET_VALUE_ON_COMPONENT = 'set_value_on_component'
const ADD_COMPONENT = 'add_component'
const REMOVE_COMPONENT = 'remove_component'


const selectedComponentReducer = (state, {type, value} = {}) =>{
  const results = {
    [SET_SELECTED_COMPONENT]: (component) => ({...state, selected: component}),
    [SET_VALUE_ON_COMPONENT]: ({key, val}) =>({
      ...state,
      selected:{
        ...state.selected,
        [key]: val
      }
    })
  }
  if(type in results){
    return results[type](value)
  }
  return state
}

const componentsReducer = (state, {type, value} = {}) =>{
  const results = {
    [ADD_COMPONENT]: component=> ([...state, component]),
    [REMOVE_COMPONENT]: component=> state.filter(comp => comp !== component)
  }
  if(type in results){
    return results[type](value)
  }
  return state
}

const DynamicComponentWrapper = ({Component, ...props}) =>{
  const [selected, dispatch] = useReducer(selectedComponentReducer, {selected: Component})
  
  const [flexDirection, setFlexDirection] = useState('row')
  const [flexDirectionInput, setFlexDirectionInput] = useState(flexDirection)
  
  
  const flexDirectionChoices = ['row', 'row-reverse','column', 'column-reverse']
  
  
  
  const onSubmit = e =>{
    e && e.preventDefault()
    setFlexDirection(flexDirectionInput)
    setFlexDirectionInput('')
  }
  
  const onChange = e =>{
    e.preventDefault()
    setFlexDirectionInput(e.target.value)
  }
  
  const changeFlexDirection = choice =>{
    setFlexDirectionInput(choice)
    onSubmit()
  }
  
  return (
   <div>
     <form onSubmit={onSubmit}>
       {flexDirection}
       <label>Flex direction</label>
       {flexDirectionChoices.map(choice=>(
        <ButtonOutline key={choice} onClick={()=>changeFlexDirection(choice)}>{choice}</ButtonOutline>
       ))}
     </form>
     <Component {...props} flexDirection={flexDirection}/>
   </div>
   )
}

const MyComp = props =>{
  return (
   <Flex {...props}>
     <BorderBox p={2}>
       <p>hi</p>
     </BorderBox>
     <BorderBox p={2}>
       <p>hi</p>
     </BorderBox>
     <BorderBox p={2}>
       <p>hi</p>
     </BorderBox>
     <BorderBox p={2}>
       <p>hi</p>
     </BorderBox>
   </Flex>
  )
}

export const Wrapper = props =>{
  
  return <DynamicComponentWrapper Component={MyComp} {...props} />
}
