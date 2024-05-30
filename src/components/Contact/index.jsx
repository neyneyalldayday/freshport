import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here i can handle the form submission, e.g., send data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-item">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
