import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import '../../css/contact.css';

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is Invalid");
      return;
    }

    if (!Name) {
      alert("Field is Required");
      return;
    }

    if (!message) {
      alert("Field is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Submitted Successfully");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-paragraph">Please fill out the form below to contact me for work opportunities.</p>
        <div className="contact-email">
          <a href="mailto:HelenColon@test.123">HelenColon@test.123</a>
        </div>
        <form action="mailto:HelenColon@test.123" method="post" encType="text/plain" className="contact-form">
          <div className="input">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="input">
            <input
              value={Name}
              name="Name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
              required
            />
          </div>
          <div className="input">
            <input
              className="inputa"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="message"
              required
            />
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