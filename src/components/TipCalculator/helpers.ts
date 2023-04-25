export const checkPeople = (people: number) => {
  if (people < 1) {
    return "Can't be less than 1";
  }
};

export const checkBill = (bill: number) => {
  if (bill < 1) {
    return "Can't be less than 1";
  }
};

export const calculateTip = () => {};

export const calculateBill = (value: number, tip: number, people: number): [number, number] => {
  const totalTip = value * (tip / 100);
  const tipPerPeople = +(totalTip / people).toFixed(2) || 0;
  const totalPerPeople = +((value + totalTip) / people).toFixed(2) || 0;

  return [tipPerPeople, totalPerPeople];
};
