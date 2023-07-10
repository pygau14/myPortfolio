import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';
const Contact = () => {
  return (
    <>
    <h2 className="heading">Contact</h2>
    <div className="page">
      
      <p className="subheading">Connect with me through the following mediums:</p>
      <div className="mediums">
        <a href="mailto:gavgau14@gmail.com" target="_blank" rel="noopener noreferrer">
          <FiMail className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-gupta-b47a85185/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin className="icon" />
        </a>
        <a href="https://github.com/pygau14" target="_blank" rel="noopener noreferrer">
          <FiGithub className="icon" />
        </a>
      </div>
      <div className="content">
        <h3 className="section-heading">Let's Connect</h3>
        <p className="description">
          Have a question or want to discuss a project? Feel free to reach out to me using any of the above mediums. I'm
          always interested in new opportunities and collaborations!
        </p>
      </div>
    </div>
    </>
  );
};

export default Contact;
