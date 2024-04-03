import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from "../../utils/helpers";
import '../../css/contact.css';

function Form() {
  const [formData, setFormData] = useState({
    your_email: "",
    your_name: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      });
    } else {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {};

    if (!validateEmail(formData.your_email)) {
      newErrors.your_email = "Please enter a valid email address";
    }

    if (!formData.your_name.trim()) {
      newErrors.your_name = "Name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Check for any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // EmailJS parameters
    const serviceId = 'service_4zyqhbo'; 
    const templateId = 'template_d866fef'; 
    const publicKey = '2-rZp6aT9G6n9fuIs2L7l'; 
    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage("Message sent successfully. I'll get back to you soon!");
        setFormData({
          your_email: "",
          your_name: "",
          message: ""
        }); // Optionally reset the form
      }, (err) => {
        console.log('FAILED...', err);
        setErrors({
          submit: "Failed to send message. Please try again."
        });
      });
  };

  return (
    <div className="container">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-paragraph">Please fill out the form below to contact me for work opportunities.</p>
        <div className="contact-email">
          <a href="mailto:dev.helenvcolon@gmail.com">dev.helenvcolon@gmail.com</a>
        </div>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="email">
            <input
              value={formData.your_email}
              name="your_email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Your Email"
              required
            />
            {errors.your_email && <p>{errors.your_email}</p>}
          </div>
          <div className="name">
            <input
              value={formData.your_name}
              name="your_name"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Your Name"
              required
            />
            {errors.your_name && <p>{errors.your_name}</p>}
          </div>
          <div className="message">
            <textarea
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your Message"
              required
            ></textarea>
            {errors.message && <p>{errors.message}</p>}
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
         </div>
        </form>
        {successMessage && (
          <div className="success-text">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;