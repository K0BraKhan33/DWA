//tally-controller.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class TallyControls extends LitElement {
  static styles = css`
    button {
      font-size: 18px;
      padding: 10px 20px;
      margin: 10px;
      border: none;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

  increment() {
    this.dispatchEvent(new CustomEvent('increment'));
  }

  decrement() {
    this.dispatchEvent(new CustomEvent('decrement'));
  }

  reset() {
    this.dispatchEvent(new CustomEvent('reset'));
  }

  render() {
    return html`
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
      <button @click=${this.reset}>Reset</button>
    `;
  }
}

customElements.define('tally-controls', TallyControls);
