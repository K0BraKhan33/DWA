//./js/index1.js
import { display } from "/MIKGAM156_FTO2304_GroupA_MikaeelGamieldien_DWA10/js/classcall.js";

class DisplayIncreasedText {
  constructor() {
    this.iNumber =0;
  }

  increaseNumber() {
    this.iNumber = parseFloat(display.textContent.trim(), 10);
    if (isNaN(this.iNumber)) {
      this.iNumber = 0;
    } else {
      this.iNumber += 1;
    }
    return this.iNumber;
  }
  }


const displayIncreasedText = new DisplayIncreasedText();

const incNumber = () => {
  const increasedNumber = displayIncreasedText.increaseNumber();
  display.textContent = increasedNumber;
};

export { incNumber };


