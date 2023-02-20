import React from 'react';
import styles from './H4.module.css';

type H4ComponentProps = {
  children: React.ReactNode;
};

function H4Component(props: H4ComponentProps) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

const H4 = React.memo(H4Component);
export { H4 };
