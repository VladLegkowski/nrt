import React from 'react';
import styles from './ClickableRow.module.css';

export type ClickableRowProps = {
  releaseNumber: number;
};

function ClickableRow(props: React.PropsWithChildren<ClickableRowProps>) {
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

export { ClickableRow };
