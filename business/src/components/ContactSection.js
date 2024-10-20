import { useState } from 'react';
import axios from 'axios';
import './Contact.css';  // Import CSS file for styling
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  // FontAwesome icons

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();  // Ensure event doesn't bubble up

    console.log('Form is being submitted');  // Debugging log

    // Double-check if all required fields are filled before submitting
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    axios.post('http://localhost:8000/api/contact/', formData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2 className="contact-header">Contact Information</h2>
        <div className="contact-info">
          <p><FaPhone className="contact-icon" /> +91 7017031522</p>
          <p><FaEnvelope className="contact-icon" /> sachintutorial@gmail.com</p>
          <p><FaMapMarkerAlt className="contact-icon" />D-40, B Block, Sector 62, Noida , uttarpradesh </p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2 className="contact-header">Get in Touch</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="contact-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </label>
          <button type="submit" className="contact-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
