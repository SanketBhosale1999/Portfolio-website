import React, {useState} from 'react';
import "./workExperience.css"
import { ArrowLeft ,ArrowRight } from '@mui/icons-material';

const WorkExperience = ({theme}) => {
  const [activeCustomerEngagementBoxIndex, setActiveCustomerEngagementBoxIndex] = useState(0);
  const [activeDevelopmentBoxIndex, setActiveDevelopmentBoxIndex] = useState(0);
  const [activateOtherResponsibilityBoxIndex,setActiveOtherResponsibilityBoxIndex]=useState(0);

  const Developmentboxes = [
    {
      title: "Developer @ Microsoft Business Unit",
      content: [
        "Assistance in developing our own Data Governance Framework called iDataGov that uses Azure Purview service with some TCS accelerators.",
       
      ]
    },
    {
      title: "Developer @ Microsoft Business Unit",
      content: [
        <br></br>,
        'Developed custom connectors that harness the application of REST API to connect data sources to Microsoft Purview that are otherwise not supported by Microsoft Purview.',
        <div className="bullet-list">
           <strong>Developed custom solutions for Azure Purview, including:</strong>
          <ul>
            <li>Custom lineages in Purview.</li>
            <li>Solution to extract data from Purview.</li>
            <li>Customization for bulk mapping of contact and glossary.</li>
            <li>Asset description mapping.</li>
          </ul>
        </div>,
        
      ]
    },
    {
      title: "Developer @ Microsoft Business Unit",
      content: [
        <br></br>,
        <strong> Highlighted Development : Developed the email notification alert feature in Azure Purview. This feature leveraged Azure Function App, Event Hub, and Azure REST API to enable real-time notifications for various activities within the Purview data governance platform.</strong>,
        <br></br>,
        <div className="bullet-list">
          <p>Technical Details:</p>
          <ul>
              <li>Implemented an Azure Function App to serve as the backend for the email notification system.</li>
              <li>Integrated the Azure Function with the Event Hub to receive real-time events and trigger email notifications.</li>
              <li>Utilized Azure REST API to interact with the Purview platform and retrieve relevant activity data.</li>
              <li> Developed custom logic to process and filter the events, ensuring that only the desired activities trigger notifications.</li>
              <li>Leveraged SMTP (Simple Mail Transfer Protocol) to send emails containing activity details to the designated recipients.</li>
              <li>Configured the email templates to provide clear and concise information about the specific activities that occurred in Purview.</li>
              <li>Implemented proper error handling and logging mechanisms to ensure reliable and robust operation of the email notification system.</li>
              

          </ul>
          <br></br>
          <p>This email notification feature significantly enhances the Purview user experience by providing proactive alerts about important activities happening within the data governance platform. It allows users to stay informed and take necessary actions in a timely manner, promoting better data management and governance practices.</p>
        </div>
      ]
    }
  ];
  const CustomerEngagementboxes = [
    {
      title: "Customer Engagement",
      content: [
       "Part of POCs and MVPs to implement data governance in client environment with Azure Data Governance Solution Microsoft Purview and iDataGov."
      ]
    },
    {
      title: "Customer Engagement",
      content: [
        <div className="bullet-list">
          <br></br>
            <strong >Leader in international oil and gas exploration and production:</strong>
            <ul>
              <li>Integration of different data sources under a single platform for capturing metadata.</li>
              <li>Build end-to-end lifecycle of data assets to have granular visibility.</li>
              <li>Designate experts and owners for having data accountability.</li>
              <li>Curated business vocabulary and classification tags for removing the ambiguity.</li>
              <li>Implemented role-based access control within data estate to restrict metadata access.</li>
              <li>Implemented Custom Lineages to track the full lifecycle of data in the estate.</li>
            </ul>
        </div>
      ]
    },
    {
      title: "Customer Engagement",
      content: [
        <br></br>,
        <div className='bullet-list'>
           <strong>​Wire Manufacture Company:</strong>
           <ul>
              <li>Discovered the metadata from various sources like Azure Data Lake, Synapse, Power BI, and SQL Server.</li>
              <li>Built data catalog and Data Map with schema information for various domains and cockpits.</li>
              <li>Captured the data life cycle of the assets included in reports.</li>
             <li>Implemented a Workflow Approval mechanism for Glossary terms to help standardize processes and establish organizational rules.</li>
           </ul>
      </div>
      ]
    }
  ];

  const OtherResponsibilityboxes=[
    {
      title: "Other Responsibilities",
      content : [
        "Collaborated with the team to design and develop a robust backend API using Python, hosted on Azure Functions.",
        "Integrated Azure Functions to enable seamless hosting and management of the backend API, ensuring scalability and reliability.",
      ]
    },
    {
      title :"Other Responsibilities",
      content : [
        "Collaborated closely with stakeholders to understand requirements and deliver effective solutions that meet business needs.",
        "Utilized Python, SQL, C#, and Java for the backend development of the TCS industrial data governance portal.",
        "Utilized React  for frontend development of the TCS industrial data governance portal."
      ]
    }
  ];

  const handleArrowClickOfOtherResponsibility = (direction) => {
    if (direction === 'left') {
      setActiveOtherResponsibilityBoxIndex((prevIndex) =>
        prevIndex === 0 ? OtherResponsibilityboxes.length - 1 : prevIndex - 1
      );
    } else if (direction === 'right') {
      setActiveOtherResponsibilityBoxIndex((prevIndex) => (prevIndex === OtherResponsibilityboxes.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleArrowClickOfCustomerEngagement = (direction) => {
    if (direction === 'left') {
      setActiveCustomerEngagementBoxIndex((prevIndex) =>
        prevIndex === 0 ? CustomerEngagementboxes.length - 1 : prevIndex - 1
      );
    } else if (direction === 'right') {
      setActiveCustomerEngagementBoxIndex((prevIndex) => (prevIndex === CustomerEngagementboxes.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleArrowClickOfDevelopmentBox = (direction) => {
    if (direction === 'left') {
      setActiveDevelopmentBoxIndex((prevIndex) => (prevIndex === 0 ? Developmentboxes.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setActiveDevelopmentBoxIndex((prevIndex) => (prevIndex === Developmentboxes.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className={`work-experience-container ${theme}`}>
      <div className={`Title ${theme}`}>
        <span className={`profile-icon ${theme}`}>
          <i className="fas fa-user" />
        </span>
        <div className="title-and-duration">
          <h3>Systems Engineer at Tata Consultancy Services</h3>
          <h5 className={`duration ${theme}`}>
            Duration - July 2021 to Present, Pune, India
          </h5>
        </div>
      </div>
      <div className={`box ${theme}`}>
        <div className="arrow-container">
          <ArrowLeft className="arrow arrow-left" onClick={() => handleArrowClickOfDevelopmentBox('left')} />
        </div>
        <div className="box-content">
          <div className='development-title' >{Developmentboxes[activeDevelopmentBoxIndex].title}</div>
          <div className='development-content'>
          {Developmentboxes[activeDevelopmentBoxIndex].content.map((item, index) => (
            <p className='text' key={index}>{item}</p>
          ))}
          </div>
         
        </div>
        <div className="arrow-container">
          <ArrowRight className="arrow arrow-right" onClick={() => handleArrowClickOfDevelopmentBox('right')} />
        </div>
        {activeDevelopmentBoxIndex === 0 && (
          <div className="swipe">
            Swipe to know about the accelerators' development
          </div>
        )}
      </div>
      
      <div className={`box ${theme}`}>
        <div className="arrow-container">
          <ArrowLeft className="arrow arrow-left" onClick={() => handleArrowClickOfCustomerEngagement('left')} />
        </div>
       
        <div className="box-content">
           <div className="customer-title">{CustomerEngagementboxes[activeCustomerEngagementBoxIndex].title}</div>
            <div className="customer-content">
              {CustomerEngagementboxes[activeCustomerEngagementBoxIndex].content.map((item, index) => (
                <p className="text" key={index}>
                  {item}
                </p>
              ))}
            
          </div>
        </div>
        <div className="arrow-container">
          <ArrowRight className="arrow arrow-right" onClick={() => handleArrowClickOfCustomerEngagement('right')} />
        </div>
        {activeCustomerEngagementBoxIndex===0 && (
          <div className='swipe'>
             Swipe to know about the Customer Engagements
          </div>
        )}
      </div>
      <div className={`box ${theme}`}>
        <div className="arrow-container">
          <ArrowLeft className="arrow arrow-left" onClick={() => handleArrowClickOfOtherResponsibility('left')} />
        </div>
        <div className="box-content">
          <div className='other-title'>{OtherResponsibilityboxes[activateOtherResponsibilityBoxIndex].title}</div>
          <div className='other-content'>
          {OtherResponsibilityboxes[activateOtherResponsibilityBoxIndex].content.map((item, index) => (
            <p className='text' key={index}>{item}</p>
          ))}
          </div>
        </div>
        <div className="arrow-container">
          <ArrowRight className="arrow arrow-right" onClick={() => handleArrowClickOfOtherResponsibility('right')} />
        </div>
        {activateOtherResponsibilityBoxIndex===0 &&(
          <div className='swipe'>
             Swipe to know about the  Other Responsibilities
          </div>
        )}
      </div>
    </div>
  );
};



export default WorkExperience;
