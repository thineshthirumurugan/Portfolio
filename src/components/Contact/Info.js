import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { MdMarkEmailRead ,  MdPhone  } from "react-icons/md";
  import { SiLeetcode } from "react-icons/si";
  import './Contact.css'

export default function Info() {
  return (
    <Container id='contact'className='contact_info'>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{marginBottom:'10px', letterSpacing:'10px', fontFamily: "Alata"}}>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thineshthirumurugan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/thineshthirumurugan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/Thineshthirumurugan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScXljgqsmCVmhZSzZWbfwPVbfBSgMWZbLcXcfJZszFsznfJnThSSczlwMxvSPMFKMSZdM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdMarkEmailRead />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/thinezh_t"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
             
              
              <li className="social-icons">
                <a
                  href="tel:+919025851189"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  )
}
