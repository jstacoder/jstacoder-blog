import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'

export default ({children, className, live, ...rest})=>{
  
  const [code, updateCode] = React.useState(children)
  
  const onChange = e =>{
    updateCode(e.target.value)
  }
  
  const language = className.replace(/language-/,'')
  console.log(live, rest)
  if(true){
    return (
     <div style={{marginTop: '40px'}}>
       <LiveProvider code={children}>
         <textarea value={code} onChange={onChange}/>
         <LivePreview/>
         <LiveError/>
       </LiveProvider>
     </div>
    )
  }
  
  return (
   <Highlight {...defaultProps} language={language} code={children}>
     {({className, style, tokens, getLineProps, getTokenProps})=>(
      <pre className={className} style={{...style, padding: '20px'}}>
        {tokens.map((line, i)=>(
          <div key={i} {...getLineProps({line, key: i})}>
            {line.map((token, key)=>(
              <span key={key} {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
     )}
   </Highlight>
  )
}

