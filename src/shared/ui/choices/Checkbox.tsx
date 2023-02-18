import React from 'react';
import styles from './Checkbox.module.css';

export type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
};

function Checkbox(props: CheckboxProps) {
  const { checked, onChange, children } = props;
  return (
    <div className={styles.checkbox}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.checked)
          }
        />
        {children}
      </label>
    </div>
  );
}

export { Checkbox };
