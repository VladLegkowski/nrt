import React from 'react';
import { Routing } from '../pages/Routing';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.application}>
      <Routing />
    </div>
  );
}

export { App };
