import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  ClipboardList,
  Briefcase,
  Star,
  Users,
  Calendar,
  Check,
  X,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApprove = (name: string) => {
    alert(`Application from ${name} approved!`);
  };

  const handleReject = (name: string) => {
    alert(`Application from ${name} rejected.`);
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        <header className={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 className={styles.title}>Unified Dashboard</h1>
              <p className={styles.subtitle}>Welcome back, Mehdi. Here's your activity for today.</p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(127, 176, 105, 0.1)',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(127, 176, 105, 0.2)'
            }}>
              <Star size={20} fill="var(--primary-color)" color="var(--primary-color)" />
              <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-color)' }}>4.9/5</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Avg. Rating</span>
            </div>
          </div>
        </header>

        {/* Stats Section - 3 wider cards */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><BarChart3 size={28} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>2,450.00 MAD</span>
              <span className={styles.statLabel}>Total Earnings</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><ClipboardList size={28} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>12</span>
              <span className={styles.statLabel}>Tasks Completed</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}><Users size={28} /></div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Active Applications</span>
            </div>
          </div>
        </section>

        <div className={styles.dashboardBlocks}>
          {/* Requester Section */}
          <section className={styles.block}>
            <div className={styles.blockHeader}>
              <Users size={20} color="var(--primary-color)" />
              <h2 className={styles.blockTitle}>My Posted Tasks (Requester)</h2>
            </div>

            <div className={styles.taskList}>
              {/* Task with applicants */}
              <div className={styles.taskItem}>
                <div className={styles.taskTop}>
                  <h3 className={styles.taskTitle}>Furniture Assembly - IKEA Pax</h3>
                  <span className={`${styles.statusTag} ${styles.statusPending}`}>Pending Applicants</span>
                </div>
                <div className={styles.taskMeta}>
                  <span><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Posted 2 days ago</span>
                  <span>450 MAD</span>
                </div>

                <div className={styles.applicantsBox}>
                  <p className={styles.applicantHeader}>Review Applicants (2)</p>
                  <div className={styles.applicantItem}>
                    <div className={styles.applicantInfo}>
                      <img src="https://i.pravatar.cc/150?u=1" alt="Yassine" className={styles.applicantAvatar} />
                      <span className={styles.applicantName}>Yassine Karim</span>
                    </div>
                    <div className={styles.applicantActions}>
                      <button className={styles.rejectBtn} onClick={() => handleReject('Yassine Karim')}><X size={14} /></button>
                      <button className={styles.approveBtn} onClick={() => handleApprove('Yassine Karim')}><Check size={14} /> Hire</button>
                    </div>
                  </div>
                  <div className={styles.applicantItem}>
                    <div className={styles.applicantInfo}>
                      <img src="https://i.pravatar.cc/150?u=2" alt="Sara" className={styles.applicantAvatar} />
                      <span className={styles.applicantName}>Sara Bensouda</span>
                    </div>
                    <div className={styles.applicantActions}>
                      <button className={styles.rejectBtn} onClick={() => handleReject('Sara Bensouda')}><X size={14} /></button>
                      <button className={styles.approveBtn} onClick={() => handleApprove('Sara Bensouda')}><Check size={14} /> Hire</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Task */}
              <div className={styles.taskItem}>
                <div className={styles.taskTop}>
                  <h3 className={styles.taskTitle}>Kitchen Painting - Minor Touch-ups</h3>
                  <span className={`${styles.statusTag} ${styles.statusActive}`}>In Progress</span>
                </div>
                <div className={styles.taskMeta}>
                  <span>Hired: Ahmed S.</span>
                  <span>1,200 MAD</span>
                </div>
                <Button variant="ghost" size="sm" style={{ width: 'fit-content' }} onClick={() => navigate('/chat')}>
                  Chat with Ahmed <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                </Button>
              </div>
            </div>
          </section>

          {/* Provider Section */}
          <section className={styles.block}>
            <div className={styles.blockHeader}>
              <Briefcase size={20} color="var(--primary-color)" />
              <h2 className={styles.blockTitle}>My Work & Applications (Provider)</h2>
            </div>

            <div className={styles.taskList}>
              <div className={styles.taskItem}>
                <div className={styles.taskTop}>
                  <h3 className={styles.taskTitle}>Garden Cleanup & Mowing</h3>
                  <span className={`${styles.statusTag} ${styles.statusApproved}`}>Hired!</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Your application was approved by Laila M. Start the task when ready.
                </p>
                <div className={styles.taskMeta}>
                  <span>Budget: 350 MAD</span>
                  <span>Distance: 2.5 km</span>
                </div>
                <Button variant="primary" size="sm" style={{ width: 'fit-content' }}>Mark as Complete</Button>
              </div>

              <div className={styles.taskItem}>
                <div className={styles.taskTop}>
                  <h3 className={styles.taskTitle}>Heavy Lifting - Sofa Moving</h3>
                  <span className={`${styles.statusTag} ${styles.statusPending}`}>Application Pending</span>
                </div>
                <div className={styles.taskMeta}>
                  <span>Waiting for Requester response</span>
                  <span>200 MAD</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;
