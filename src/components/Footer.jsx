
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Movie Explorer</p>
      <div className="footer-links">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          TMDB
        </a>
        <a href="https://github.com/mhammadfarooq20" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
