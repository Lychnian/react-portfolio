import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  h1: {
    textAlign: "center",
    color: "yellow",
    fontSize: "40px",
  },
  form: {
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    color: "#0000FF",
  },
  input: {
    margin: "0.5rem",
    backgroundColor: "white",
    color: "black",
    padding: "0.5rem",
    borderRadius: "5px",
  },
  inputa: {
    height: "40px",
  },
  paragraph: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#666",
    margin: "0.5rem",
  },
  successText: {
    color: "green",
    margin: "0.5rem",
  },
};

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
    <div style={styles.container}>
      <h1 style={styles.h1}>Contact Me</h1>
      <p style={styles.paragraph}>Please fill out the form below to contact me for work opportunities.</p>
      <div style={styles.email}>
        <a href="mailto:HelenColon@test.123">HelenColon@test.123</a>
      </div>
      <form action="mailto:HelenColon@test.123" method="post" encType="text/plain" style={styles.form} className="form">
        <div style={styles.input}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            style={styles.inputa}
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
        <div style={styles.successText}>
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
