import React, { useState } from 'react'
import "./Project.css"

const Project = ({img,title,description,link}) => {
    const [show,setShow]=useState(false)

  return (
    
    <a href={link}>
      <h3 style={{ color: '#f64c08' }}>{title}</h3>
      <h6 style={{ color: 'white', marginBottom: '0', display: 'flex', alignItems: 'center' , paddingTop: '10px'}}>
        Click here to view &nbsp; <span>&#9662;</span>
      </h6>
        <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        {
            show ? (
                <div className='project_content'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
             ) : (
                <img src={img} alt=''/>
             )
        }
        </div>
    </a>
   
  )
}

export default Project