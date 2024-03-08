// import { IconButton } from '@material-ui/core'
// import React from 'react'
// import { Element } from 'react-scroll'
// import "./Contact.css"

// const Contact = () => {
//   return (
//     <Element className='contact' id='contact'>
//         <h1>Contact</h1>
//         <div className='contactcontainer'>
//             <p>
//                 Contact Number : <span>+91-9025851189</span>
//             </p>
//             <p className='demo'>
//                 Email :  <span>thineshtthirumurugan@gmail.com</span>
//             </p>
//             <p>
//                 <a href='https://www.linkedin.com/in/thinesh-t-902744223/'><span>LinkedIn</span>
//                 </a> | <a href='https://github.com/thineshthirumurugan'><span>GitHub</span>
//                 </a> | <a href='https://leetcode.com/Thinesh21/'><span>LeetCode</span>
//                 </a> | <a href='https://www.codechef.com/users/thinesh21'><span>CodeChef</span>
//                 </a> | <a href='https://www.hackerrank.com/profile/thineshtthirumu1'><span>HackerRank</span>
//                 </a>
//             </p>
//         </div>
//     </Element>
//   )
// }

// export default Contact
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    
    <Container fluid className="footer" id="join-with-me"  style={{ bottom: 0, left: 0, right: 0, backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

    <h3>Designed and Developed by Thinesh</h3>
    <h3>Copyright © {year} TT</h3>

    <div className="footer-icons" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <a
            href="https://www.linkedin.com/in/thineshthirumurugan/"
            style={{ color: "white", margin: '0 10px' }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedinIn />
        </a>

        <a
            href="https://github.com/thineshthirumurugan"
            style={{ color: "white", margin: '0 10px' }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <AiFillGithub />
        </a>

        <a
            href="https://leetcode.com/Thineshthirumurugan/"
            style={{ color: "white", margin: '0 10px' }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <SiLeetcode />
        </a>

        <a
            href="https://twitter.com/thinezh_t"
            style={{ color: "white", margin: '0 10px' }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <AiOutlineTwitter />
        </a>
    </div>

</Container>


  );
}

export default Footer;



