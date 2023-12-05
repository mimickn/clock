import React from 'react';
import styles from './Title.module.css';

export const Title: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Clock</h1>
    </div>
  );
};
