/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { ThemeContextProvider } from './src/theme'


import CodeBlock from './src/components/code-block'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

export const wrapRootElement = ({element}) =>{
  return (
   <ThemeContextProvider>
     <MDXProvider components={components}>
       {element}
     </MDXProvider>
   </ThemeContextProvider>
  )
}

export const wrapPageElementNodeArgs = ({...args}) =>{

}