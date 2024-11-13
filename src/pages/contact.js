import { useState } from 'react';
import styles from '../styles/contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        setStatusMessage(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage('An error occurred while sending the email.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className={styles.pageContent}>
      <div className={styles.contactFormContainer}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>
        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleFormChange}
            required
          ></textarea>

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? <span className={styles.loader}></span> : 'Send Message'}
          </button>
        </form>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </div>
    </div>
  );
}

export default ContactPage;
