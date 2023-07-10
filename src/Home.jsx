// components/Home.js

import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import logo1 from './logo001.png';
import cap from './capsule.jpg';
import party from './party.jpg';

const Home = () => {
  const projects = [
    {
      name: 'Intelligence Career Institute',
      description: 'I developed a comprehensive Student Learning Management System (LMS) web application as a Full Stack Developer. The app provides users with access to a wide range of features, including book viewing, question practice, test-taking capabilities, and an admin panel for managing the system.',
      image: logo1,
    },
    {
      name: 'Capsule App',
      description: 'As a Backend Developer, I played a key role in the development of a project using Node.js. I built and implemented a set of powerful APIs, including user creation, chapter retrieval, test-set retrieval, test management, scoring, and an admin panel. Additionally, I designed and structured the app\'s database using MySQL to ensure efficient data management.',
      image: cap,
    },
    {
      name: 'House Party',
      description: 'As a Frontend Developer, I contributed to the creation of a web application using HTML, CSS, and React.js. The app features a user-friendly dashboard that caters to different types of users, including customers and vendors. Users can showcase their event venues and services for online parties, while an admin role is responsible for approving vendor-added places.',
      image: party,
    },
  ];

  const handleAddToCart = (project) => {
    // Add project to cart
    console.log(`Added "${project.name}" to cart`);
  };

  return (
    <div className="page">
      <h1 className="heading">
      Step into a World of Webmasterpieces!  <span className="highlight">🚀</span>
      </h1>
      <p className="description">
      Unveiling the Wonders of the <span className='highlight'>MERN Stack and Automation Testing</span> , I blend creativity and expertise to sculpt captivating websites that mesmerize and perform flawlessly. Witness the artistry of a seasoned virtuoso as I breathe life into the digital realm, crafting stunning web experiences with finesse.
      </p>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-name" id='proName'>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
            </div>
            <Link to="/projects">
            <div className="overlay">
              <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
            </div>
            </Link>
            
          </div>
        ))}
      </div>


      <div className="container">
      <div className="about-me">
        <h1 className="title">Welcome to My World</h1>
        <p className="description">
          Unleashing the Boundless Potential of Web Development and Automation Testing 🌟<br />
          My name is <span className="name">Gaurav Gupta</span>, a proud graduate with a degree in Electronics and Communication Engineering. However, my true passion lies in the captivating realm of web development and testing.
          <br /><br />
          Embarking on a transformative journey at Newton School, I immersed myself in the enchanting world of the MERN Stack. During my immersive 6-month internship, I honed my skills, partook in exhilarating hackathons, and conquered countless coding challenges on platforms like LeetCode.
          <br /><br />
          While I cherish quiet moments playing chess and indulging in captivating web series, my true zest ignites when I delve into the intricate realms of <span className='name'> AI, MERN Stack, Selenium</span>  and cutting-edge technology gadgets. Brace yourself, for once the floodgates of knowledge open, there's no shutting me up!
          <br /><br />
          My heart resonates with the pulsating beats of Hip-Hop, and I find solace in the captivating world of Anime, with "Bleach" reigning supreme in my heart. Constantly seeking self-improvement, I relentlessly upgrade my skills, nurturing my inner peace while chasing the dream of revolutionizing the world with advanced technologies.
          <br /><br />
          Join me on this exhilarating adventure as we reshape the future, fueled by innovation and propelled by the dreams of a middle-class family yearning to create a new technological era.
        </p>
      </div>
    </div>

    </div>
    
  );
};

export default Home;
