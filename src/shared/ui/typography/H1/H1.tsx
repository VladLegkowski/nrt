import React from 'react';
import styles from './H1.module.css';

function H1Component(props: React.PropsWithChildren) {
  const { children } = props;
  return <h1 className={styles.h1}>{children}</h1>;
}

const H1 = React.memo(H1Component);
export { H1 };
