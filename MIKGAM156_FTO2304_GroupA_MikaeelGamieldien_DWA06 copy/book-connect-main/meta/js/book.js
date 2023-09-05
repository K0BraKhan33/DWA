import { authors, BOOKS_PER_PAGE } from './data.js';

class BookElementCreator {
  constructor() {
    this.booksPerPage = BOOKS_PER_PAGE;
  }

  createBookElement({ id, title, author, image }) {
    const bookElement = document.createElement('button');
    bookElement.classList.add('preview');
    bookElement.setAttribute('data-preview', id);

    bookElement.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;

    return bookElement;
  }

  toggleTheme(LiDa) {
    const root = document.documentElement;
    if (LiDa === 'night') {
      root.style.setProperty('--color-dark', '255, 255, 255');
      root.style.setProperty('--color-light', '10, 10, 20');
    } else {
      root.style.setProperty('--color-dark', '10, 10, 20');
      root.style.setProperty('--color-light', '255, 255, 255');
    }
  }
}

const bookElementCreator = new BookElementCreator();
const createBookElement = bookElementCreator.createBookElement.bind(bookElementCreator);
const themes = bookElementCreator.toggleTheme.bind(bookElementCreator);

export { createBookElement, themes };
