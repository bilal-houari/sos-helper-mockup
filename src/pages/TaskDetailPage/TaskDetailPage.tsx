import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, MessageSquare, Heart } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { MOCK_TASKS } from '../../data/mockTasks';
import type { Task } from '../../data/mockTasks';
import styles from './TaskDetailPage.module.css';

const TaskDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock gallery images using Picsum
  const galleryImages = [
    `https://picsum.photos/seed/${id}-1/800/500`,
    `https://picsum.photos/seed/${id}-2/800/500`,
    `https://picsum.photos/seed/${id}-3/800/500`,
  ];

  useEffect(() => {
    const foundTask = MOCK_TASKS.find(t => t.id === id);
    if (foundTask) {
      setTask(foundTask);
    }
    // Scroll to top when entering
    window.scrollTo(0, 0);
  }, [id]);

  if (!task) {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <h2>Task not found</h2>
          <Link to="/tasks">Return to Browser</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        {/* Main Info Column */}
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <span className={styles.category}>{task.domain}</span>
            <h1 className={styles.title}>{task.title}</h1>
            <div className={styles.topMeta}>
              <div className={styles.metaItem}>
                <MapPin size={18} />
                <span>{task.location}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={18} />
                <span>Posted {task.postedAt}</span>
              </div>
            </div>
          </div>

          {/* Image Scroller */}
          <section className={styles.gallery}>
            <img 
              src={galleryImages[currentImageIndex]} 
              alt="Task context" 
              className={styles.slide}
            />
            
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={nextImage}>
              <ChevronRight size={24} />
            </button>

            <div className={styles.indicators}>
              {galleryImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.dot} ${currentImageIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          </section>

          {/* Detailed Info */}
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Task Description</h2>
            <div className={styles.description}>
              <p>{task.description}</p>
              <br />
              <p>
                We are looking for someone reliable who can complete this task with attention to detail.
                All necessary safety equipment will be discussed upon application.
              </p>
            </div>
          </section>

          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>What's Required</h2>
            <div className={styles.requirementsList}>
              <div className={styles.requirementItem}>
                <CheckCircle size={18} />
                <span>Basic tools may be needed</span>
              </div>
              <div className={styles.requirementItem}>
                <CheckCircle size={18} />
                <span>Reliable transportation</span>
              </div>
              <div className={styles.requirementItem}>
                <CheckCircle size={18} />
                <span>Physical stamina</span>
              </div>
              <div className={styles.requirementItem}>
                <CheckCircle size={18} />
                <span>Available during daytime</span>
              </div>
            </div>
          </section>
        </div>

        {/* Action & Sidebar Column */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyBox}>
            <div className={styles.actionCard}>
              <div className={styles.budgetDisplay}>
                <span className={styles.budgetLabel}>Proposed Budget</span>
                <span className={styles.budgetAmount}>{task.budget} MAD</span>
              </div>
              <Button variant="primary" className={styles.applyBtn}>Apply for Task</Button>
              <Button variant="outline" className={styles.interestBtn}>
                <Heart size={18} style={{ marginRight: '8px' }} />
                Save to Favorites
              </Button>
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <img 
                  src={`https://i.pravatar.cc/150?u=${task.id}`} 
                  alt="Requester" 
                  className={styles.avatar} 
                />
                <div className={styles.profileInfo}>
                  <span className={styles.name}>Mehdi El Amrani</span>
                  <div className={styles.rating}>
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" opacity={0.3} />
                    <span style={{ marginLeft: '4px', color: 'var(--text-secondary)' }}>(24 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.profileStats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Member since</span>
                  <span className={styles.statValue}>Oct 2023</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Tasks posted</span>
                  <span className={styles.statValue}>12 completed</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <ShieldCheck size={18} color="var(--primary-color)" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Verified Identity & Payment</span>
              </div>

              <Button variant="outline" size="sm" style={{ marginTop: '0.5rem' }}>
                <MessageSquare size={16} style={{ marginRight: '8px' }} />
                Contact Requester
              </Button>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default TaskDetailPage;
