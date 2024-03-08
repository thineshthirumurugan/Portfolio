import React from 'react'
import "./Experienc.css"

const Experience = ({number,title,style}) => {
  return (
     <div style={{...style}} className='experience'>
        <h1>{number}</h1>
        <p>{title}</p>
     </div>
  )
}

export default Experience