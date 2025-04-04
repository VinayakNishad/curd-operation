import React, { useState } from 'react';
import axios from 'axios';
// import './Contact.css'; // optional for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>If you have any questions or just want to say hello, feel free to reach out!</p>
      <h4>Quick Support</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="Describe / Kind of service" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
