import React from 'react';
import './index.css';

interface HeaderProps {
  children: React.ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  const { children } = props;
  return <header className="header">{children}</header>;
}

export { Header };
