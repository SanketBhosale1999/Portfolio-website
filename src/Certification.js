// import 'bootstrap/dist/css/bootstrap.min.css';
import "./certification.css"
import az900 from "./Documents/Sanket_Bhosale(AZ-900).pdf"
import dp900 from "./Documents/Sanket_Bhosale(DP-900).pdf"
import pl900 from "./Documents/Sanket_Bhosale(PL-900).pdf"
import dp203 from "./Documents/Sanket_Bhosale(DP-203).pdf"
import dp420 from "./Documents/Sanket_Bhosale(DP-420).pdf"
// import { useState } from 'react';

const Certification = ({theme}) => {
  
  const downloadCertificate = (name, download_certificate_name) => {
    const link = document.createElement('a');
    if (name === 'az900') {
      link.href = az900;
    } else if (name === 'dp900') {
      link.href = dp900;
    } else if (name === 'pl900') {
      link.href = pl900;
    } else if (name === 'dp203') {
      link.href = dp203;
    } else if (name === 'dp420') {
      link.href = dp420;
    }
    link.download = download_certificate_name;
    link.click();
  };

 

  return (
    <div className="certification-container">
      {/* <h2 className='section-title'>Certifications</h2> */}
      <div className={`certification-item ${theme}`}>
        <h4 className='certification-title'>
          <a href='https://learn.microsoft.com/en-us/certifications/exams/az-900/' target='_blank' rel='noopener noreferrer' className='link'>Microsoft Certified Azure fundamentals(Az-900)</a></h4>
        <p className='duration'>June 2021 - Present</p>
        <button
          onClick={() => downloadCertificate('az900', 'Sanket_Bhosale(AZ-900).pdf')}
          className= 'blue-button'
        >
          Download
        </button>
      </div>
      <div className={`certification-item ${theme}`}>
        <h4 className='certification-title'>
          <a href='https://learn.microsoft.com/en-us/certifications/exams/dp-900/' target='_blank' rel='noopener noreferrer' className='link'>Microsoft Certified Azure Data Fundamentals(Dp-900)</a></h4>
        <p className='duration'>September 2021 - Present</p>
        <button
          onClick={() => downloadCertificate('dp900', 'Sanket_Bhosale(DP-900).pdf')}
          className= 'blue-button' 
        >
          Download
        </button>
      </div>
      <div className={`certification-item ${theme}`}>
        <h4 className='certification-title'>
          <a href='https://learn.microsoft.com/en-us/certifications/exams/dp-203/' target='_blank' rel='noopener noreferrer' className='link'>Microsoft certified Azure Data Engineer Associate(DP-203)</a></h4>
        <p className='duration'>August 2022 - Present</p>
        <button
          onClick={() => downloadCertificate('dp203', 'Sanket_Bhosale(DP-203).pdf')}
          className='blue-button' 
        >
          Download
        </button>
      </div>
      <div className={`certification-item ${theme}`}>
        <h4 className='certification-title'>
          <a href='https://learn.microsoft.com/en-us/certifications/exams/dp-420/' target='_blank' rel='noopener noreferrer' className='link'>Microsoft certified Azure Cosmos DB Developer Specialty(DP-420)</a></h4>
        <p className='duration'>August 2022 - Present</p>
        <button
          onClick={() => downloadCertificate('dp420', 'Sanket_Bhosale(DP-420).pdf')}
          className= 'blue-button' 
        >
          Download
        </button>
      </div>
      <div className={`certification-item ${theme}`}>
        <h4 className='certification-title'>
          <a href='https://learn.microsoft.com/en-us/certifications/exams/pl-900/' target='_blank' rel='noopener noreferrer' className='link'>Microsoft Certified Power Platform Fundamentals(PL-900)</a></h4>
        <p className='duration'>December 2022 - present</p>
        <button
          onClick={() => downloadCertificate('pl900', 'Sanket_Bhosale(PL-900).pdf')}
          className= 'blue-button' 
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Certification;
