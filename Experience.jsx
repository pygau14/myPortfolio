// components/Experience.js

import React from 'react';
import companyLogo from './company.jpg'; // Import the company logo image
import './Experience.css';

const Experience = () => {
  return (
    <div className="page">
      <h2 className="experience-title" id='title'>Experience</h2>
      <div className="experience-details">
        
        <div className="company-details">
        <img src={companyLogo} alt="Company Logo" className="logo-image"  id='imageC'/>
          <h3 className="company-name">InCred</h3>
          <p className="position">Software Test Engineer</p>
          <p className="duration">April 2022 to June 2023</p>
        </div>
        <div className="description">
          <p>
            <strong>Description:</strong>
          </p>
          <ul className="description-list">
            {/* Rest of the content */}
            <li>
              Worked as a Software Test Engineer at InCred, where I gained extensive experience in testing various components of the software application.
            </li>
            <li>
              Utilized Selenium with Java for UI testing, leveraging both TestNG and Cucumber frameworks. Conducted thorough UI testing to ensure a seamless user experience.
            </li>
            <li>
              Employed RestAssured framework for API testing, guaranteeing the reliability and functionality of backend services.
            </li>
            <li>
              Conducted Load testing using JMeter to evaluate the system's performance under different workloads, ensuring its scalability.
            </li>
            <li>
              Employed MounteBank to create mocks of the API, streamlining the testing process and ensuring compatibility.
            </li>
            <li>
              Followed Agile methodologies and actively participated in sprint planning, daily stand-ups, and retrospectives. Collaborated with cross-functional teams to deliver high-quality software within project timelines.
            </li>
            <li>
              Implemented TDD (Test-Driven Development) and BDD (Behavior-Driven Development) approaches to develop reliable and maintainable test suites.
            </li>
            <li>
              Developed comprehensive test plans and executed test cases to identify and report defects, ensuring the overall quality of the software application.
            </li>
            <li>
              Acquired proficiency in JIRA for managing project tasks, tracking issues, and documenting test cases and results.
            </li>
            <li>
              Developed problem-solving skills and acquired knowledge of AWS for deploying and managing applications in the cloud environment.
            </li>
            <li>
              Implemented Jenkins for continuous integration and deployment, enabling automation scripts to be automatically triggered upon code changes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
