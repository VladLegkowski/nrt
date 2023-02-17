import React from 'react';
import './typography.css';

type H1Props = {
  children: React.ReactNode;
};

function H1(props: H1Props) {
  const { children } = props;
  return <h1 className="h1">{children}</h1>;
}

export { H1 };
