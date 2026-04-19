import React, { useEffect } from 'react';
import { 
  MessageSquare, 
  Hammer, 
  CheckCircle, 
  Star, 
  ShieldAlert, 
  Info,
  MoreVertical
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './NotificationsPage.module.css';

interface Notification {
  id: string;
  type: 'message' | 'offer' | 'status' | 'review' | 'security' | 'info';
  message: string;
  time: string;
  isRead: boolean;
}

const NOTIFICATIONS: Notification[] = [
  { id: '1', type: 'message', message: 'Mehdi El Amrani sent you a message regarding "Furniture Assembly"', time: '2 mins ago', isRead: false },
  { id: '2', type: 'offer', message: 'New offer (350 MAD) received for your posted task: "Kitchen Painting"', time: '45 mins ago', isRead: false },
  { id: '3', type: 'status', message: 'Your task "Furniture Assembly" has been marked as in-progress', time: '2 hours ago', isRead: true },
  { id: '4', type: 'security', message: 'New login detected from Chrome on Linux (Casablanca, MA)', time: '5 hours ago', isRead: true },
  { id: '5', type: 'review', message: 'Please rate your recent experience with Sara Bensouda to help the community', time: 'Yesterday', isRead: true },
  { id: '6', type: 'info', message: 'System Maintenance: SOS Helper will be offline for 10 minutes tonight at 02:00 AM', time: 'Yesterday', isRead: true },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'message': return { icon: <MessageSquare size={20} />, className: styles.iconBlue };
    case 'offer': return { icon: <Hammer size={20} />, className: styles.iconGreen };
    case 'status': return { icon: <CheckCircle size={20} />, className: styles.iconPurple };
    case 'review': return { icon: <Star size={20} />, className: styles.iconOrange };
    case 'security': return { icon: <ShieldAlert size={20} />, className: styles.iconOrange };
    default: return { icon: <Info size={20} />, className: styles.iconBlue };
  }
};

const NotificationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Notifications</h1>
          </div>
          <Button variant="outline" size="sm">Mark all as read</Button>
        </header>

        <section className={styles.feed}>
          <h2 className={styles.groupTitle}>Today</h2>
          {NOTIFICATIONS.slice(0, 4).map(notif => {
            const { icon, className } = getIcon(notif.type);
            return (
              <div key={notif.id} className={`${styles.item} ${!notif.isRead ? styles.unread : ''}`}>
                <div className={`${styles.iconWrapper} ${className}`}>
                  {icon}
                </div>
                <div className={styles.itemBody}>
                  <p className={styles.message}>{notif.message}</p>
                  <span className={styles.time}>{notif.time}</span>
                </div>
                <MoreVertical size={18} color="var(--text-muted)" style={{ alignSelf: 'center', cursor: 'pointer' }} />
              </div>
            );
          })}

          <h2 className={styles.groupTitle}>Yesterday</h2>
          {NOTIFICATIONS.slice(4).map(notif => {
            const { icon, className } = getIcon(notif.type);
            return (
              <div key={notif.id} className={`${styles.item} ${!notif.isRead ? styles.unread : ''}`}>
                <div className={`${styles.iconWrapper} ${className}`}>
                  {icon}
                </div>
                <div className={styles.itemBody}>
                  <p className={styles.message}>{notif.message}</p>
                  <span className={styles.time}>{notif.time}</span>
                </div>
                <MoreVertical size={18} color="var(--text-muted)" style={{ alignSelf: 'center', cursor: 'pointer' }} />
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
