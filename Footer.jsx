import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Portfolio</h2>
            <p>Creating beautiful web experiences</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: umarfarooq12062003@gmail.com</p>
            <p>Location: Ghaziabad, UP</p>
            <div className="social-icons">
              <a
                href="https://github.com/Umar6986"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
          <p>Designed & Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
