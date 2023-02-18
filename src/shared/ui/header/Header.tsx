import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  children: React.ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}

export { Header };
