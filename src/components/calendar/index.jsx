import React from 'react'
import { Calendar, momentLocalizer, components as calComponents } from 'react-big-calendar'
import moment from 'moment'
import styled, { createGlobalStyle, css  } from 'styled-components'
import { Box } from '@primer/components'
import EventWrapper, { DateCellWrapper, WeekWrapper, Event, Header } from './EventWrapper'
import * as dateFns from 'date-fns'

import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
import MonthView from './MonthView'
import { CurrentDateProvider, useCurrentDate } from './useCurrentDate'


const wrapperStyle = css`
  &&{
    height: 100%;
  }
`

const style = css`
  margin-top: 25px;
  
  && {
    height: 90vh;
  }
`


const StyledCalendar = styled(Calendar)`
  ${style};
`

const GlobalStyle = createGlobalStyle`
  ${styles}
`

const EventForm = props=>{
  return null
}

const localizer = momentLocalizer(moment)


export const CalendarComponent = (props) =>{
  
  
  const initialEvents = [
    {start: new Date(), end: dateFns.addHours(new Date(), 1), title: 'test envent'}
  ]
  
  const  [events, setEvents] = React.useState(initialEvents)
  
  const createEvent = (title, {start, end}) =>{
    const event = {
      title,
      start,
      end,
    }
    
    setEvents([...events, event])
  }
  
  const selectSlot = (props,{...rest}) =>{
    console.log('SELECTSLOT: ', props, rest)
    createEvent('new event', props)
  }
  
  const selectEvent = (calendarEvent, domEvent) =>{
    console.log('select event: ')
    domEvent.target.innerText = 'hi'
    console.log(domEvent.target.parentNode)
  }
  
  const components = {
    ...calComponents,
    eventWrapper: EventWrapper,
    dateCellWrapper: DateCellWrapper,
    weekWrapper: WeekWrapper,
    // drilldownView:DrillDown,
    month: {
      event: Event,
      header: Header,
    }
    
  }
  
  const views = {
   month: MonthView,
   week: true,
   day: true,
   eventForm: EventForm,
  }
  
  return (
   <CurrentDateProvider initialDate={new Date()}>
     {({currentDate, moveToNext, MoveToPrev})=>(
      <React.Fragment>
       <StyledCalendar
          localizer={localizer}
          events={events}
          selectable={true}
          defaultDate={currentDate}
          onSelectSlot={selectSlot}
          components={components}
          drillDownView={'eventForm'}
          onSelectEvent={selectEvent}
          views={{month: MonthView, week: true, day: true}}
          popup
        />
        <p>{currentDate.toString()}</p>
      </React.Fragment>
       )}
   </CurrentDateProvider>
  )
}