//./js/index1.js
import { display } from "/MIKGAM156_FTO2304_GroupA_MikaeelGamieldien_DWA10/js/classcall.js";

class DisplayResetText {
  constructor() {
    this.iNumber =0;
  }

  reset() {
    this.iNumber = parseFloat(display.textContent.trim(), 10);
    if (isNaN(this.iNumber)) {
      this.iNumber = 0;
    } else if(this.iNumber % 10===0 || (-this.iNumber) % 10===0) {
      this.iNumber=0;
    }
    else{console.log('not a multipul of 10')}
    return this.iNumber;
  }
  }


const displayResetText = new DisplayResetText();

const reNumber = () => {
  const resetNumber = displayResetText.reset();
  display.textContent = resetNumber;
};

export { reNumber };
