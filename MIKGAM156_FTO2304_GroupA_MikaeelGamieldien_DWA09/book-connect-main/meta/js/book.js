  //book.js
  import { authors } from './data.js';

  class BookFactory {
    constructor() {
      this.newAuthor = authors;
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

  const bookFactory = new BookFactory();
  export { bookFactory };
  