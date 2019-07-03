import React from 'react'

export default (props) =>{
  console.log(props)
  return (
   <div>
     {props.children}
   </div>
  )
}

export const DateCellWrapper = (props)  =>{
  return (
   <div>
     {props.children}
  </div>
  )
}

export const WeekWrapper = props =>{
  console.log('qeek wrapper', props)
  
  return (
   <div>
     {props.children}
   </div>
  )
}

export const Header = props =>{
  console.log('HEader', props)
  
  return props.children ? props.children : null
}

export const Event = props=>{
  console.log('EVENT: ', props)
  
  

  
  return (
   <p>{`${props.title}`}</p>
  )
}