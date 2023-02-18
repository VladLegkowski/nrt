import React from 'react';
import { clxs } from '../../shared/ui/utils/clxs';
import styles from './List.module.css';

type ListProps = {
  children: React.ReactNode;
  layout?: 'grid' | 'list';
};
function List(props: ListProps) {
  const { children, layout = 'grid' } = props;

  const containerClassNames = clxs(styles.container, {
    [styles.grid]: layout === 'grid',
    [styles.list]: layout === 'list',
  });

  return <section className={containerClassNames}>{children}</section>;
}

export { List };
