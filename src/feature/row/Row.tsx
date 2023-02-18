import React from 'react';
import styles from './Row.module.css';

export type RowProps = {
  children: React.ReactNode;
  releaseNumber: number;
};

function Row(props: RowProps) {
  const { children, releaseNumber } = props;
  const handleClick = () => {
    alert(`Release number is ${releaseNumber}`);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      className={styles.row}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
}

export { Row };
