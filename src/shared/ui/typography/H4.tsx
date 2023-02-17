import React from 'react';
import './typography.css';

type H4Props = {
  children: React.ReactNode;
};

function H4(props: H4Props) {
  const { children } = props;
  return <h4 className="h4">{children}</h4>;
}

export { H4 };
