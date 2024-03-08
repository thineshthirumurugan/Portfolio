import React from 'react'
import {Link} from "react-scroll"
import "./Header.css"
import logo from "../../images/logo.jpg"


const Header = () => {
  return (
    <div className="header">
        <div className='header_left'>
            <img src={logo} alt='' />
            <h1>Th<span>in</span>e<span>sh</span></h1>
        </div>
        <div className='header_right'>
            <Link to="about" smooth={true} duration={500}>
                <h4>
                    About Me
                </h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                <h4>
                    Skills
                </h4>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
                <h4>
                    Projects
                </h4>
            </Link>
            {/* <Link to="exp" smooth={true} duration={500}>
                <h4>
                    Experience
                </h4>
            </Link> */}
            <Link to="contact" smooth={true} duration={500}>
                <h4>
                    Contact
                </h4>
            </Link>
            <Link to="join-with-me" smooth={true} duration={500}>
            <h4 style={{backgroundColor:'#f64c08' , color:'white',padding:'5px 20px', borderRadius:'2px',cursor:'pointer'}}>Join with me</h4>
            </Link>
        </div>
    </div>
  )
}

export default Header