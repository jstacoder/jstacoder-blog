import React, { useContext, useReducer, useState } from 'react'

const NEXT = 'NEXT'
const PREV = 'PREV'

export const DateContext = React.createContext({
  date: null,
  dispatch: ()=>{}
})

const dateReducer = (state, {type, value} = {}) =>{
  switch(type){
    case NEXT:
      return value
    case PREV:
      return value
    default:
      return state
  }
}

export const CurrentDateProvider = ({children, initialDate}) =>{
   const [currentDate, dispatch] = useReducer(dateReducer, initialDate)
  
  
  
  const moveToNext = (date) =>{
    dispatch({type: NEXT, value: date})
  }
  const moveToPrev = date =>{
    dispatch({type: PREV, value: date})
  }
  const value = {
     currentDate,
     moveToNext,
     moveToPrev,
   }
   return (
   <DateContext.Provider value={value}>
     {children({currentDate, moveToNext, moveToPrev})}
   </DateContext.Provider>
  )
}

export const useCurrentDate = (initialDate) =>{
  const { currentDate, moveToNext, moveToPrev } = useContext(DateContext)
  
  return {
    currentDate, moveToPrev, moveToNext
  }
}