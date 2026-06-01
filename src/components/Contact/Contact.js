import React, { useState } from 'react';
import './Contact.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: '', email: '', message: '' };
const initialErrors = { name: '', email: '', message: '' };

const validate = (form) => {
  const errors = { name: '', email: '', message: '' };
  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (!hasErrors) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <div id="movetocontact" aria-hidden="true" />
      <div className="contact__inner">
        <div className="contact__info-card">
          <span className="section-eyebrow section-eyebrow--left">Contact</span>
          <h2 id="contact-heading" className="contact__heading">
            Get in touch
          </h2>
          <p className="contact__text">
            Questions about design sprints, partnerships, or the app? Send us a message and we&apos;ll
            get back to you within 2 business days.
          </p>
          <ul className="contact__details">
            <li>
              <span className="contact__icon" aria-hidden="true">
                <i className="fas fa-envelope" />
              </span>
              <div className="contact__detail-text">
                <span className="contact__detail-label">Email</span>
                <a href="mailto:hello@dezyit.com">hello@dezyit.com</a>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">
                <i className="fas fa-globe" />
              </span>
              <div className="contact__detail-text">
                <span className="contact__detail-label">Website</span>
                <a href="https://www.dezyit.com" target="_blank" rel="noopener noreferrer">
                  www.dezyit.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <h3 className="contact__form-title">Send a message</h3>

          {submitted && (
            <p className="contact__success" role="status">
              Thanks! Your message has been received. We&apos;ll be in touch soon.
            </p>
          )}

          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'contact__input--error' : ''}
              autoComplete="name"
              placeholder="Your name"
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'contact__input--error' : ''}
              autoComplete="email"
              placeholder="you@example.com"
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'contact__input--error' : ''}
              placeholder="How can we help?"
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button type="submit" className="contact__submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
