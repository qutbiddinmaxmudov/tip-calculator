import React, { useEffect, useState } from "react";
import styles from "./BillPercent.module.scss";

const defaultTipPercents = [5, 10, 15, 25, 50];
type Props = {
  onChange: (value: number) => void;
};

const BillPercent: React.FC<Props> = ({ onChange }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    onChange(percent);
  }, [percent]);

  return (
    <div className={styles.input}>
      <div className={styles.input__header}>
        <label className={styles.input__label}>Select Tip %</label>
      </div>
      <div className={styles.input__wrapper}>
        <div>
          {defaultTipPercents.map((item) => (
            <button>{item}%</button>
          ))}
        </div>
        <input type="text" />
      </div>
    </div>
  );
};

export default BillPercent;
