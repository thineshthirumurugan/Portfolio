import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css"
import image from '../../images/image.jpeg'
const TopContent = () => {
  return (
    <div className='topcontent'>
          <div class="rounded-image-container">
            <img  src={image} alt="Your Image Description"/>
          </div>
        <div className='topcontent_container'>  
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=500&size=40&duration=50&pause=1000&color=9BB8F7&random=false&width=610&height=66&lines=+Hi+There!+%F0%9F%91%8B%F0%9F%8F%BB" alt="Typing SVG" /></a>             
              <div>
              <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=500&size=40&duration=2000&pause=1000&color=FFFFFF&random=false&width=610&height=60&lines=+I'm+Thinesh+Thirumurugan" alt="Typing SVG" /></a>              
              </div>                
              <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=500&size=30&duration=1&pause=1000&color=9BB8F7&random=false&width=435&height=66&lines=MERN+STACK+DEVELOPER" alt="Typing SVG" /></a>              
              <p>As a passionate MERN stack developer, I find solace and excitement at the intersection of creativity and code. A self-motivated individual endowed with a profound reservoir of skills and an innate self-driven ethos, I am adept at seamlessly adapting to any situation. My professional journey is marked by a demonstrable track record that not only highlights my capacity for personal growth but also underscores my exceptional ability to cultivate the development of both myself and those around me. Coding at the forefront of my endeavors, I bring a dynamic approach to problem-solving, coupled with a relentless pursuit of innovation. My proficiency in the MERN stack is not just a skill set but a catalyst for turning ideas into robust and scalable solutions. Let's code the future together!</p>
              
              <a href='https://drive.google.com/file/d/1r1UPgBXkGeHG41y5vMWfaSy4te_tVA_8/view?usp=drive_link'>
                <button className='topcontent-downloadbutton'><h4>View Resume</h4></button>
              </a>
              <Link to="projects" smooth={true} duration={500}>
                <button className='topcontent-myworkbutton'><h4>My Work</h4></button>
              </Link>
        </div>
    </div>
  )
}

export default TopContent