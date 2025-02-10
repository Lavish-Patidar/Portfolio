import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch(`http://localhost:5000/api/contact`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      });

      console.log(response);


      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.log("error in sending the data ", error);

    }

  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

          </div>
          <textarea

            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
        <div className={styles.links}>
          <a href="mailto:lavishp81@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="https://www.linkedin.com/in/lavish-patidar/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/Lavish-Patidar">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
