import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  ShieldCheck, 
  MessageSquare, 
  UserPlus, 
  Hammer, 
  ClipboardList, 
  Award 
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './PublicProfilePage.module.css';

const PublicProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.avatarWrapper}>
            <img 
              src={`https://i.pravatar.cc/150?u=${id}`} 
              alt="Profile" 
              className={styles.avatar} 
            />
            <div className={styles.onlineStatus} />
          </div>

          <div className={styles.heroMain}>
            <div className={styles.nameRow}>
              <h1 className={styles.name}>Mehdi El Amrani</h1>
              <div className={styles.verifyBadge}>
                <ShieldCheck size={16} />
                <span>Verified Expert</span>
              </div>
            </div>
            <p className={styles.bio}>
              Mechanical engineer by profession, DIY enthusiast by heart. I specialize in furniture assembly 
              and minor home repairs. I also use SOS Helper to find reliable help for my own property maintenance.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Furniture Assembly</span>
              <span className={styles.tag}>Home Repairs</span>
              <span className={styles.tag}>Reliable Requester</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <Button variant="primary" style={{ width: '100%' }}>
              <UserPlus size={18} style={{ marginRight: '8px' }} />
              Follow
            </Button>
            <Button variant="outline" style={{ width: '100%' }}>
              <MessageSquare size={18} style={{ marginRight: '8px' }} />
              Send Message
            </Button>
          </div>
        </section>

        {/* Roles Grid */}
        <div className={styles.rolesGrid}>
          
          {/* Section: As a Provider */}
          <section className={styles.roleSection}>
            <div className={styles.roleHeader}>
              <h2 className={styles.roleTitle}>
                <Hammer size={24} />
                <span>As a Provider</span>
              </h2>
              <span className={styles.roleBadge}>Top Rated</span>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Provider Rating</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>42</span>
                <span className={styles.statLabel}>Tasks Taken</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>

            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <div className={styles.historyHeader}>
                  <span className={styles.itemTitle}>Living Room Renovation Help</span>
                  <span className={styles.itemDate}>2 weeks ago</span>
                </div>
                <div className={styles.ratingRow}>
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span style={{ color: 'var(--text-secondary)', marginLeft: '4px' }}>Excellent work!</span>
                </div>
                <p className={styles.comment}>
                  "Mehdi was professional and very skilled. He finished the tiling faster than expected."
                </p>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyHeader}>
                  <span className={styles.itemTitle}>IKEA Wardrobe Assembly</span>
                  <span className={styles.itemDate}>1 month ago</span>
                </div>
                <div className={styles.ratingRow}>
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className={styles.comment}>
                  "Precise and knew exactly what he was doing. Highly recommended for assembly tasks."
                </p>
              </div>
            </div>
          </section>

          {/* Section: As a Requester */}
          <section className={styles.roleSection}>
            <div className={styles.roleHeader}>
              <h2 className={styles.roleTitle}>
                <ClipboardList size={24} />
                <span>As a Requester</span>
              </h2>
              <span className={styles.roleBadge}>Gold Poster</span>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>4.7/5</span>
                <span className={styles.statLabel}>Poster Rating</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>12</span>
                <span className={styles.statLabel}>Tasks Posted</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Fast</span>
                <span className={styles.statLabel}>Payment Speed</span>
              </div>
            </div>

            <div className={styles.historyList}>
              <div className={styles.historyItem}>
                <div className={styles.historyHeader}>
                  <span className={styles.itemTitle}>Garden Cleanup</span>
                  <span className={styles.itemDate}>3 weeks ago</span>
                </div>
                <div className={styles.ratingRow}>
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className={styles.comment}>
                  "Great requester, clear instructions and paid immediately upon completion."
                </p>
              </div>
              <div className={styles.historyItem}>
                <div className={styles.historyHeader}>
                  <span className={styles.itemTitle}>Window Cleaning (Office)</span>
                  <span className={styles.itemDate}>2 months ago</span>
                </div>
                <div className={styles.ratingRow}>
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" opacity={0.3} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={20} color="var(--primary-color)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Frequent Poster in "Residential Repair"</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicProfilePage;
