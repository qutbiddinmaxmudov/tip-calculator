import React, { ChangeEvent, useState } from "react";
import styles from "./TipCalculator.module.scss";
import NumberInput from "../NumberInput";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import BillPercent from "../BillPercent";
import { calculateBill, checkBill, checkPeople } from "./helpers";
import Bill from "../Bill";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState(10);
  const [people, setPeople] = useState(1);
  const [percent, setPercent] = useState(10);
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 100000000 || isNaN(+e.target.value)) {
      return;
    }
    setBill(+e.target.value);
  };
  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 100 || isNaN(+e.target.value)) {
      return;
    }
    setPeople(+e.target.value);
  };

  const handleReset = () => {
    setPeople(1);
    setBill(10);
    setPercent(15);
  };
  const [tip, total] = calculateBill(bill, percent, people);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__controls}>
        <NumberInput
          value={bill}
          icon={dollarIcon}
          label="Bill"
          onChange={handleBillChange}
          alt="Dollar"
          error={checkBill(bill)}
        />
        <BillPercent percent={percent} setPercent={setPercent} />
        <NumberInput
          value={people}
          icon={personIcon}
          label="Number of People"
          onChange={handlePeopleChange}
          alt="Person"
          error={checkPeople(people)}
        />
      </div>
      <Bill tip={tip} total={total} onReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
