import React from 'react';
import styles from './Header.module.css';

interface HeaderComponentProps {
  children: React.ReactNode;
}

function HeaderComponent(props: HeaderComponentProps): JSX.Element {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}
const Header = React.memo(HeaderComponent);
export { Header };
