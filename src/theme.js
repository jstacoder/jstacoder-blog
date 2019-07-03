import React from 'react'
import { theme as primerTheme } from '@primer/components'
import {ThemeProvider} from 'styled-components'




const lightTheme = {
  ...primerTheme,
  colors: {
    ...primerTheme.colors,
    success: '#9CAFB7',
    info: '#4281A4',
    danger: '#E6B89C',
    warning: '#EAD2AC',
    error: '#FE938C',
  }
}

const darkTheme = {
  ...primerTheme,
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const getTheme = name => themes[name]

const useTheme = () =>
{
  const [themeName, setThemeName] = React.useState('light')
  
  const theme = getTheme(themeName)
  
  return {
    theme,
    themeName,
    setThemeName,
  }
}

export const ThemeContextProvider = ({children}) =>{
  const { theme } = useTheme()
  
  return (
   <ThemeProvider theme={theme}>
     {children}
   </ThemeProvider>
  )
}

export default useTheme
