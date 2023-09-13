// components.js

// Create a template for the PreviewBook custom element
export const templates = document.createElement('template');
templates.innerHTML = `
  <style>
    /* CSS styles for the .preview class */
    .preview {
      border-width: 0;
      width: 100%;
      font-family: Roboto, sans-serif;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      text-align: left;
      border-radius: 8px;
      border: 1px solid rgba(var(--color-dark), 0.15);
      background: rgba(var(--color-light), 1);
    }

    @media (min-width: 60rem) {
      .preview {
        padding: 1rem;
      }
    }

    /* CSS styles for other classes and elements */
    .preview__hidden {
      display: none;
    }

    .preview__preview:hover {
      background: rgba(var(--color-blue), 0.05);
    }

    .preview__image {
      width: 48px;
      height: 70px;
      object-fit: cover;
      background: grey;
      border-radius: 2px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    }

    .info {
      padding: 1rem;
    }

    .preview__title {
      margin: 0 0 0.5rem;
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: rgba(var(--color-dark), 0.8);
    }

    .preview__author {
      color: rgba(var(--color-dark), 0.4);
    }
  </style>

  <button class="preview">
    <img class="preview__image" data-images src="" alt="Book Cover"/>
    <div class="preview__info">
      <h3 class="preview__title" data-titles></h3>
      <div class="preview__author" data-authors></div>
    </div>
  </button>
`;

// Define the PreviewBook custom element
class PreviewBook extends HTMLElement {
  #images = '';
  #titles = '';
  #authors = '';
  #elements = {
    images: undefined,
    titles: undefined,
    authors: undefined
  };

  #inner = this.attachShadow({ mode: 'closed' });

  constructor() {
    super();
    // Attach the shadow DOM and clone the template content
    this.#inner.appendChild(templates.content.cloneNode(true));
  }

  // This method is called when the element is connected to the DOM
  connectedCallback() {
    this.#elements = {
      images: this.shadowRoot.querySelector('[data-images]'),
      titles: this.shadowRoot.querySelector('[data-titles]'),
      authors: this.shadowRoot.querySelector('[data-authors]')
    };

    // Update the content based on the attributes
    this.#elements.authors.textContent = this.#authors;
    this.#elements.images.setAttribute('src', this.#images);
    this.#elements.titles.textContent = this.#titles;
  }

  // Getter and Setter methods for attributes
  get image() {
    return this.#images;
  }

  set image(value) {
    this.#images = value;
    if (this.elements.images) {
      this.elements.images.setAttribute('src', value);
    }
  }

  get title() {
    return this.#titles;
  }

  set title(value) {
    this.#titles = value;
    if (this.elements.titles) {
      this.elements.titles.textContent = value;
    }
  }

  get author() {
    return this.#authors;
  }

  set author(value) {
    this.#authors = value;
    if (this.elements.authors) {
      this.elements.authors.textContent = value;
    }
  }
}

// Export the PreviewBook custom element for use in other modules
export { PreviewBook };
