import profile from "./Documents/profile.jpg";
import React from "react";
import "./home.css";
import resume from "./Documents/resume_Sanket_Bhosale.pdf";

const downloadResume=()=>{
  const link=document.createElement('a')
  link.href=resume
  link.download="Sanket_resume.pdf"
  link.click()
}

const Home = ({theme}) => {
  return (
    <div className={`background ${theme}`}>
      
      <div className="square-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="far fa-envelope"></i>
            <span>sanketbhosale4898@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>9112454898</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="contanct-item">
              <div >
              <i className="fa fa-download" style={{color: "black"}}></i>
                <button className="download-button"  onClick={downloadResume}>
                 Download Resume
                </button>
              </div>
          </div>
        </div>
        <div className="profile-info">
          <div>
            <h6 className="name">Sanket Bhosale</h6>
          </div>
          <div className="profile-image-container">
            <img src={profile} alt="profile image" className="profile-image" />
          </div>
        </div>
      </div>
      <div className="info-box-container">
        <div className="info-box">
            <div className="about-header">
              <h2>About Me</h2>
              <p>
                Hello! My name is Sanket Bhosale. I am a Computer Engineering graduate from Savitribai Phule Pune University. I have a passion for coding and problem-solving. Currently, I am working as a Microsoft Purview Developer at Tata Consultancy Services, where I am involved in developing data governance solutions using Azure Purview and TCS accelerators.
              </p>
              <p>
                I have experience in working with technologies such as C, Java, C#, MySQL, Python, React, and Azure. I have also completed multiple certifications in the field of Azure, including fundamental and data-related certifications.
              </p>
              <p>
                In my free time, I enjoy working on personal projects, such as developing a Rock, Paper, Scissors game using image processing and working on IoT-based projects like Smart Dustbins. I am always eager to learn and explore new technologies to enhance my skills.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
