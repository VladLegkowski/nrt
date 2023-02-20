import React from 'react';
import { classNames } from '../../shared/utils/classNames';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
  layout?: 'grid' | 'list';
};
function Layout(props: LayoutProps) {
  const { children, layout = 'grid' } = props;

  const containerClassNames = classNames(styles.layout, {
    [styles.grid]: layout === 'grid',
    [styles.list]: layout === 'list',
  });

  return <section className={containerClassNames}>{children}</section>;
}

export { Layout };
