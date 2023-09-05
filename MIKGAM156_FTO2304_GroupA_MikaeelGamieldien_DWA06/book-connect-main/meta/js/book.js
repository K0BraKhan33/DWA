// books.js
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

/**
 * 
 * @param {Object} data - The data containing book information.
 * @param {string} data.id - The ID of the book.
 * @param {string} data.title - The title of the book.
 * @param {string} data.author - The author of the book.
 * @param {string} data.image - The image URL of the book.
 * @returns {HTMLElement} - The created book element.
 */

// Create a book element using the provided data
function createBookElement({ id, title, author, image }) {
    const bookElement = document.createElement('button');
    bookElement.classList = 'preview';
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
  // Export the createBookElement function

/**
 * 
 * @param {string} LiDa 
 */

function themes(LiDa){
  if (LiDa === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}
}
export { createBookElement, themes };