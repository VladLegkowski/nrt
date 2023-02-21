import React from 'react';
import styles from './Card.module.css';

function Card(props: React.PropsWithChildren) {
  const { children } = props;
  return <article className={styles.card}>{children}</article>;
}

export { Card };
