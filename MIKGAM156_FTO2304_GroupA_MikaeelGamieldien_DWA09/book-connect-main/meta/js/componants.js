const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
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
  
  .hidden {
    display: none;
  }
  
  .preview:hover {
    background: rgba(var(--color-blue), 0.05);
  }
  
  .image {
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
  
  .title {
    margin: 0 0 0.5rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    color: rgba(var(--color-dark), 0.8)
  }
  
  .author {
    color: rgba(var(--color-dark), 0.4);
  }
  
  </style>
  
  <button class="preview">
  <img class="image" src="${this.#image}" />
  <div class="info">
    <h3 class="title">${this.#title}</h3>
    <div class="author">${this.#author}</div>
  </div>
</button>
`;

class PreviewBook extends HTMLElement {
  #image = this.getAttribute("pic");
  #title = this.getAttribute("title");
  #author = this.getAttribute("author");
  #elements = {
    images: undefined,
    titles: undefined,
    authors: undefined
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Use "open" mode for Shadow DOM
    const shadow = this.shadowRoot; // Get the shadow DOM root
    const { content } = template.cloneNode(true); // Clone the template content
    shadow.appendChild(content);
  }

  connectedCallback() {
    this.#elements = {
      images: this.shadowRoot.querySelector('[data-images]'),
      titles: this.shadowRoot.querySelector('[data-titles]'),
      authors: this.shadowRoot.querySelector('[data-authors]')
    };

    this.#elements.authors.innerHTML = this.#author;
    this.#elements.images.setAttribute("src", this.#image); // Set the image source
    this.#elements.titles.innerHTML = this.#title;
  }
}

customElements.define('preview-book', PreviewBook);
