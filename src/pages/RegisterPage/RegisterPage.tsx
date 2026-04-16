import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={`${styles.authCard} fade-in`}>
          <div className={styles.cardHeader}>
            <h1>Create Account</h1>
            <p>One account to request help and help others.</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <Input label="First Name" placeholder="John" required />
              <Input label="Last Name" placeholder="Doe" required />
            </div>
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com" 
              required 
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Create a strong password" 
              required 
            />
            
            <p className={styles.terms}>
              By joining, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>

            <Button variant="primary" fullWidth size="lg" onClick={() => navigate('/login')}>
              Create Account
            </Button>
          </form>

          <p className={styles.footerText}>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
