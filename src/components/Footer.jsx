
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGlide } from "@fortawesome/free-brands-svg-icons/faGlide";
import "../pages/styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Weather App. All rights reserved.</p>
      <p>
        Built with ❤️ by <strong>Veeranajaneyulu.V</strong>.
      </p>
      <div className="footer-icons">
        <a href="https://github.com/veera5423" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/veeranjaneyulu-v/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://veera5423.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGlide} size="2x" />
        </a>
      </div>
      <p>
        Data provided by <a href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer">WeatherAPI</a>.
      </p>
      
    </footer>
  );
};

export default Footer;
