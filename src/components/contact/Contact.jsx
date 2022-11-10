import React, { useState } from "react";
import styled from "styled-components";
import ContactImage from "./ContactImage";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FormStyle = styled.form`
  width: 100%;
  padding: 10rem;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: rgb(208, 201, 201);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: lightblue;
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .contact-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
const notify = () => toast("Your message has been sent")

  return (
    <>
      <FormStyle>
        <div className="contact-section">
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Your Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Your message
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <button type="submit" onClick={notify}>Send</button>
            <ToastContainer />
          </div>
          <ContactImage />
        </div>
      </FormStyle>
    </>
  );
}
