import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <nav className={`${styles.navbar} ${isAuthPage ? styles.authNavbar : ''}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <Shield className={styles.logoIcon} />
            <span>SOS <span className={styles.logoAccent}>Helper</span></span>
          </Link>
          
          {!isAuthPage && (
            <div className={styles.navLinks}>
              <a href="#features" className={styles.link}>Features</a>
              <a href="#gallery" className={styles.link}>Services</a>
              <a href="#how-it-works" className={styles.link}>Benefits</a>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          {location.pathname !== '/login' && (
            <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
          )}
          {location.pathname !== '/register' && (
            <Button variant="primary" onClick={() => navigate('/register')}>Join the Community</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
