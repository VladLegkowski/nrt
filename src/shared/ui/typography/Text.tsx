import React from 'react';
import { clxs } from '../utils/clxs';
import './typography.css';

type TextProps = {
  children: React.ReactNode;
  variant?: 'regular' | 'subtle';
  weight?: 'normal' | 'bold';
  opaque?: boolean;
};

function Text(props: TextProps) {
  const {
    children,
    opaque = false,
    variant = 'regular',
    weight = 'normal',
  } = props;

  const className = clxs('text', {
    'text--subtle': variant === 'subtle',
    'text--bold': weight === 'bold',
    'text--opaque': opaque,
  });

  return <span className={className}>{children}</span>;
}

export { Text };
