import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS service ID, template ID, and user ID
    emailjs.sendForm('service_81mctuj', 'template_m2vdczs', e.target, 'wFmLhQsVMlZbkFufV')
      .then((result) => {
        console.log(result.text);
        // Optionally, you can show a success message or redirect the user
      }, (error) => {
        console.error(error.text);
        // Handle any errors and show an error message to the user
      });
    
      e.target.reset();
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <h1 className='text-color text-center pt-5'>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;