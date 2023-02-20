import React from 'react';
import styles from './Checkbox.module.css';

export type CheckboxComponentProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
};

function CheckboxComponent(props: CheckboxComponentProps) {
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

const Checkbox = React.memo(CheckboxComponent);
export { Checkbox };
