import { Link } from 'react-router-dom';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import '../styles/home.css';

import checklistImg from '../../assets/checklist.png';
import fbIcon from '../../assets/icons/fb_icon.png';
import mailIcon from '../../assets/icons/mail_icon.png';
import callIcon from '../../assets/icons/call_icon.png';
import visionIcon from '../../assets/icons/vision_icon.png';
import missionIcon from '../../assets/icons/mission_icon.png';

function Home() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Our team will get back to you within 24 hours.');
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              Inventory <br />
              Management, <br />
              Simplified.
            </h1>
            <p className="hero-subtitle">
              <strong>Real-time inventory tracking</strong> to prevent
              shortages and streamline operations.
            </p>
            <div className="hero-actions">
              <Link to="/login" className="btn-primary">
                Join Now
              </Link>
              <a href="#about" className="btn-link">
                More About It...
              </a>
            </div>
          </div>

          <div className="hero-visual">
            {/* Replace src with your clipboard 3D illustration */}
            <div className="hero-circle-bg">
              <img
                src={checklistImg}
                alt="Inventory Checklist"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-header">
          <h2>
            Built To Keep Your Shelves Stocked <br />
            And Your Business Moving
          </h2>
          <p>
            <strong>Shelfly</strong> is a modern, web-based inventory system
            designed to eliminate manual spreadsheets and paperwork. Whether you
            manage a single stockroom or multiple warehouses, our platform helps
            you monitor stock levels, automate reorder alerts, and make faster,
            data-backed decisions.
          </p>
        </div>

        <div className="cards-grid">
          <div className="info-card">
            <div className="card-icon">
              <img src={visionIcon} alt="Vision" className="card-icon-img" />
            </div>
            <h3>Vision</h3>
            <div className="card-dots">
              <span className="dot teal"></span>
              <span className="dot gray"></span>
              <span className="dot navy"></span>
            </div>
            <p>
              To empower every business with effortless, real-time control over
              their physical inventory, turning complex supply chains into
              seamless operations.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <img src={missionIcon} alt="Mission" className="card-icon-img" />
            </div>
            <h3>Mission</h3>
            <div className="card-dots">
              <span className="dot teal"></span>
              <span className="dot gray"></span>
              <span className="dot navy"></span>
            </div>
            <p>
              To replace outdated, clunky tracking methods with a fast,
              intuitive interface that saves teams hours of manual work, reduces
              costly stock outs, and scales effortlessly as businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              Have questions about setup, pricing, or custom integrations? Reach
              out to our team and we'll get back to you within 24 hours.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-badge">
                  <img src={fbIcon} alt="Facebook" className="badge-icon" />
                </span>
                <span>Shelfly</span>
              </li>
              <li>
                <span className="contact-badge">
                  <img src={mailIcon} alt="Email" className="badge-icon" />
                </span>
                <span>shelfly@gmail.com</span>
              </li>
              <li>
                <span className="contact-badge">
                  <img src={callIcon} alt="Phone" className="badge-icon" />
                </span>
                <span>+63 123 4567 891</span>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Subject *" required />
            <textarea rows="5" placeholder="Message" required></textarea>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;