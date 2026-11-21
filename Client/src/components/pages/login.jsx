import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import loginImage from '../../assets/login_image.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logging in...');
  };

  return (
    <div className="login-page">
      {/* Clickable Top-Left Logo */}
      <Link to="/" className="auth-logo">
        <span className="logo-green">SHELF</span>
        <span className="logo-dark">LY.</span>
      </Link>

      {/* Left Form Column */}
      <div className="login-left">
        <div className="login-box">
          <p className="login-welcome">Welcome to</p>
          <Link to="/" className="login-brand-heading">
            <span className="logo-green">SHELF</span>
            <span className="logo-dark">LY.</span>
          </Link>
          <p className="login-subtitle">
            Sign in to monitor your stock levels and warehouse activity
          </p>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="login-email">Email/Username</label>
              <input
                id="login-email"
                type="text"
                className="auth-input"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <div className="password-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="auth-input"
                  placeholder="Enter your Password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn-auth-submit">
              Log In
            </button>

            <p className="auth-switch-text">
              Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Illustration Column */}
      <div className="login-right">
        <div className="login-circle-bg">
          <img
            src={loginImage}
            alt="Warehouse Inventory Management"
            className="login-illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;