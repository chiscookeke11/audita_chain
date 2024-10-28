import React from 'react'
import './contactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form'>
        {/* left-side */}
        <div>
            <h1>Let's Chat</h1>
            <p>
                Whether you have a simply question, want to start a project or simply want to connect. <br /><br />
            Feel free to send me a messgae in the contact form

            </p>
        </div>




        {/* right-side */}
        <div>
            <h1>Contact</h1>
           
            <form action="">
            
            <input type="text" placeholder='Name ' required/>
            <input type="email" placeholder='Email' required/>
            <input type="text" placeholder='Company' required/>
            <input type="tel" placeholder='Phone' required/>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button>Submit</button>








            </form>
        </div>
    </div>
  )
}

export default ContactForm