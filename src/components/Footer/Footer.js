import React, { useState } from 'react';
import './Footer.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const footerLinks = [
  { title: 'Home', url: '#movetohome' },
  { title: 'Product', url: '#movetoproduct' },
  { title: 'Why Us', url: '#movetowhy_us' },
  { title: 'Blogs', url: '#movetoblog' },
  { title: 'FAQ', url: '#movetofaq' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterSuccess(false);
    if (!email.trim()) {
      setNewsletterError('Email is required.');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setNewsletterError('Enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif"
            alt="DezyIt logo"
            className="site-footer__logo"
          />
          <p className="site-footer__tagline">
            Your personal design sprint master. Innovate, pivot, and improve UX with confidence.
          </p>
          <div className="site-footer__stores">
            <a
              href="https://play.google.com/store/apps/details?id=com.dezy.it.design.sprint.design_sprint"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.wixstatic.com/media/ec9816_c6b0bd2765b24062b66b05c49f167262~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_135,h_43,al_c,q_95/GooglePlay-DezyIt.webp"
                alt="Get it on Google Play"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/dezy-it/id1549871606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.wixstatic.com/media/ec9816_ddaf57d1e998457e9525f6cfbcd6a212~mv2.png/v1/crop/x_0,y_175,w_512,h_163/fill/w_136,h_43,al_c,q_95/AppStore-DezyIt.webp"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <h3>Quick links</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.title}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__newsletter">
          <h3>Stay updated</h3>
          <p>Get design sprint tips and product updates in your inbox.</p>
          <form onSubmit={handleNewsletter} noValidate>
            {newsletterSuccess && (
              <p className="site-footer__newsletter-success" role="status">
                You&apos;re subscribed. Thank you!
              </p>
            )}
            <div className="site-footer__newsletter-row">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setNewsletterError('');
                  setNewsletterSuccess(false);
                }}
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </div>
            {newsletterError && <span className="site-footer__newsletter-error">{newsletterError}</span>}
          </form>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} DezyIt. All rights reserved.</p>
        <div className="site-footer__social">
          <a href="https://www.dezyit.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <i className="fas fa-globe" />
          </a>
          <a href="mailto:hello@dezyit.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
