import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={`${styles.heroContent} fade-in`}>
              <div className={styles.badge}>
                <span>Local Physical Help Platform</span>
              </div>
              <h1>Get Anything <span className={styles.accent}>Physical Done.</span></h1>
              <p>
                Whether it's an emergency repair or just an extra pair of hands for moving, 
                SOS Helper connects you with vetted locals ready to work.
              </p>
              <div className={styles.heroActions}>
                <Button variant="primary" size="lg" onClick={() => navigate('/tasks')}>Need Help? Browse Tasks</Button>
                <Button variant="outline" size="lg" className={styles.outlineBtn} onClick={() => navigate('/dashboard')}>Your Dashboard</Button>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img 
                src="https://picsum.photos/1000/1200?random=1" 
                alt="Professional working" 
                className={styles.heroImage}
              />
              <div className={styles.heroOverlay}></div>
            </div>
          </div>
        </section>

        {/* Task Gallery Section */}
        <section id="gallery" className={styles.gallery}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.smallHeader}>WHAT WE DO</h2>
              <h3>Common Tasks Solved Daily</h3>
            </div>
            
            <div className={styles.scroller}>
              <div className={styles.scrollerInner}>
                {[
                  { title: "Furniture Assembly", img: "https://picsum.photos/500/500?random=2" },
                  { title: "Emergency Plumbing", img: "https://picsum.photos/500/500?random=3" },
                  { title: "Home Moving", img: "https://picsum.photos/500/500?random=4" },
                  { title: "Lawn Maintenance", img: "https://picsum.photos/500/500?random=5" },
                  { title: "Heavy Lifting", img: "https://picsum.photos/500/500?random=6" },
                  { title: "Painting", img: "https://picsum.photos/500/500?random=7" }
                ].map((task, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <img src={task.img} alt={task.title} />
                    <div className={styles.itemOverlay}>
                      <span>{task.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits / Features */}
        <section id="features" className={styles.features}>
          <div className={styles.container}>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><Zap /></div>
                <h4>High Urgency (SOS)</h4>
                <p>Post emergency tasks and get responses in minutes. We prioritize speed when it counts.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><ShieldCheck /></div>
                <h4>Vetted Locals</h4>
                <p>Every member is background checked and community-rated for your peace of mind.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><MapPin /></div>
                <h4>Hyper-Local</h4>
                <p>Support your neighborhood economy. Most tasks are within a 5km radius.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.iconBox}><CheckCircle2 /></div>
                <h4>No Hidden Fees</h4>
                <p>Flat platform fees. What you see is what you pay. No surprises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <h2>Be Part of the <span className={styles.accent}>Muscle Economy.</span></h2>
              <p>Join SOS Helper to get things done or start helping your neighbors.</p>
              <div className={styles.ctaActions}>
                <Button variant="primary" size="lg">Join Now</Button>
                <Button variant="outline" size="lg">How Pricing Works</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
