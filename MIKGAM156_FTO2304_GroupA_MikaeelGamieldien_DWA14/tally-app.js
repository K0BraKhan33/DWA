//tally-app.js


import { LitElement, html,css } from '../../node_modules/lit-element/lit-element.js';


import './tally-counter.js';
import './tally-controller.js';


class TallyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      font-family: Arial, sans-serif;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    if (this.count < 10) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > -10) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <h1>Tally App</h1>
      <tally-counter .count=${this.count}></tally-counter>
      <tally-controls
        @increment=${this.increment}
        @decrement=${this.decrement}
        @reset=${this.reset}
      ></tally-controls>
    `;
  }
}

customElements.define('tally-app', TallyApp);
