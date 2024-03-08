import React from 'react'
import { Element } from 'react-scroll'
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"
import skills from "../../images/skill2.gif"

const SkillContainer = () => {
  return (
    <Element className='skillcontainer' id='skills' >
        <div className='skillcontainer_image'>
            <img src={skills} alt="" />
        </div>
        <div className='skillcontainer_text'>
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=&size=40&duration=2000&pause=1000&color=F7F7F7&random=false&width=435&height=70&lines=SKILL+SET" alt="Typing SVG" /></a>
            <div className='skillcontainer_skillset'>
                <h4>Java</h4>
                <div className='skillcontainer_slider skillcontainer_slider1'>
                        <LinearProgress variant='determinate' value={80}></LinearProgress>
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h4>React Js</h4>
                <div className='skillcontainer_slider skillcontainer_slider2'>
                        <LinearProgress variant='determinate' value={70}></LinearProgress>
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h4>Express.Js</h4>
                <div className='skillcontainer_slider skillcontainer_slider3'>
                        <LinearProgress variant='determinate' value={50}></LinearProgress>
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h4>My SQL</h4>
                <div className='skillcontainer_slider skillcontainer_slider4'>
                        <LinearProgress variant='determinate' value={90}></LinearProgress>
                </div>
            </div>

            <div  className='skillcontainer_skillset'>
                <h4>C</h4>
                <div className='skillcontainer_slider skillcontainer_slider5'>
                        <LinearProgress variant='determinate' value={80}></LinearProgress>
                </div>
            </div>

            <div className='skillcontainer_skillset'>
                <h4>MongoDB</h4>
                <div className='skillcontainer_slider skillcontainer_slider6'>
                        <LinearProgress variant='determinate' value={50}></LinearProgress>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer