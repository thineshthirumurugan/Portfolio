import React from 'react'
import { Element } from 'react-scroll'
import "./ExperienceContainer.css"
import Experience from './Experience'

const ExperienceContainer = () => {
  return (
    <Element className='experiencecontainer' id='exp'>
        <h1>Experience</h1>
        <div className='experiencecontainer_info'>
            <Experience number="+10" title="Clients"/>
            <Experience number="+60" title="Projects" style={{  backgroundColor: "#f64c08"}}/>
            <Experience number="+50" title="Years Teaching"/>
            <Experience number="+30" title="Students"/>
        </div>
    </Element>
  )
}

export default ExperienceContainer