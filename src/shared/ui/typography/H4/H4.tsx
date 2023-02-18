import React from 'react';
import styles from './H4.module.css';

type H4Props = {
  children: React.ReactNode;
};

function H4(props: H4Props) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

export { H4 };
