import React, { ChangeEvent } from "react";
import styles from "./NumberInput.module.scss";
import classNames from "classnames";
type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  alt: string;
  label: string;
  error?: string;
  value: string | number;
};

const NumberInput: React.FC<Props> = ({ onChange, icon, alt, label, error, value }) => {
  return (
    <div className={styles.input}>
      <div className={styles.input__header}>
        <label className={styles.input__label}>{label}</label>
        {error && <p className={styles.input__error}>{error}</p>}
      </div>
      <div className={styles.input__wrapper}>
        <img src={icon} alt={alt} className={styles.input__icon} />
        <input
          value={value}
          className={classNames(styles.input__field, { [styles.input__field_error]: !!error })}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default NumberInput;
