// Import the preBook custom element and authors data
import { authors } from './data.js';

class BookFactory {
  constructor() {
    this.newAuthor = authors;
  }

  createBookElement({ id, title, author, image }) {
    // Create a button element
    const bookElement = document.createElement('button');
    bookElement.classList.add('preview');
    bookElement.setAttribute('data-preview', id);

    // Create a new instance of the preBook custom element
    const preBookElement = document.createElement('pre-book');

    // Set the attributes of the preBook custom element
    preBookElement.setAttribute('src', image);
    preBookElement.setAttribute('title', title);
    preBookElement.setAttribute('author', author);

    // Append the preBook custom element to the button
    bookElement.appendChild(preBookElement);

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

// Create an instance of the BookFactory class
const bookFactory = new BookFactory();

// Export the bookFactory instance
export { bookFactory };