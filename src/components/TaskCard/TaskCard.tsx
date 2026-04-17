import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import type { Task } from '../../data/mockTasks';
import Button from '../Button/Button';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <span className={`${styles.badge} ${task.category === 'Qualified' ? styles.qualified : styles.general}`}>
            {task.category}
          </span>
          <h3 className={styles.title}>{task.title}</h3>
        </div>
        <div className={styles.budget}>
          <span>{task.budget} MAD</span>
        </div>
      </div>

      <p className={styles.description}>{task.description}</p>

      <div className={styles.footer}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <MapPin size={14} />
            <span>{task.location}</span>
          </div>
          <div className={styles.metaItem}>
            <Clock size={14} />
            <span>{task.postedAt}</span>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className={styles.viewBtn}>View Task</Button>
      </div>
    </div>
  );
};

export default TaskCard;
