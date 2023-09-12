//components.js


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
  <img class="preview__image" data-images src="{image}"/>
  <div class="preview__info">
    <h3 class="preview__title" data-titles>{title}</h3>
    <div class="preview__author" data-authors><author</div>
  </div>
</button>`;

class PreviewBook extends HTMLElement {
#image = '';
#title = '';
#author = '';
#elements = {
  images: undefined,
  titles: undefined,
  authors: undefined
};

#inner = this.attachShadow({ mode: 'open' });

constructor() {
  super();
  const { content } = template;
  this.#inner.appendChild(content.cloneNode(true));
}

connectedCallback() {
  this.#elements = {
    images: this.shadowRoot.querySelector('[data-images]'),
    titles: this.shadowRoot.querySelector('[data-titles]'),
    authors: this.shadowRoot.querySelector('[data-authors]')
  };

  // Update the content based on the attributes
  this.#elements.authors.textContent = this.#author;
  this.#elements.images.setAttribute('src', this.#image);
  this.#elements.titles.textContent = this.#title;
}

// Getter and Setter methods for attributes
get image() {
  return this.#image;
}

set image(value) {
  this.#image = value;
  if (this.elements.images) {
    this.elements.images.setAttribute('src', value);
  }
}

get title() {
  return this.#title;
}

set title(value) {
  this.#title = value;
  if (this.elements.titles) {
    this.elements.titles.textContent = value;
  }
}

get author() {
  return this.#author;
}

set author(value) {
  this.#author = value;
  if (this.elements.authors) {
    this.elements.authors.textContent = value;
  }
}
}


