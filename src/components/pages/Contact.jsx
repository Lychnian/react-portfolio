import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";
import '../../css/contact.css';

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
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

    if (!validateEmail(formData.email)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address"
      });
      return;
    }

    if (!formData.name) {
      setErrors({
        ...errors,
        name: "Name is required"
      });
      return;
    }

    if (!formData.message) {
      setErrors({
        ...errors,
        message: "Message is required"
      });
      return;
    }

    setSuccessMessage("Form Submitted Successfully");
    setFormData({
      email: "",
      name: "",
      message: ""
    });
  };

  return (
    <div className="container">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-paragraph">Please fill out the form below to contact me for work opportunities.</p>
        <div className="contact-email">
          <a href="mailto:helenvcolon@gmail.com">helenvcolon@gmail.com</a>
        </div>
        <form action="mailto:helenvcolon@gmail.com" method="post" encType="text/plain" className="contact-form">
          <div className="input">
            <input
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="email"
              placeholder="email"
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="input">
            <input
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="text"
              placeholder="name"
              required
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="input">
            <input
              className="inputa"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="message"
              placeholder="message"
              required
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
          <div>
            <button type="button" onClick={handleFormSubmit}>
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
