import React, { ChangeEvent, useState } from "react";
import styles from "./TipCalculator.module.scss";
import NumberInput from "../NumberInput";
import dollarIcon from "../../images/icon-dollar.svg";
import personIcon from "../../images/icon-person.svg";
import BillPercent from "../BillPercent";
import { checkBill, checkPeople } from "./helpers";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState(10);
  const [people, setPeople] = useState(1);
  const [percent, setPercent] = useState(10);
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(+e.target.value);
  };
  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeople(+e.target.value);
  };
  return (
    <div className={styles.calculator}>
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
  );
};

export default TipCalculator;
