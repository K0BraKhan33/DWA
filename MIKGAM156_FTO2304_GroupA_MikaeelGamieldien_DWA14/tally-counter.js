//tally-counter.js


import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


class TallyCounter extends LitElement {
  static styles = css`
    h2 {
      font-size: 36px;
      margin: 0;
      color: #333;
    }

    .normal {
      color: #333;
    }

    .minimum {
      color: red;
    }

    .maximum {
      color: green;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  updated(changedProperties) {
    if (changedProperties.has('count')) {
      this.requestUpdate();
    }
  }

  getCountText() {
    if (this.count === 0) {
      return 'Normal';
    } else if (this.count > 10) {
      return 'Minimum Reached';
    } else if (this.count < -10) {
      return 'Maximum Reached';
    } else {
      return `${this.count}`;
    }
  }

  render() {
    const countText = this.getCountText();
    const classList = {
      normal: countText === 'Normal',
      minimum: countText === 'Minimum Reached',
      maximum: countText === 'Maximum Reached',
    };

    return html`<h2 class=${classList[countText.toLowerCase()]}>${countText}</h2>`;
  }
}

customElements.define('tally-counter', TallyCounter);
