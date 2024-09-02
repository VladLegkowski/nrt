import React from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Text.module.css';

type TextComponentProps = {
  opaque?: boolean;
  variant?: 'regular' | 'subtle';
  weight?: 'normal' | 'bold';
};

function Text(props: React.PropsWithChildren<TextComponentProps>) {
  const {
    children,
    opaque = false,
    variant = 'regular',
    weight = 'normal',
  } = props;

  const className = classNames(styles.text, {
    [styles.subtle]: variant === 'subtle',
    [styles.bold]: weight === 'bold',
    [styles.opaque]: opaque,
  });

  return <span className={className}>{children}</span>;
}

export { Text };
