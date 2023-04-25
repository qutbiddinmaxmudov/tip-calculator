import React from "react";
import styles from './Bill.module.scss'
type Props = {};

const Bill: React.FC<Props> = (props) => {
  return (
    <div className={styles.bill}>
      <div className={styles.bill__item}>
        <div>
          <p className={styles.bill__type}>Tip Amount</p>
          <p className={styles.bill__subtitle}>/ person</p>
        </div>
        <p className={styles.bill__result}>$0.00</p>
      </div>
      <div className={styles.bill__item}>
        <div>
          <p className={styles.bill__type}>Tip Amount</p>
          <p className={styles.bill__subtitle}>/ person</p>
        </div>
        <p className={styles.bill__result}>$0.00</p>
      </div>
      <button className={styles.bill__reset}>Reset</button>
    </div>
  );
};

export default Bill;
