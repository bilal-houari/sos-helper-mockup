import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={`${styles.authCard} fade-in`}>
          <div className={styles.cardHeader}>
            <h1>Welcome Back</h1>
            <p>Access your SOS Helper account</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com" 
              required 
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••" 
              required 
            />
            
            <div className={styles.formOptions}>
              <label className={styles.rememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className={styles.forgotPassword}>Forgot password?</a>
            </div>

            <Button variant="primary" fullWidth size="lg" onClick={() => navigate('/')}>
              Sign In
            </Button>
          </form>

          <p className={styles.footerText} style={{ marginTop: '2rem' }}>
            Don't have an account? <Link to="/register">Create one for free</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
