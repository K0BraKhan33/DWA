import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import { createBookElement, themesnd } from './book.js';

class BookApp {
  constructor() {
    this.page = 1;
    this.matches = books;
  }

  initialize() {
    this.createStartingFragment();
    this.createGenreDropdown();
    this.createAuthorsDropdown();
    this.setThemeBasedOnPreference();
    this.addEventListeners();
  }

  createStartingFragment() {
    const startingFragment = document.createDocumentFragment();
    const { page, matches } = this;

    for (const book of matches.slice(0, BOOKS_PER_PAGE)) {
      const bookElement = createBookElement(book); // Use createBookElement directly
      startingFragment.appendChild(bookElement);
    }

    document.querySelector('[data-list-items]').appendChild(startingFragment);
  } 

  createGenreDropdown() {
    const genreHtml = document.createDocumentFragment();
    const firstGenreElement = document.createElement('option');
    firstGenreElement.value = 'any';
    firstGenreElement.innerText = 'All Genres';
    genreHtml.appendChild(firstGenreElement);

    for (const [id, name] of Object.entries(genres)) {
      const element = document.createElement('option');
      element.value = id;
      element.innerText = name;
      genreHtml.appendChild(element);
    }

    document.querySelector('[data-search-genres]').appendChild(genreHtml);
  }

  createAuthorsDropdown() {
    const authorsHtml = document.createDocumentFragment();
    const firstAuthorElement = document.createElement('option');
    firstAuthorElement.value = 'any';
    firstAuthorElement.innerText = 'All Authors';
    authorsHtml.appendChild(firstAuthorElement);

    for (const [id, name] of Object.entries(authors)) {
      const element = document.createElement('option');
      element.value = id;
      element.innerText = name;
      authorsHtml.appendChild(element);
    }

    document.querySelector('[data-search-authors]').appendChild(authorsHtml);
  }

  setThemeBasedOnPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('[data-settings-theme]').value = 'night';
      themesnd('night');
    } else {
        themesnd('day');
      document.querySelector('[data-settings-theme]').value = 'day';
    }
  }

  addEventListeners() {
    document.querySelector('[data-search-cancel]').addEventListener('click', () => {
      document.querySelector('[data-search-overlay]').open = false;
    });

    document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
      document.querySelector('[data-settings-overlay]').open = false;
    });

    document.querySelector('[data-header-search]').addEventListener('click', () => {
      document.querySelector('[data-search-overlay]').open = true;
      document.querySelector('[data-search-title]').focus();
    });

    document.querySelector('[data-header-settings]').addEventListener('click', () => {
      document.querySelector('[data-settings-overlay]').open = true;
    });

    document.querySelector('[data-list-close]').addEventListener('click', () => {
      document.querySelector('[data-list-active]').open = false;
    });

    document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const { theme } = Object.fromEntries(formData);
      themesnd(theme);
      document.querySelector('[data-settings-overlay]').open = false;
    });

    document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const filters = Object.fromEntries(formData);
      const result = [];

      for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
          if (genreMatch) break;
          if (singleGenre === filters.genre) {
            genreMatch = true;
          }
        }

        if (
          (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
          (filters.author === 'any' || book.author === filters.author) &&
          genreMatch
        ) {
          result.push(book);
        }
      }

      this.page = 1;
      this.matches = result;

      if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show');
      } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show');
      }

      document.querySelector('[data-list-items]').innerHTML = '';
      const newItems = document.createDocumentFragment();

      for (const book of result.slice(0, BOOKS_PER_PAGE)) {
        const bookElement = this.bookElementCreator.createBookElement(book);
        newItems.appendChild(bookElement);
      }

      document.querySelector('[data-list-items]').appendChild(newItems);
      document.querySelector('[data-list-button]').disabled = (this.matches.length - (this.page * BOOKS_PER_PAGE)) < 1;

      document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(this.matches.length - (this.page * BOOKS_PER_PAGE)) > 0 ? (this.matches.length - (this.page * BOOKS_PER_PAGE)) : 0})</span>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('[data-search-overlay]').open = false;
    });

    document.querySelector('[data-list-button]').addEventListener('click', () => {
      const bookfragment = document.createDocumentFragment();

      for (const book of this.matches.slice(this.page * BOOKS_PER_PAGE, (this.page + 1) * BOOKS_PER_PAGE)) {
        const bookElement = this.bookElementCreator.createBookElement(book);
        bookfragment.appendChild(bookElement);
      }

      document.querySelector('[data-list-items]').appendChild(bookfragment);
      this.page += 1;
    });

    document.querySelector('[data-list-items]').addEventListener('click', (event) => {
      const pathArray = Array.from(event.path || event.composedPath());
      let active = null;

      for (const node of pathArray) {
        if (active) break;

        if (node?.dataset?.preview) {
          let result = null;

          for (const singleBook of books) {
            if (result) break;
            if (singleBook.id === node?.dataset?.preview) result = singleBook;
          }

          active = result;
        }
      }

      if (active) {
        document.querySelector('[data-list-active]').open = true;
        document.querySelector('[data-list-blur]').src = active.image;
        document.querySelector('[data-list-image]').src = active.image;
        document.querySelector('[data-list-title]').innerText = active.title;
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        document.querySelector('[data-list-description]').innerText = active.description;
      }
    });
  }
}





const bookApp = new BookApp();
bookApp.initialize();
