import React, { useEffect, useState } from "react";
import styles from "./BillPercent.module.scss";

const defaultTipPercents = [5, 10, 15, 25, 50];
type Props = {
  setPercent: (value: number) => void;
  percent: number;
};

const BillPercent: React.FC<Props> = ({ percent, setPercent }) => {
  return (
    <div className={styles.percent}>
      <div className={styles.percent__header}>
        <label className={styles.percent__label}>Select Tip %</label>
      </div>
      <div className={styles.percent__wrapper}>
        {defaultTipPercents.map((item) => (
          <button type="button" className={styles.percent__button}>{item}%</button>
        ))}
        <input className={styles.percent__input} type="text" />
      </div>
    </div>
  );
};

export default BillPercent;
