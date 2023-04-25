import React, { ChangeEvent, useState } from "react";
import styles from "./TipCalculator.module.scss";
import NumberInput from "../NumberInput";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import BillPercent from "../BillPercent";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState(0);
  const onBillChange = (e: ChangeEvent<HTMLInputElement>) => setBill(+e.target.value);
  return (
    <div className={styles.calculator}>
      <NumberInput value={bill} icon={dollarIcon} label="Bill" onChange={onBillChange} alt="Dollar" error="Error" />
      <BillPercent />
      <NumberInput
        value={bill}
        icon={personIcon}
        label="Number of People"
        onChange={onBillChange}
        alt="Person"
        error="Can't be zero"
      />
    </div>
  );
};

export default TipCalculator;
