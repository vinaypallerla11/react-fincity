import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'

const About = () => {
  const navigate = useNavigate();
  
  const navigateToProjects = () => {
    navigate('/projects');
  }
  return (
    <div className='container'>
      <div className='app-container'>
        <div className='description-content'>
          <p className='design'>UI/UX DESIGNER</p>
          <h1 className='main-head'>Hello, my name is    <br/>Modelyn Torff</h1>
          <p className='description'>Short text with details about you,
            what you <br/>do are your professional career. you can add 
            <br/> more information on the about page.
          </p>
          <div className='button-container1'>
            <button onClick={navigateToProjects} className="project-btn">Project</button>
            <button className="linkedin-btn">LinkedIn</button>
          </div>
        </div>        
        <div>
          <img src ="https://res.cloudinary.com/ddehbjyiy/image/upload/v1704574233/img_t4pxef.png" alt="avathar" className="image-pic" />
        </div>
      </div>
    </div>
  );
}

export default About;
