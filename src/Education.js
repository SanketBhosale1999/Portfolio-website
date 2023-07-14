import React, { useState } from "react";
import "./Education.css";

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <p>{project}</p>
        </li>
      ))}
    </ul>
  );
};

const Education = ({theme}) => {
  const [flippedBoxes, setFlippedBoxes] = useState([false, false, false]);

  const handleClick = (index) => {
    const newFlippedBoxes = [...flippedBoxes];
    newFlippedBoxes[index] = !newFlippedBoxes[index];
    setFlippedBoxes(newFlippedBoxes);
  };

  const projectDetails = [
    "Rock, Paper, Scissors Game using Image Processing (01/2020 - 03/2020)",
    "Smart Dustbins (07/2019 - 08/2019)",
    "Reducing Covid-19 Risk Using Face Touch Detection (06/2020 - 06/2021)",
  ];

  return (
    <div className="education-container">
      <div
        className={`education-box ${flippedBoxes[0] ? "flipped" : ""} ${theme}`}
        onClick={() => handleClick(0)}
      >
        <div className="front">
          <div className="education-item">
            <h3>Bachelor's of Engineering</h3>
          </div>
          <div className="flip-flop">
            <i className="fas fa-sync-alt fa-circle fa-spin"></i>
          </div>
        </div>
        <div className="back">
          <div className="education-item-back">
            <p>
              <strong>Name of the Institute/University:</strong>
              <a href='http://www.unipune.ac.in/' target="_blank" rel="noopener noreferrer" className="link">Savitribai Phule Pune University</a> 
            </p>
          </div>
          <div className="education-item-back">
            <p>
              <strong>College:</strong> 
              <a href='http://cms.sinhgad.edu/sinhgad_engineering_institutes/skncoe_vadgaon/institute_details.aspx' target="_blank" rel="noopener noreferrer" className="link">Smt. Kashibai Navale College Of Engineering</a> 
            </p>
          </div>
          <div className="education-item-back">
            <p>
              <strong>Stream:</strong> Computer Engineering
            </p>
          </div>
          <div className="education-item-back">
            <p>
              <strong>Equivalent Marks/CGPA:</strong> 8.71
            </p>
          </div>
          <div className="education-item-back">
            <p>
              <strong>Duration:</strong> June 2017 - June 2021
            </p>
          </div>
          <div className="education-item-back">
            <strong>Important Projects:   </strong>
            <ProjectList projects={projectDetails} />
          </div>
        </div>
      </div>
      <div
        className={`education-box ${flippedBoxes[1] ? "flipped" : ""} ${theme}`}
        onClick={() => handleClick(1)}
      >
        <div className="front">
          <div className="education-item">
            <h3>All India Senior Secondary Examinations</h3>
          </div>
          <div className="flip-flop">
            <i className="fas fa-sync-alt fa-circle fa-spin"></i>
          </div>
        </div>
        <div className="back">
          <div className="education-item-back">
            <p><strong>Name Of College/Board:</strong>
              <a href="https://www.mahahsscboard.in/" target="_blank" rel="noopener noreferrer" className="link">Maharashtra State Board</a> 
            </p>
          </div>
          <div className="education-item-back">
            <p><strong>School:</strong> L G Bansude School & junior College</p>
          </div>
          <div className="education-item-back">
            <p><strong>Stream:</strong> Science</p>
          </div>
          <div className="education-item-back">
            <p><strong>Percentage:</strong> 79.23%</p>
          </div>
          <div className="education-item-back">
            <p><strong>Duration:</strong> June 2016- June 2017</p>
          </div>
          
          <div className="education-item-back">
            <p><strong>Location:</strong>Indapur, Maharashtra 413132</p>
          </div>
          <div className="education-item-back">
            <p><strong>Relevant Coursework:</strong>Physics,Chemistry,Mathematics</p>
          </div>
          <div className="education-item-back">
            <p><strong>Honors/Awards:</strong>Subject topper in Mathematics</p>
          </div>

      
        </div>
      </div>
      <div
        className={`education-box ${flippedBoxes[2] ? "flipped" : ""} ${theme}`}
        onClick={() => handleClick(2)}
      >
        <div className="front">
          <div className="education-item">
            <h3>All India Secondary Examinations</h3>
          </div>
          <div className="flip-flop">
            <i className="fas fa-sync-alt fa-circle fa-spin"></i>
          </div>
        </div>
        <div className="back">
          <div className="education-item-back">
            <p><strong>Name of College/Board:</strong>
             <a href='https://www.mahahsscboard.in/' target="_blank" rel='noopener noreferrer' className="link">Maharashtra State Board</a> 
            </p>
          </div>
          <div className="education-item-back">
            <p><strong>School:</strong> Shri Narayandas Ramdas High School And Junior College</p>
          </div>
          <div className="education-item-back">
            <p><strong>Stream:</strong> 10th Board</p>
          </div>
          <div className="education-item-back">
            <p><strong>Percentage:</strong> 87%</p>
          </div>
          <div className="education-item-back">
            <p><strong>Duration:</strong> June 2014 - June 2015</p>
          </div>
          <div className="education-item-back">
            <p><strong>Location:</strong>Indapur, Maharashtra 413132</p>
          </div>
          <div className="education-item-back">
            <p><strong>Relevant Coursework:</strong>Mathematics,Science</p>
          </div>
          <div className="education-item-back">
            <p><strong>Honors/Awards:</strong>Subject topper in Mathematics</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Education;
