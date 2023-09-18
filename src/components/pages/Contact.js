import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wt593f4', 'template_rocexo6', form.current, '4i6a7oquRxNnB0Pa0')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!')
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="container">
      <h1>CONTACT INFO</h1>
      <div class="underline">
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact_form">
          <div class="name">
          <label>
            NAME
            <input type="text" name="user_name" required/>
          </label>
          </div>
          <div class="phone">
          <label>
          PHONE NUMBER
          <input type="text" name="user_num"  required />
          </label>
          </div>
          <div class="email">
          <label>
            EMAIL
            <input type="email" name="user_email"  required />
          </label>
          </div>
          <div class="title">
          <label>
          TITLE
            <input type="text" name="user_title" required />
          </label>
          </div>
          <div class="message">
          <label>
            MESSAGE
          <textarea  name="message" />
          </label>
          <div class="message-middle" />
          </div>
          <Button type="submit" variant="contained" id="form_button">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
