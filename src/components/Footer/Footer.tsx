import React from 'react';
import { Shield } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Shield className={styles.logoIcon} />
            <span>SOS <span className={styles.accent}>Helper</span></span>
          </div>
          <p className={styles.tagline}>
            Localized physical task outsourcing. Fast, reliable, and physical.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Trust & Safety</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} SOS Helper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
