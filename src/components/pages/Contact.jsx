import React from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../css/contact.css';

function ContactPage() {
  const emailAddress = 'dev.helenvcolon@gmail.com';

  const handleEmailClick = () => {
    if (validateEmail(emailAddress)) {
      // You can open the mail client directly without using window.location.href
    } else {
      console.log('Invalid email address');
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>If you have any questions or inquiries, feel free to send me an email.</p>
      <a href={`mailto:${emailAddress}`} className="btn btn--contact" onClick={handleEmailClick}>Contact Me</a>
    </div>
  );
}

export default ContactPage;
