import React from "react";
import styles from './Bill.module.scss'
type Props = {
  onReset: ()=>void
  tip: number,
  total: number
};

const Bill: React.FC<Props> = ({tip, total, onReset}) => {
  return (
    <div className={styles.bill}>
      <div className={styles.bill__item}>
        <div>
          <p className={styles.bill__type}>Tip Amount</p>
          <p className={styles.bill__subtitle}>/ person</p>
        </div>
        <p className={styles.bill__result}>${tip}</p>
      </div>
      <div className={styles.bill__item}>
        <div>
          <p className={styles.bill__type}>Total</p>
          <p className={styles.bill__subtitle}>/ person</p>
        </div>
        <p className={styles.bill__result}>${total}</p>
      </div>
      <button onClick={onReset} className={styles.bill__reset}>Reset</button>
    </div>
  );
};

export default Bill;
