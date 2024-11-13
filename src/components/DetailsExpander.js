import { useState } from 'react';
import styles from '../styles/DetailsExpander.module.css';

const DetailsExpander = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.expanderRow} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      <div className={styles.expanderHeader}>
        <div className={styles.expanderTitleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={`${styles.expanderArrowContainer} ${isActive ? styles.expanded : ''}`}>
          <div className={styles.expanderArrow}></div>
        </div>
      </div>
      {isActive && (
        <div className={styles.expanderBodyContainer}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsExpander;
