import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './style.css'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '', 
    email: '', 
    message: '',
  });

  const [btnText, setBtnText] = useState('Submit');

  const form = useRef();

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.name, event.target.value);
    setFormState({...formState, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    emailjs
      .sendForm( 
        '', 
        form.current, 
        ''
      )
      .then(
        (result) => {
          console.log(result.text);
          setBtnText('Message Sent!');
          setTimeout(() => {
            window.location.reload();
          } , 3000);
        }, (error) => {
          console.log(error.text);
          setBtnText('Failed to Send');
        });
  }
  return (
    <form ref={form} onSubmit={handleSubmit} className="form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input 
          name="name"
          type="text" 
          className="form-control"
          placeholder="Your Name"
          defaultValue={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input 
          type="email" 
          name="email"
          className="form-control"  
          placeholder="name@example.com"
          defaultValue={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea 
          name="message"
          className="form-control" 
          rows="3"
          defaultValue={formState.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-secondary submit">
        {btnText}
      </button>
    </form>
  );
};

export default Contact;
