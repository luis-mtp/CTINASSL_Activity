import '../styles/footer.css';

import fbIcon from '../../assets/icons/fb_icon.png';
import mailIcon from '../../assets/icons/mail_icon.png';
import callIcon from '../../assets/icons/call_icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <span className="logo-green">SHELF</span>
          <span className="logo-dark">LY.</span>
        </div>
        <p className="footer-tagline">Track faster, Restock smarter.</p>
      </div>

      <div className="footer-socials">
        <a href="#contact" aria-label="Facebook">
          <img src={fbIcon} alt="Facebook" className="footer-icon" />
        </a>
        <a href="#contact" aria-label="Email">
          <img src={mailIcon} alt="Email" className="footer-icon" />
        </a>
        <a href="#contact" aria-label="Phone">
          <img src={callIcon} alt="Phone" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;