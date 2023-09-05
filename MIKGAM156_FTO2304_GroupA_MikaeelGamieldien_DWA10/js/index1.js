//index1.js
import { Display } from ".classcall";

class DisplayIncreasedText {
  constructor() {
    this.iNumber = 0;
  }

  increaseNumber() {
    this.iNumber += 1;
    this.sNumber = this.iNumber;
    return this.sNumber;
  }
}

const displayIncreasedText = new DisplayIncreasedText();

const incNumber = () => {
  const increasedNumber = displayIncreasedText.increaseNumber();
  Display.textContent = increasedNumber;
};

export { incNumber };


