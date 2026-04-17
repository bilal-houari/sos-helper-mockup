import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FilterModule from '../../components/FilterModule/FilterModule';
import TaskCard from '../../components/TaskCard/TaskCard';
import Pagination from '../../components/Pagination/Pagination';
import Button from '../../components/Button/Button';
import { MOCK_TASKS } from '../../data/mockTasks';
import { SearchX, Plus } from 'lucide-react';
import styles from './TaskBrowserPage.module.css';

const TaskBrowserPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Qualified', 'General']);
  const [sortBy, setSortBy] = useState('newest');

  const filteredTasks = useMemo(() => {
    return MOCK_TASKS.filter(task => {
      // Search filter
      const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) || 
                           task.description.toLowerCase().includes(search.toLowerCase()) ||
                           task.domain.toLowerCase().includes(search.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategories.includes(task.category);
      
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'budget-high') return b.budget - a.budget;
      if (sortBy === 'budget-low') return a.budget - b.budget;
      // Default: Newest (using ID as proxy since mock data doesn't have real timestamps)
      return parseInt(b.id) - parseInt(a.id);
    });
  }, [search, selectedCategories, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategories(['Qualified', 'General']);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        <aside className={styles.sidebar}>
          <Button 
            variant="primary" 
            className={styles.postBtn}
            onClick={() => navigate('/tasks/create')}
          >
            <Plus size={18} style={{ marginRight: '8px' }} />
            Post a Task
          </Button>

          <FilterModule 
            search={search}
            onSearchChange={setSearch}
            categories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            onClear={handleClearFilters}
          />
        </aside>

        <section className={styles.main}>
          <div className={styles.resultsHeader}>
            <div className={styles.resultsCount}>
              Showing <strong> {filteredTasks.length} </strong> tasks
            </div>
            
            <div className={styles.sortBy}>
              <span>Sort by:</span>
              <select 
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="budget-high">Highest Budget</option>
                <option value="budget-low">Lowest Budget</option>
              </select>
            </div>
          </div>

          <div className={styles.taskList}>
            {filteredTasks.length > 0 ? (
              filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <SearchX size={48} className={styles.emptyIcon} />
                <h3 className={styles.emptyTitle}>No tasks found</h3>
                <p className={styles.emptyText}>
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button 
                  className={styles.clearBtn} 
                  onClick={handleClearFilters}
                  style={{ marginTop: '1rem', color: 'var(--primary-color, #2563eb)', fontWeight: '500' }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {filteredTasks.length > 0 && <Pagination />}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TaskBrowserPage;
