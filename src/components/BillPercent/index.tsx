import React, { ChangeEvent } from "react";
import styles from "./BillPercent.module.scss";
import classNames from "classnames";

const defaultTipPercents = [5, 10, 15, 25, 50];
type Props = {
  setPercent: (value: number) => void;
  percent: number;
};

const BillPercent: React.FC<Props> = ({ percent, setPercent }) => {
  const handlePercentChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return;
    }
    setPercent(+e.target.value > 300 ? 300 : +e.target.value);
  };
  return (
    <div className={styles.percent}>
      <div className={styles.percent__header}>
        <label className={styles.percent__label}>Select Tip %</label>
      </div>
      <div className={styles.percent__wrapper}>
        {defaultTipPercents.map((item) => (
          <button
            onClick={() => setPercent(item)}
            type="button"
            className={classNames(styles.percent__button, {
              [styles.percent__button_selected]: item === percent,
            })}
          >
            {item}%
          </button>
        ))}
        <input
          className={styles.percent__input}
          onChange={handlePercentChange}
          type="text"
          value={percent}
        />
      </div>
    </div>
  );
};

export default BillPercent;
