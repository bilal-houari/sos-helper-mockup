import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Pagination.module.css';

const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.navBtn} disabled>
        <ChevronLeft size={20} />
      </button>
      
      <div className={styles.pages}>
        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <span className={styles.ellipsis}>...</span>
        <button className={styles.pageBtn}>12</button>
      </div>

      <button className={styles.navBtn}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
