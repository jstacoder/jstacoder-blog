import React from 'react'
import styled from 'styled-components'
import { StyledOcticon, Flex } from '@primer/components'
import { Info, Alert as AlertIcon, Stop, LightBulb, X as CloseIcon } from '@primer/octicons-react'
import { PropTypes } from 'prop-types'


import CloseButton from './close'
import useTheme from '../../theme'


export const Alert = ({icon, children, ...props}) =>{
  const { theme, themeName, setThemeName } = useTheme()

  const alertTypes = {
    info: {
      color: theme.colors.info,
      Icon: Info,
    },
    success:{
      color: theme.colors.success,
      Icon: LightBulb,
    },
    warning: {
      color: theme.colors.warning,
      Icon: AlertIcon,
    },
    danger: {
      color: theme.colors.danger,
      Icon: Stop,
    },
    error: {
      color: theme.colors.error,
      Icon: Stop,
    }
  }

  
  
  const StyledAlert = styled.div`
    padding: 15px 20px;
    border: 1px solid grey;
    border-radius: 3px;
    color: white;
    margin-bottom: 5px;
    background-color: ${({kind  = 'info'})=> alertTypes[kind].color};`
  
  return (
   <StyledAlert {...props}>
     <Flex>
       <Flex.Item>
         <StyledOcticon
            size={'medium'}
            icon={icon || alertTypes[props.kind].Icon}
            verticalAlign={'middle'}
            px={2} />
       </Flex.Item>
       <Flex.Item>
         {children}
       </Flex.Item>
       <Flex.Item
          flex={1}>
         <Flex
          flexDirection={'column'}>
           <Flex.Item
              alignSelf={"flex-end"}
              style={{cursor:'pointer'}}>
             <CloseButton
                alignSelf='flex-end'
                size={'small'}
             />
           </Flex.Item>
         </Flex>
       </Flex.Item>
     </Flex>
   </StyledAlert>
 )
}

Alert.propTypes = {
  /** What kind of alert is this */
  kind: PropTypes.oneOf(["info", "warning", "danger", "success", "error"]),
  /** custom icon to display with your message */
  icon: PropTypes.func,
  /** the body of your message */
  children: PropTypes.node,
}

Alert.defaultProps = {
  kind: 'info'
}
