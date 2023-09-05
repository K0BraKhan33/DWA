//./js/index2.js
import { display } from '/MIKGAM156_FTO2304_GroupA_MikaeelGamieldien_DWA10/js/classcall.js';

class DisplayDecreasedText {
  constructor() {
    this.iNumber=0
    ;
  }

  decreaseNumber() {
    this.iNumber = parseFloat(display.textContent.trim(), 10);
    if (isNaN(this.iNumber)) {
      this.iNumber = 0;
    } else {
      this.iNumber -= 1;
    }
    return this.iNumber;
}
}
const displayIncreasedText = new DisplayDecreasedText();

const decrNumber = () => {
  const decreasedNumber = displayIncreasedText.decreaseNumber();
  display.textContent = decreasedNumber;
};

export { decrNumber };



