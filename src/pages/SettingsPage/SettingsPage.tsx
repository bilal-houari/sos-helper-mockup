import React, { useState, useEffect } from 'react';
import {
  User,
  Shield,
  Bell,
  Eye,
  CreditCard,
  Camera,
  Save,
  ArrowLeft,
  CircleDashed
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './SettingsPage.module.css';

type Tab = 'profile' | 'security' | 'notifications' | 'privacy' | 'billing';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className={styles.mainArea}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Profile Information</h2>
                <p className={styles.sectionDesc}>Update your photo and personal details here.</p>
              </div>

              <div className={styles.avatarSection}>
                <img
                  src="https://i.pravatar.cc/150?u=random"
                  alt="Avatar"
                  className={styles.avatarPreview}
                />
                <div className={styles.avatarActions}>
                  <Button variant="outline" size="sm">
                    <Camera size={16} style={{ marginRight: '8px' }} />
                    Change Photo
                  </Button>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>JPG, GIF or PNG. Max size of 2MB.</span>
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" className={styles.input} defaultValue="Mehdi El Amrani" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" className={styles.input} defaultValue="mehdi.amrani@example.com" disabled />
                </div>
                <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                  <label className={styles.label}>Bio</label>
                  <textarea
                    className={styles.textarea}
                    defaultValue="Mechanical engineer by profession, DIY enthusiast by heart. I specialize in furniture assembly and minor home repairs."
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Location</label>
                  <input type="text" className={styles.input} defaultValue="Casablanca, Morocco" />
                </div>
              </div>

              <div className={styles.footerActions}>
                <Button variant="ghost">Discard</Button>
                <Button variant="primary" onClick={handleSave} disabled={isSaving}>
                  <Save size={18} style={{ marginRight: '8px' }} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <div className={styles.placeholderContent}>
            <div className={styles.placeholderIcon}>
              <CircleDashed size={64} style={{ animation: 'spin 4s linear infinite' }} />
            </div>
            <h2 className={styles.sectionTitle}>Coming Soon</h2>
            <p className={styles.sectionDesc}>
              The {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings are currently under development.
            </p>
            <Button variant="outline" onClick={() => setActiveTab('profile')}>
              <ArrowLeft size={18} style={{ marginRight: '8px' }} />
              Back to Profile
            </Button>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        <aside className={styles.sidebar}>
          <h1 className={styles.sidebarTitle}>Settings</h1>

          <button
            className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={20} />
            Profile
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'security' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={20} />
            Security
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'notifications' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={20} />
            Notifications
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'privacy' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <Eye size={20} />
            Privacy
          </button>

          <button
            className={`${styles.tabBtn} ${activeTab === 'billing' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <CreditCard size={20} />
            Billing
          </button>
        </aside>

        {renderTabContent()}
      </main>

      <Footer />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
