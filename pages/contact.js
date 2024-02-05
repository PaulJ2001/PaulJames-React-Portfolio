import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rkjvxdk', 'template_m43grqc', form.current, {
        publicKey: 'tvP0gYCgD3eSic_lv',
      })
      .then(
        () => {
          console.log('message sent...', result.text);
        },
        (error) => {
          console.log('message failed to send...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" placeholder="Full Name" name="user_name" />
      <label>Email</label>
      <input type="email" placeholder="Your Email" name="user_email" />
      <label>Subject</label>
      <input type="email" placeholder="Subject Title" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" placeholder="Message Content" value="Send" />
    </form>
  );
};

export default Contact;


