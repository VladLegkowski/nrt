import React from 'react';
import styles from './H4.module.css';

function H4Component(props: React.PropsWithChildren) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

const H4 = React.memo(H4Component);
export { H4 };
