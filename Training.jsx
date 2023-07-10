// components/Training.js

import React from 'react';
import newtonLogo from './newton.png' ; // Import the Newton School logo image
import internshalaLogo from './internshala.png'; // Import the Internshala logo image
import './Training.css';


const Training = () => {
  return (
    <div className="page">
      <h2 className="training-title" id='title2'>Training/Internship</h2>
      <ul className="training-list">
        <li>
          <div className="training-item">
            <div className="company-logo">
              <img src={newtonLogo} alt="Newton School Logo" className="logo-image" />
            </div>
            <div className="training-details">
              <h3 className="company-name">Newton School BootCamp</h3>
              <ul>
                <li>Software Development Engineering (Web) - MERN Stack</li>
                <li><strong>Duration:</strong> Oct 2021 - Apr 2022</li>
                <li>
                  <strong>Description:</strong>
                  <ul>
                  <li>Successfully completed the Newton School BootCamp, showcasing proficiency in MERN Stack development with knowledge of AWS and Kubernetes.</li>
                    <li>Participated in multiple real-world projects and quizzes to enhance practical skills and gain hands-on experience.</li>
                    <li>Demonstrated excellent problem-solving abilities by solving complex problems on platforms like LeetCode, applying algorithmic thinking and coding techniques.</li>
                    <li>Developed full-stack web applications using the MERN (MongoDB, Express.js, React, Node.js) Stack, ensuring seamless integration of front-end and back-end components.</li>
                    <li>Gained expertise in deploying applications on cloud platforms like AWS and utilizing containerization with Kubernetes for scalable and efficient deployment.</li>
                    <li>Collaborated with a diverse team of developers, designers, and product managers, leveraging Agile methodologies to deliver high-quality software products within project timelines.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="training-item">
            <div className="company-logo">
              <img src={internshalaLogo} alt="Internshala Logo" className="logo-image" />
            </div>
            <div className="training-details">
              <h3 className="company-name">Internshala Training</h3>
              <ul>
                <li>Internet Of Things(IoT)</li>
                <li><strong>Duration:</strong> Aug 2020 - Oct 2020</li>
                <li><strong>Certificate No:</strong> 90A5E7E-28CE-E547-C66B-4823B6F6A8E7</li>
                <li>
                  <strong>Description:</strong>
                  <ul>
                    <li>Participated in the Internshala Training on Internet of Things (IoT) during the duration of Aug 2020 to Oct 2020.</li>
                    <li>Gained hands-on experience in working with assembly language and programming Arduino microcontrollers.</li>
                    <li>Explored various IoT concepts and applications, including sensor integration, data acquisition, and IoT communication protocols.</li>
                    <li>Developed and implemented IoT projects, applying the knowledge acquired during the training.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="training-item">
            <div className="company-logo">
              <img src={internshalaLogo} alt="Internshala Logo" className="logo-image" />
            </div>
            <div className="training-details">
              <h3 className="company-name">Internshala Training</h3>
              <ul>
                <li>Ethical Hacking in Web Application</li>
                <li><strong>Duration:</strong> Oct 2020 - Dec 2020</li>
                <li><strong>Certificate No:</strong> 623565F0-FA5E-2C4C-CBEE-5198D5170976</li>
                <li>
                  <strong>Description:</strong>
                  <ul>
                    <li>Successfully completed an eight-week online certified training on Ethical Hacking.</li>
                    <li>Explored topics related to information security, computer networking, web development, and web application attacks.</li>
                    <li>Gained practical knowledge in identifying vulnerabilities, securing networks, and implementing defensive strategies.</li>
                    <li>Achieved a score of 62% in the final assessment, demonstrating a solid understanding of ethical hacking principles and techniques.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Training;
