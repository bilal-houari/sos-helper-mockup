import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import styles from './FilterModule.module.css';

interface FilterModuleProps {
  search: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  onCategoryChange: (category: string) => void;
  onClear: () => void;
}

const FilterModule: React.FC<FilterModuleProps> = ({
  search,
  onSearchChange,
  categories,
  onCategoryChange,
  onClear
}) => {
  const [sliderValue, setSliderValue] = React.useState(1000);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <div className={styles.section}>
          <div className={styles.searchWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search tasks..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* ... Rest of the content wrapped ... */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>
            <Filter size={16} />
            <span>Category</span>
          </h4>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={categories.includes('Qualified')}
                onChange={() => onCategoryChange('Qualified')}
              />
              <span>Qualified Labor</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={categories.includes('General')}
                onChange={() => onCategoryChange('General')}
              />
              <span>General Labor</span>
            </label>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>
            <Filter size={16} />
            <span>Domain</span>
          </h4>
          <div className={styles.options}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>SOS / Emergency</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Residential Repair</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Assembly & Installation</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Moving & Logistics</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Gardening & Outdoor</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              <span>Cleaning & Restoration</span>
            </label>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>
            <SlidersHorizontal size={16} />
            <span>Max Budget</span>
          </h4>
          <div className={styles.priceSliderWrapper}>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className={styles.rangeInput}
            />
            <div className={styles.rangeLabels}>
              <span>0 MAD</span>
              <span className={styles.currentValue}>{sliderValue} MAD</span>
              <span>5000+</span>
            </div>
          </div>
        </div>

        <button className={styles.clearBtn} onClick={onClear}>Clear all filters</button>
      </div>
    </div>
  );
};

export default FilterModule;
