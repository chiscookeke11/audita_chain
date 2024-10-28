import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de814677-2ff0-44f9-a6bf-7bcfd3b9e9f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='form-container'>
      <div className="form-wrapper">

        <div className="left-side">
          <h1>Let's Chat</h1>
          <p>Whether you have a question, want to start a project, or simply want to connect.
            <br/><br/>
            Feel free to send a message in the contact form.
          </p>
        </div>

        <div className="right-side">
          <h1>Contact</h1>
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder='Name' required />
            <input type="email" name="email" placeholder='Email' required />
            <input type="tel" name="phone" placeholder='Phone' required />
            <textarea name="message" id="message" cols="30" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>

  );
}

export default ContactForm;
