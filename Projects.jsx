// components/Projects.js

import React from 'react';
import intelligenceCareerLogo from './logo001.png'; // Import the Intelligence Career Institute logo image
import capsuleAppLogo from './capsule.jpg'; // Import the Capsule App logo image
import { FiExternalLink, FiCode } from 'react-icons/fi'; // Import the external link and code icons from react-icons
import './Projects.css';
import ocr from './ocr.png';
import digital from './digital.jpg';
import party from './party.jpg';

const Projects = () => {
  return (
    <div className="page">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <div className="project-image">
            <img src={intelligenceCareerLogo} alt="Intelligence Career Institute Logo" className="logo-image" />
          </div>
          <div className="project-details">
            <h3 className="project-name">ICI Web App</h3>
            <ul>
              <li>
                <span className="detail-label">Duration:</span> 05 March 2023 - 06 June 2023
              </li>
              <li>
                <div className="links">
                  <span className="detail-label">Links:</span>
                  <a href="https://www.intelligencecareerinstitute.com/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a href="https://github.com/pygau14/ICI_main" target="_blank" rel="noopener noreferrer" className="code-link">
                    <FiCode className="link-icon" />
                  </a>
                </div>
              </li>
              <li id='techStack'>
                <span className="detail-label" >Tech Stack:</span> HTML, CSS, JavaScript, NodeJS, MySQL
              </li>
              <li>
                <span className="detail-label" >Role:</span> Full Stack Developer
              </li>
              <li id='description'>
                <span className="detail-label" >Description:</span>
                <ul className="description-list">
                  <li>A comprehensive Student Learning Management System (LMS) web app was developed using the mentioned tech stack.</li>
                  <li>Students can choose courses, practice questions, take tests, and access PDF files for learning.</li>
                  <li>The LMS maintains user records and history for performance analysis, including a leaderboard.</li>
                  <li>An admin panel was created to manage ebooks, courses, students, and analyze performance.</li>
                </ul>
              </li>
              <li id='problem'>
                <span className="detail-label" >Problems Encountered:</span>
                <ul className='description-list'>
                  <li>The database architecture posed a challenge in designing the table structure and establishing efficient communication between tables.</li>
                  <li>Image handling using Multer during the Sign Up process caused issues due to problems with the upload path and suboptimal configuration.</li>
                  <li>Implementing MathJax rendering to display mathematical syntax presented difficulties in achieving the desired functionality.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={capsuleAppLogo} alt="Capsule App Logo" className="logo-image" />
          </div>
          <div className="project-details">
            <h3 className="project-name">Capsule App</h3>
            <ul>
              <li>
                <span className="detail-label">Duration:</span> 10 June 2023 - 01 July 2023
              </li>
              <li>
                <div className="links">
                  <span className="detail-label">Links:</span>
                  <a href="https://play.google.com/store/apps/details?id=co.brown.floea&pli=1" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a href="https://github.com/pygau14/capsule-backend" target="_blank" rel="noopener noreferrer" className="code-link">
                    <FiCode className="link-icon" />
                  </a>
                </div>
              </li>
              <li id='techStack'>
                <span className="detail-label">Tech Stack:</span> NodeJs , ExpressJS ,  MySQL , Postman
              </li>
              <li>
                <span className="detail-label" >Role:</span> Back End Developer
              </li>
              <li id='description'>
                <span className="detail-label">Description:</span>
                <ul className="description-list">
                  <li>The backend/APIs for the project were developed entirely using Node.js, providing functionalities such as user creation, fetching chapters, retrieving test sets, retrieving questions for test sets, calculating scores, fetching user history, and retrieving performance statistics.</li>
                  <li>The system incorporates a comprehensive backend infrastructure to support various user-oriented features and interactions.</li>
                  <li>Node.js was chosen as the primary technology for its efficiency and scalability in handling backend operations.</li>
                  <li>The APIs were designed to facilitate seamless communication between the frontend and backend, ensuring a smooth user experience.</li>
                </ul>
              </li>
              <li id='problem'>
                <span className="detail-label" >Problems Encountered:</span>
                <ul className='description-list'>
                  <li>The implementation of a PDF viewer similar to Kindle, enabling users to make annotations and highlights, introduced challenges in determining the most suitable storage approach.</li>
                  <li>Deciding whether to save the annotations and highlights in localStorage or directly on the server posed difficulties in balancing factors such as data security, accessibility, and synchronization.</li>
                  <li>To address this, a solution was devised to initially store the annotation and highlight data locally and then implement an event-based cron job for periodic synchronization and storage of the data on the server.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={ocr} alt="OCR Logo" className="logo-image" />
          </div>
          <div className="project-details">
            <h3 className="project-name">Indian Govt Docs OCR</h3>
            <ul>
              <li>
                <span className="detail-label">Duration:</span> 10 March 2023 - 20 March 2023
              </li>
              <li>
                <div className="links">
                  <span className="detail-label">Links:</span>
                  <a href="https://github.com/pygau14/INDIAN_OCR" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a href="https://github.com/pygau14/INDIAN_OCR" target="_blank" rel="noopener noreferrer" className="code-link">
                    <FiCode className="link-icon" />
                  </a>
                </div>
              </li>
              <li id='techStack'>
                <span className="detail-label">Tech Stack:</span> ReactJs , NodeJs , ExpressJS ,  TesseractJS
              </li>
              <li>
                <span className="detail-label" >Role:</span> Back End Developer
              </li>
              <li id='description'>
                <span className="detail-label">Description:</span>
                <ul className="description-list">
                  <li>Developed a web app for uploading Indian Government IDs (Aadhar card, Pan card, Passport).</li>
                  <li>Implemented TessarctJS for extracting relevant info from the uploaded IDs.</li>
                  <li>Converted the extracted data into JSON format for easy display.</li>
                </ul>
              </li>
              <li id='problem'>
                <span className="detail-label" >Problems Encountered:</span>
                <ul className='description-list'>
                  <li>TessarctJS occasionally extracted irrelevant details along with the required information.</li>
                  <li>Some ID documents, like Aadhar cards, had incomplete Document ID extraction (only first 4-5 digits captured).</li>
                  <li>Trained a model to improve extraction accuracy and address these issues.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={digital} alt="Digital Signage Logo" className="logo-image" />
          </div>
          <div className="project-details">
            <h3 className="project-name">Digital Signage System</h3>
            <ul>
              <li>
                <span className="detail-label">Duration:</span> 01 Feb 2023 - 01 March 2023
              </li>
              <li>
                <div className="links">
                  <span className="detail-label">Links:</span>
                  <a href="https://github.com/pygau14/Digital-Signage-System" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a href="https://github.com/pygau14/Digital-Signage-System" target="_blank" rel="noopener noreferrer" className="code-link">
                    <FiCode className="link-icon" />
                  </a>
                </div>
              </li>
              <li id='techStack'>
                <span className="detail-label">Tech Stack:</span> ReactJs , Firebase Real-time Db , Arduino Language
              </li>
              <li>
                <span className="detail-label" >Role:</span> System Developer
              </li>
              <li id='description'>
                <span className="detail-label">Description:</span>
                <ul className="description-list">
                  <li>Developed a web app as a CMS (Content Management System) for digital signage systems.</li>
                  <li>Admin can use the web app to monitor and manage various screens in the system.</li>
                  <li>The CMS allows the admin to change pre-recorded videos and design layouts for the screens.</li>
                  <li>Integrated Arduino code for controlling multiple screens using IoT (Internet of Things) technology.</li>
                </ul>
              </li>
              <li id='problem'>
                <span className="detail-label" >Problems Encountered:</span>
                <ul className='description-list'>
                  <li>Handling multiple screens asynchronously posed a significant challenge.</li>
                  <li>The system required simultaneous video distribution and IoT code execution across multiple screens.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src={party} alt="House Party Logo" className="logo-image" />
          </div>
          <div className="project-details">
            <h3 className="project-name">House Party Web App</h3>
            <ul>
              <li>
                <span className="detail-label">Duration:</span> 10 June 2023 - 01 July 2023
              </li>
              <li>
                <div className="links">
                  <span className="detail-label">Links:</span>
                  <a href="https://demo.housepartybyunited.com" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink className="link-icon" />
                  </a>
                  <a href="https://github.com/pygau14/houseparty" target="_blank" rel="noopener noreferrer" className="code-link">
                    <FiCode className="link-icon" />
                  </a>
                </div>
              </li>
              <li id='techStack'>
                <span className="detail-label">Tech Stack:</span> ReactJs , NodeJs , ExpressJs , MySQL
              </li>
              <li>
                <span className="detail-label" >Role:</span> Full Stack Developer
              </li>
              <li id='description'>
                <span className="detail-label">Description:</span>
                <ul className="description-list">
                  <li>Developed a web app providing a dashboard for users to track and manage their party hosting and attendance.</li>
                  <li>The app caters to three types of users: regular users who can book parties or places to chill, vendors who offer party venues, and admins who approve vendors and their prices, as well as user bookings.</li>
                </ul>
              </li>
              <li id='problem'>
                <span className="detail-label" >Problems Encountered:</span>
                <ul className='description-list'>
                  <li>Creating the web pages for the website using HTML and CSS was relatively straightforward.</li>
                  <li>However, integrating the HTML/CSS pages with the ReactJS-based dashboard posed challenges.</li>
                  <li>The integration process required careful handling to ensure seamless functionality and user experience.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
