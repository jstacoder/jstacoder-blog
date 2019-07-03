import React, { useState, useMemo } from 'react'
import {
  Box,
  BorderBox,
  TextInput,
  Heading,
  Text, ButtonOutline,
} from '@primer/components'


const loadBlankForm = (initial = false) =>({
  firstName: initial ? null: '',
  lastName: initial ? null: '',
  email: initial ? null: '',
  message: initial ? null: '',
})

export default (props) =>{
  
  const [submittedForm, setSubmittedForm] = useState( loadBlankForm(true) )
  
  const [formState, setFormState] = useState( loadBlankForm() )
  
  const resetForm = () =>{
    setFormState( loadBlankForm() )
  }
  
  const onClick = () =>{
    setSubmittedForm(formState)
    resetForm()
  }
  
  const updateFirstName = firstName =>{
    setFormState({...formState, firstName})
  }
  
  const updateLastName = lastName =>{
    setFormState({...formState, lastName})
  }
  
  const updateEmail = email =>{
    setFormState({...formState, email})
  }
  
  const updateMessage = message =>{
    setFormState({...formState, message})
  }
  
  const updateField = (fieldFunc, e) => fieldFunc(e.target.value)
  
  const {
    firstName,
    lastName,
    email,
    message,
  } = formState
  
  return (
   <BorderBox m={4} p={3} display={'flex'} style={{flexDirection: 'column'}} border={0} borderBottom={1} borderRadius={0}>
    <Box m={1} p={2}>
       <Box>
         <Text mb={1} mr={2}>First Name:</Text>
         <TextInput block size={'large'} value={firstName} onChange={e=> updateField(updateFirstName, e)} placeholder={'enter your first name'}/>
       </Box>
        <Box mt={2}>
          <Text mb={1} mr={2}>Last Name:</Text>
          <TextInput block size={'large'} value={lastName} onChange={e=> updateField(updateLastName, e)} placeholder={'enter your last name'}/>
        </Box>
        <Box mt={2}>
          <Text mb={1} mr={2}>Email:</Text>
          <TextInput block size={'large'} value={email} onChange={e=> updateField(updateEmail, e)} placeholder={'enter your email'}/>
        </Box>
         <Box mt={2}>
           <Text mb={1} mr={2}>Message:</Text>
           <TextInput block size={'large'} value={message} onChange={e=> updateField(updateMessage, e)} placeholder={'Whats up?'}/>
         </Box>
     </Box>
     
     <ButtonOutline onClick={onClick} my={4} size={'large'}>Submit</ButtonOutline>
     <p>{submittedForm.firstName !== null ? 'submitted' : null}</p>
   </BorderBox>
  )
}