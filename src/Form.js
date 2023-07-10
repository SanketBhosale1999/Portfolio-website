import React, { useState } from "react";
import "./form.css";
import emailjs from "emailjs-com";

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!name) {
          setNameError("Name field is required");
        } else {
          setNameError("");
        }
      
        if (!email) {
          setEmailError("Email field is required");
        } else {
          setEmailError("");
        }
      
        if (name && email) {
          // Configure the email service
          const serviceId = "service_wpee59a";
          const templateId = "template_zipxuuo";
          const publicKey = "-otOUk99CFbJ9fWvB";
      
          // Prepare the email template parameters
          const templateParams = {
            from_name: name,
            from_email: email,
          };
      
          // Send the email
          emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
              console.log("Email sent successfully!");
              // Perform any additional actions after sending the email
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              // Handle the error
            });
            onSubmit(name,email);
      
          // Reset the form fields
          setName("");
          setEmail("");
        }
      };
      

    return (
      <div className='container'>
        <div className="form-container">
       
        <form onSubmit={handleSubmit}>

            <div className='form-group'>
            <h5>Welcome to My Portfolio Website</h5>
            <br></br>
                <label htmlFor="name">Enter Your Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className='form-group'>
                <label htmlFor="email">Enter Your Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    );
    };

export default Form;